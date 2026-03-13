'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left side - Logo */}
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-2xl font-bold">HARVEST COMMUNITY CHURCH</h3>
              <p className="text-slate-300 text-sm">Growing God's Kingdom</p>
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div className="md:text-right">
            <h4 className="font-bold mb-4">USA Contact Information</h4>
            <div className="text-slate-200 text-sm space-y-2">
              <div>Roger Catalan</div>
              <div>4923 Browndeer Ln.</div>
              <div>Rancho Palos Vrds., CA 90275</div>
              <div className="text-slate-300">rogerbc2000@gmail.com</div>
              <div className="text-slate-300">(310) 619-0182</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-500 pt-8">
          <p className="text-center text-slate-300 text-sm">
            © {currentYear} Harvest Community Church. A non-profit organization 501(c)(3)
          </p>
        </div>
      </div>
    </footer>
  );
}
