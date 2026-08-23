'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAdminUsername, signOutAdmin } from '@/components/AdminAuthGuard';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminUsername, setAdminUsername] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isAdminLoggedIn = hasHydrated && Boolean(adminUsername);

  useEffect(() => {
    const updateAdminState = () => {
      setAdminUsername(getAdminUsername());
      setHasHydrated(true);
    };

    updateAdminState();
    window.addEventListener('imfoundationAdminAuthChanged', updateAdminState);

    return () => {
      window.removeEventListener('imfoundationAdminAuthChanged', updateAdminState);
    };
  }, []);

  const handleLogout = () => {
    signOutAdmin();
    router.push('/admin/login');
  };

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 transition hover:opacity-95">
              <Image src="/iamfoundation.jpeg" alt="I Am Foundation" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div className="leading-tight">
                <span className="text-lg font-semibold text-slate-900">I Am Foundation</span>
                <p className="text-xs text-slate-700 hidden sm:block">Growing God's Kingdom</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            <Link href="/" className={`nav-link text-sm transition-colors relative after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${pathname === '/' ? 'text-blue-700' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link text-sm transition-colors relative after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${pathname === '/about' ? 'text-blue-700' : ''}`}>
              About
            </Link>
            <Link href="/services" className={`nav-link text-sm transition-colors relative after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${pathname === '/services' ? 'text-blue-700' : ''}`}>
              Our work
            </Link>
            <Link href="/school" className={`nav-link text-sm transition-colors relative after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${pathname === '/school' ? 'text-blue-700' : ''}`}>
              School
            </Link>
            <Link href="/aeta-projects" className={`nav-link text-sm transition-colors relative after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${pathname === '/aeta-projects' ? 'text-blue-700' : ''}`}>
              AETA projects
            </Link>
            <Link href="/contact" className={`nav-link text-sm transition-colors relative after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${pathname === '/contact' ? 'text-blue-700' : ''}`}>
              Contact
            </Link>
            {isAdminLoggedIn ? (
              <Link href="/admin" className={`text-sm font-semibold transition-colors relative after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${pathname && pathname.startsWith('/admin') ? 'text-blue-700' : 'text-slate-800'}`}>
                Admin ({adminUsername})
              </Link>
            ) : null}
          </div>

          {/* Donate Button */}
          <div className="hidden items-center gap-3 md:flex">
            {isAdminLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                LOG OUT
              </button>
            ) : null}
            <Link href="/contact?subject=Donation" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700">
              Donate
            </Link>
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
                <Link href="/" className="nav-link block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700">
              Home
            </Link>
            <Link href="/about" className="nav-link block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700">
              About
            </Link>
            <Link href="/services" className="nav-link block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700">
              Our work
            </Link>
            <Link href="/school" className="nav-link block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700">
              School
            </Link>
            <Link href="/aeta-projects" className="nav-link block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700">
              AETA projects
            </Link>
            <Link href="/contact" className="nav-link block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700">
              Contact
            </Link>
            {isAdminLoggedIn ? (
              <>
                <Link href="/admin" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
                  Admin ({adminUsername})
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-2 w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Log out
                </button>
              </>
            ) : null}
            <Link href="/contact?subject=Donation" className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700">
              Donate
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
