'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminUsers } from '@/data/admins';
import { isAdminSignedIn, signInAdmin } from '@/components/AdminAuthGuard';

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAdminSignedIn()) {
      router.replace('/admin');
    }
  }, [router]);

  const findMatchingAdmin = (usernameValue: string, passwordValue: string) => {
    return adminUsers.find(
      (admin) =>
        admin.username.toLowerCase() === usernameValue.toLowerCase().trim() &&
        admin.password === passwordValue.trim()
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const admin = findMatchingAdmin(username, password);
    if (admin) {
      signInAdmin(admin.username);
      router.push('/admin');
      return;
    }

    setError('Incorrect username or password. Please try again or contact your site administrator.');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/80 backdrop-blur-sm">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Admin access</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">I AM FOUNDATION Administration</h1>
          <p className="mt-3 text-slate-600">Sign in with authorized credentials to manage project updates for the foundation website.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="admin-username" className="block text-sm font-semibold text-slate-700">
              Admin username
            </label>
            <input
              id="admin-username"
              name="admin-username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="block text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              id="admin-password"
              name="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {error ? (
            <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Administration reminders</p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>Only authorized administrators should use this page.</li>
            <li>Store credentials securely and avoid sharing login access through chat or email.</li>
            <li>Set <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono">NEXT_PUBLIC_ADMIN_PASSWORD</code> in production and rotate it periodically.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
