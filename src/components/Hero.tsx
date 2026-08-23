'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 md:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(6,7,22,0.72), rgba(6,7,22,0.58)), url('https://www.nextlevelworship.com/wp-content/uploads/2019/01/Cross-Easter-scaled.jpg')`,
      }}
      aria-label="Hero — Join our mission"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="page-hero-title mb-4 drop-shadow-[0_8px_24px_rgba(2,6,23,0.6)]">
          Join us in spreading the <span className="italic">love of Christ</span>
        </h2>
        <p className="page-hero-subtitle mb-8 drop-shadow-sm">
          Empowering communities through education, outreach, and sustainable support.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary"
            aria-label="Donate now"
          >
            Donate
          </Link>

          <Link
            href="#discover"
            className="btn-outline"
            aria-label="Explore the site"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
