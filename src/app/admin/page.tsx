'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminAuthGuard, { signOutAdmin } from '@/components/AdminAuthGuard';

export default function AdminPage() {
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
              <h1 className="text-4xl font-bold mb-2">Administration Dashboard</h1>
              <p className="text-slate-300">Manage foundation project content and review published updates.</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-3xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Sign out
            </button>
          </div>
        </div>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <Link href="/admin/editor" className="group lg:col-span-2">
                <div className="h-full rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 transition hover:border-blue-400 hover:shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Project Content Editor</h2>
                  <p className="text-slate-700 mb-6">
                    Update project titles, descriptions, and images before preparing content for deployment.
                  </p>
                  <span className="inline-flex items-center rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white transition group-hover:bg-blue-700">
                    Open editor
                  </span>
                </div>
              </Link>

              <Link href="/admin/projects" className="group">
                <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-slate-300 hover:shadow-md">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Published Projects</h2>
                  <p className="text-slate-700 mb-6">Review the currently published project list and categories.</p>
                  <span className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition group-hover:bg-slate-100">
                    View summary
                  </span>
                </div>
              </Link>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Website Links</h3>
              <div className="flex flex-wrap gap-5">
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  Return to homepage
                </Link>
                <Link
                  href="/aeta-projects"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  View live AETA projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminAuthGuard>
  );
}
