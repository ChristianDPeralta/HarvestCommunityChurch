import Link from "next/link";

export default function Support() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-600 mb-8">
            PARTNER WITH US
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            We welcome support, questions, and partnerships from individuals and organizations who share our commitment to serving vulnerable communities with dignity and care.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-600 text-white px-8 py-3 text-lg font-bold hover:bg-slate-700 transition"
          >
            CONTACT OUR TEAM
          </Link>
        </div>
      </div>
    </section>
  );
}
