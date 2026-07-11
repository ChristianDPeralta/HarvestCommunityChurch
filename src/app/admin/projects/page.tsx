import Link from 'next/link';
import { projects } from '@/data/projects';

export default function AdminProjects() {
  return (
    <div className="space-y-8">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Admin - AETA Projects</h1>
          <p className="text-slate-300">Manage and post about AETA community projects</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Instructions */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">How to Manage Projects</h2>
            <p className="text-slate-700 mb-4">
              To add, edit, or delete projects, update the file: <code className="bg-white px-2 py-1 rounded border border-slate-300 font-mono">src/data/projects.ts</code>
            </p>
            <div className="bg-white p-4 rounded border border-dotted border-blue-300">
              <h3 className="font-bold text-slate-800 mb-2">Project Data Structure:</h3>
              <pre className="text-sm text-slate-700 overflow-x-auto">
{`{
  id: number;
  title: string;
  category: string;
  summary: string;        // Short 1-2 line description
  description: string;    // Full detailed description
  image: string;         // Path to image (e.g., "/1.jpg")
  date: string;          // Date (YYYY-MM-DD format)
}`}
              </pre>
            </div>
          </div>

          {/* Current Projects List */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Current Projects ({projects.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300">
                    <th className="px-4 py-3 text-left font-bold text-slate-700">ID</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Title</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Category</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Date</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-700 font-semibold">{project.id}</td>
                      <td className="px-4 py-3 text-slate-700">{project.title}</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </td>
                      <td className="px-4 py-3 text-slate-700 text-sm">{project.image}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Template */}
          <div className="bg-slate-50 p-8 rounded-lg mt-12 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Example: How to Add a New Project</h3>
            <p className="text-slate-700 mb-4">Add this object to the <code className="bg-white px-2 py-1 rounded border border-slate-300 font-mono">projects</code> array in <code className="bg-white px-2 py-1 rounded border border-slate-300 font-mono">src/data/projects.ts</code>:</p>
            <pre className="bg-white p-4 rounded border border-slate-300 text-sm text-slate-700 overflow-x-auto">
{`{
  id: 5,
  title: "Your Project Title",
  category: "Category Name",
  summary: "Short summary in 1-2 lines",
  description: "Full detailed description of the project, impact, and outcomes.",
  image: "/your-image.jpg",
  date: "2024-05-15"
}`}
            </pre>
            <p className="text-slate-700 text-sm mt-4">
              <strong>Note:</strong> Images should be placed in the <code className="bg-white px-2 py-1 rounded border border-slate-300 font-mono">public/</code> folder
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link 
              href="/aeta-projects" 
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 font-bold rounded-lg hover:shadow-lg transition"
            >
              ← Back to AETA Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
