'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-50 to-blue-50 shadow-md sticky top-0 z-50 border-b border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image 
              src="/iamfoundation.jpeg" 
              alt="Harvest Community Church" 
              width={56} 
              height={56}
              className="h-14 w-auto"
            />
            <div>
              <h1 className="text-lg font-bold text-slate-800">IAMFOUNDATION</h1>
              <p className="text-xs text-blue-600 font-semibold">Growing God's Kingdom</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 font-semibold transition relative group">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 font-semibold transition relative group">
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-blue-600 font-semibold transition relative group">
              OUR WORK
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/school" className="text-slate-700 hover:text-blue-600 font-semibold transition relative group">
              SCHOOL
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/aeta-projects" className="text-slate-700 hover:text-blue-600 font-semibold transition relative group">
              AETA PROJECTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-semibold transition relative group">
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
          </div>

          {/* Donate Button */}
          <div className="hidden md:flex">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 py-2.5 font-bold hover:shadow-lg hover:scale-105 transition-all rounded-lg">
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
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-blue-100 pt-4 bg-gradient-to-b from-transparent to-blue-50">
            <Link href="/" className="block text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded hover:bg-blue-50 transition">
              HOME
            </Link>
            <Link href="/about" className="block text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded hover:bg-blue-50 transition">
              ABOUT
            </Link>
            <Link href="/services" className="block text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded hover:bg-blue-50 transition">
              OUR WORK
            </Link>
            <Link href="/school" className="block text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded hover:bg-blue-50 transition">
              SCHOOL
            </Link>
            <Link href="/aeta-projects" className="block text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded hover:bg-blue-50 transition">
              AETA PROJECTS
            </Link>
            <Link href="/contact" className="block text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded hover:bg-blue-50 transition">
              CONTACT
            </Link>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 font-bold hover:shadow-lg transition rounded-lg">
              DONATE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
