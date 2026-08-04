'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left side - Logo and Mission */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <Image 
                  src="/iamfoundation.jpeg" 
                  alt="I AM FOUNDATION" 
                width={56} 
                height={56}
                className="h-14 w-auto"
              />
              <div>
                  <h3 className="text-xl font-bold text-white">I AM FOUNDATION</h3>
                <p className="text-xs text-blue-300 font-semibold">Growing God's Kingdom</p>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mt-2 max-w-xs">Dedicated to serving our community with compassion, faith, and the love of Christ.</p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white border-b-2 border-blue-600 pb-2">Quick Links</h4>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition">Our Work</Link>
              </li>
              <li>
                <Link href="/school" className="hover:text-blue-400 transition">School</Link>
              </li>
              <li>
                <Link href="/aeta-projects" className="hover:text-blue-400 transition">AETA Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right side - Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white border-b-2 border-blue-600 pb-2">Contact Information</h4>
            <div className="text-slate-300 text-sm space-y-3">
              <div>
                <p className="font-semibold text-blue-300">Contact Person</p>
                <p>Roger Catalan</p>
              </div>
              <div>
                <p className="font-semibold text-blue-300">Address</p>
                <p>4923 Browndeer Ln.<br />Rancho Palos Vrds., CA 90275</p>
              </div>
              <div>
                <p className="font-semibold text-blue-300">Email</p>
                <a href="mailto:rogerbc2000@gmail.com" className="hover:text-blue-400 transition">rogerbc2000@gmail.com</a>
              </div>
              <div>
                <p className="font-semibold text-blue-300">Phone</p>
                <a href="tel:+13106190182" className="hover:text-blue-400 transition">(310) 619-0182</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-600 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © {currentYear} I AM FOUNDATION. A non-profit organization 501(c)(3)
          </p>
          <p className="text-center text-slate-500 text-xs mt-2">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
