'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminAuthGuard, { signOutAdmin } from '@/components/AdminAuthGuard';
import { projects } from '@/data/projects';

export default function AdminProjects() {
  const router = useRouter();

  const handleLogout = () => {
    signOutAdmin();
    router.push('/admin/login');
  };

  return (
    <AdminAuthGuard>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Admin Project Summary</h1>
              <p className="text-white">This hidden admin page shows the published AETA project list and links to the secure editor.</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-3xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Log out
            </button>
          </div>
        </div>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Published AETA Projects ({projects.length})</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div key={project.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-4 rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">ID {project.id}</div>
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="mt-2 text-slate-600 line-clamp-3">{project.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{project.category}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/admin/editor"
                className="btn-primary inline-block"
              >
                Open secure editor →
              </Link>
              <Link
                href="/aeta-projects"
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                View live AETA projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AdminAuthGuard>
  );
}
