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
        {/* Admin Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-white">Secure access to your AETA project management console.</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-3xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Log out of admin
            </button>
          </div>
        </div>

        {/* Main Content */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Projects Management */}
              <Link href="/admin/editor" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-400 transition">
                  <div className="text-4xl mb-3">📋</div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">AETA Projects</h2>
                  <p className="text-slate-700 mb-4">Open the secure hidden editor to manage AETA project content and upload images directly.</p>
                  <span className="btn-primary inline-block">
                    Open Admin Editor →
                  </span>
                </div>
              </Link>

              {/* More Admin Features Coming Soon */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-lg p-8 opacity-60">
                <div className="text-4xl mb-3">🔒</div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Coming Soon</h2>
                <p className="text-slate-700 mb-4">More secure content management tools are under development.</p>
                <span className="inline-block rounded px-4 py-2 text-sm font-semibold text-slate-700 cursor-not-allowed bg-slate-100">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/aeta-projects"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  View AETA Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminAuthGuard>
  );
}
