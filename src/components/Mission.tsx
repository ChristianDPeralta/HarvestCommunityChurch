import Link from "next/link";

export default function Mission() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-600 mb-8">OUR MISSION & VISION</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                We strengthen families in the Philippines by extending God's love through education, practical support, and community outreach.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                We envision a future where every child has access to education and every family can thrive with dignity, hope, and lasting care.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Learn more about I AM FOUNDATION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
