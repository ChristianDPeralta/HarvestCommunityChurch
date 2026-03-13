'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/Harves Church Logo.png" alt="Harvest Community Church" className="h-12 w-auto" />
            <div>
              <h1 className="text-lg font-bold text-slate-700">HARVEST COMMUNITY CHURCH</h1>
              <p className="text-xs text-slate-500">Growing God's Kingdom</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-700 hover:text-slate-500 font-semibold transition">
              HOME
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-500 font-semibold transition">
              ABOUT
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-slate-500 font-semibold transition">
              OUR WORK
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-500 font-semibold transition">
              CONTACT
            </Link>
          </div>

          {/* Donate Button */}
          <div className="hidden md:flex">
            <button className="bg-slate-500 text-white px-6 py-2 font-bold hover:bg-slate-600 transition rounded">
              DONATE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
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
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <Link href="/" className="block text-slate-700 hover:text-slate-500 font-semibold">
              HOME
            </Link>
            <Link href="/about" className="block text-slate-700 hover:text-slate-500 font-semibold">
              ABOUT
            </Link>
            <Link href="/services" className="block text-slate-700 hover:text-slate-500 font-semibold">
              OUR WORK
            </Link>
            <Link href="/contact" className="block text-slate-700 hover:text-slate-500 font-semibold">
              CONTACT
            </Link>
            <button className="w-full bg-slate-500 text-white px-6 py-2 font-bold hover:bg-slate-600 transition">
              DONATE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
