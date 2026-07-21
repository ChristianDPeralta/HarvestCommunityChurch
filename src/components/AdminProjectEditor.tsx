'use client';

import { useEffect, useMemo, useState } from 'react';
import { Project, projects as initialProjects } from '@/data/projects';

const STORAGE_KEY = 'imfoundationProjectDrafts';

function normalizeGallery(value: string) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function AdminProjectEditor() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedId, setSelectedId] = useState<number>(initialProjects[0]?.id ?? 0);
  const [formData, setFormData] = useState<Project>(initialProjects[0]);
  const [copyStatus, setCopyStatus] = useState('');
  const [draftLoaded, setDraftLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Project[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProjects(parsed);
          setSelectedId(parsed[0].id);
          setFormData(parsed[0]);
          setDraftLoaded(true);
          return;
        }
      } catch {
        // ignore invalid JSON
      }
    }

    setFormData(initialProjects[0]);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }
  }, [projects]);

  useEffect(() => {
    const selectedProject = projects.find((project) => project.id === selectedId);
    if (selectedProject) {
      setFormData(selectedProject);
    }
  }, [selectedId, projects]);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? projects[0],
    [projects, selectedId]
  );

  const handleChange = (field: keyof Project, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: field === 'gallery' ? normalizeGallery(value) : value,
    } as Project));
  };

  const convertFileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Unable to read file')); 
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });

  const handleUploadImage = async (file: File, field: 'image' | 'gallery') => {
    try {
      const dataUrl = await convertFileToDataUrl(file);
      setFormData((current) => {
        if (field === 'image') {
          return { ...current, image: dataUrl } as Project;
        }

        return { ...current, gallery: [...current.gallery, dataUrl] } as Project;
      });
    } catch {
      setCopyStatus('Unable to upload the selected image. Please try a different file.');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setFormData((current) => ({
      ...current,
      gallery: current.gallery.filter((_, galleryIndex) => galleryIndex !== index),
    } as Project));
  };

  const handleSave = () => {
    setProjects((current) =>
      current.map((project) => (project.id === selectedId ? { ...formData } : project))
    );
    setCopyStatus('Draft saved locally. Use the copy button to export your latest project list.');
  };

  const handleCreateNew = () => {
    const nextId = Math.max(...projects.map((project) => project.id)) + 1;
    const newProject: Project = {
      id: nextId,
      title: 'New project title',
      category: 'New category',
      summary: 'Short summary of the new project.',
      description: 'Full description of the project, impact, and outcomes.',
      image: '/your-image.jpg',
      gallery: ['/your-image.jpg'],
      date: new Date().toISOString().slice(0, 10),
    };

    setProjects((current) => [...current, newProject]);
    setSelectedId(nextId);
    setFormData(newProject);
    setCopyStatus('A new draft project was created. Remember to export your data after editing.');
  };

  const handleCopyData = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(projects, null, 2));
      setCopyStatus('Draft data copied to clipboard. Paste it into src/data/projects.ts or send it to your developer.');
    } catch {
      setCopyStatus('Unable to copy draft data. Please use a modern browser or try again.');
    }
  };

  const handleClearDrafts = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setProjects(initialProjects);
    setSelectedId(initialProjects[0]?.id ?? 0);
    setFormData(initialProjects[0]);
    setCopyStatus('Draft data reset to the published project list.');
  };

  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Project management</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Draft, edit, and export AETA project content</h2>
            <p className="mt-2 text-slate-600">Manage your project updates in a secure admin workflow. Draft changes are stored locally and can be copied as a JSON export for deployment.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCreateNew}
              className="rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
            >
              + Add new draft project
            </button>
            <button
              type="button"
              onClick={handleCopyData}
              className="rounded-3xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Copy JSON export
            </button>
            <button
              type="button"
              onClick={handleClearDrafts}
              className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Reset draft data
            </button>
          </div>
        </div>

        {draftLoaded ? (
          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-100 px-5 py-4 text-sm text-blue-800">
            Draft content loaded from your browser. Continue editing or export your project list.
          </div>
        ) : null}
      </div>

      <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,_1fr)]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Current projects</h3>
              <p className="text-sm text-slate-600">Select any project to edit its content.</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              {projects.length} items
            </span>
          </div>

          <div className="space-y-3">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedId(project.id)}
                className={`w-full rounded-3xl border px-4 py-4 text-left transition ${project.id === selectedId ? 'border-blue-600 bg-blue-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{project.title}</p>
                    <p className="text-sm text-slate-600">{project.category}</p>
                  </div>
                  <span className="text-xs text-slate-500">ID {project.id}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600 line-clamp-2">{project.summary}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Editing: {selectedProject.title}</h3>
              <p className="text-sm text-slate-600">Update the project fields below and save your draft.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Published date: {selectedProject.date}</div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Title
                <input
                  type="text"
                  value={formData?.title || ''}
                  onChange={(event) => handleChange('title', event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Category
                <input
                  type="text"
                  value={formData?.category || ''}
                  onChange={(event) => handleChange('category', event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Summary
                <input
                  type="text"
                  value={formData?.summary || ''}
                  onChange={(event) => handleChange('summary', event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Date
                <input
                  type="date"
                  value={formData?.date || ''}
                  onChange={(event) => handleChange('date', event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>
            </div>

            <div className="space-y-4">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Primary image
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        void handleUploadImage(file, 'image');
                      }
                    }}
                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white file:font-semibold"
                  />
                </div>
              </label>

              {formData?.image ? (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-700">Primary image preview</p>
                  <img
                    src={formData.image}
                    alt="Primary project preview"
                    className="mt-3 max-h-44 w-full rounded-3xl object-cover"
                  />
                </div>
              ) : null}
            </div>

            <div className="space-y-4">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Gallery images
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => {
                    const files = event.target.files;
                    if (files) {
                      Array.from(files).forEach((file) => void handleUploadImage(file, 'gallery'));
                      event.target.value = '';
                    }
                  }}
                  className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white file:font-semibold"
                />
              </label>

              {formData?.gallery.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {formData.gallery.map((imageSrc, index) => (
                    <div key={`${imageSrc}-${index}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 relative">
                      <img
                        src={imageSrc}
                        alt={`Gallery image ${index + 1}`}
                        className="h-44 w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryImage(index)}
                        className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No gallery images uploaded yet.</p>
              )}
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Full description
              <textarea
                value={formData?.description || ''}
                onChange={(event) => handleChange('description', event.target.value)}
                rows={5}
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </label>

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
            >
              Save draft changes
            </button>

            {copyStatus ? (
              <div className="rounded-3xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                {copyStatus}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
        <p className="font-semibold text-slate-900">Deployment note</p>
        <p className="mt-3 leading-7">
          This admin workflow lets you draft and preview project updates locally before deployment. To publish changes on the live website, copy the updated project JSON and update <code className="rounded bg-white px-1.5 py-0.5 font-mono">src/data/projects.ts</code> or add the content through your repository deployment workflow.
        </p>
      </div>
    </div>
  );
}
