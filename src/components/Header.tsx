'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAdminUsername, signOutAdmin } from '@/components/AdminAuthGuard';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminUsername, setAdminUsername] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const router = useRouter();
  const isAdminLoggedIn = hasHydrated && Boolean(adminUsername);

  useEffect(() => {
    const updateAdminState = () => {
      setAdminUsername(getAdminUsername());
      setHasHydrated(true);
    };

    updateAdminState();
    window.addEventListener('iamfoundationAdminAuthChanged', updateAdminState);

    return () => {
      window.removeEventListener('iamfoundationAdminAuthChanged', updateAdminState);
    };
  }, []);

  const handleLogout = () => {
    signOutAdmin();
    router.push('/admin/login');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 rounded-full pr-2 transition hover:opacity-90">
              <Image 
                src="/iamfoundation.jpeg" 
                alt="IM Foundation" 
                width={48} 
                height={48}
                className="h-12 w-12 rounded-full object-cover shadow-sm"
              />
              <div className="leading-tight">
                <h1 className="text-base font-bold tracking-[0.16em] text-slate-800">IM FOUNDATION</h1>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">Growing God's Kingdom</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            <Link href="/" className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600 relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              HOME
            </Link>
            <Link href="/about" className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600 relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              ABOUT
            </Link>
            <Link href="/services" className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600 relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              OUR WORK
            </Link>
            <Link href="/school" className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600 relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              SCHOOL
            </Link>
            <Link href="/aeta-projects" className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600 relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              AETA PROJECTS
            </Link>
            <Link href="/contact" className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600 relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              CONTACT
            </Link>
            {isAdminLoggedIn ? (
              <Link href="/admin" className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600 relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
                ADMIN ({adminUsername})
              </Link>
            ) : null}
          </div>

          {/* Donate Button */}
          <div className="hidden items-center gap-3 md:flex">
            {isAdminLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                LOG OUT
              </button>
            ) : null}
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:scale-[1.02]">
              DONATE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full border border-slate-200 p-2 text-slate-700 shadow-sm md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 md:hidden">
            <Link href="/" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
              HOME
            </Link>
            <Link href="/about" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
              ABOUT
            </Link>
            <Link href="/services" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
              OUR WORK
            </Link>
            <Link href="/school" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
              SCHOOL
            </Link>
            <Link href="/aeta-projects" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
              AETA PROJECTS
            </Link>
            <Link href="/contact" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
              CONTACT
            </Link>
            {isAdminLoggedIn ? (
              <>
                <Link href="/admin" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
                  ADMIN ({adminUsername})
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-2 w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  LOG OUT
                </button>
              </>
            ) : null}
            <button className="mt-2 w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md">
              DONATE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
