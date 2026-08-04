'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminAuthGuard, { signOutAdmin } from '@/components/AdminAuthGuard';
import AdminProjectEditor from '@/components/AdminProjectEditor';

export default function AdminEditorPage() {
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
              <h1 className="text-4xl font-bold mb-2">Project Content Editor</h1>
              <p className="text-slate-300">Update project content and media before publishing changes to the website.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin/projects"
                className="rounded-3xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                View published projects
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-3xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <AdminProjectEditor />
          </div>
        </section>
      </div>
    </AdminAuthGuard>
  );
}
