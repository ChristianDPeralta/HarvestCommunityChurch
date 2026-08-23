'use client';

export default function Support() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            How You Can Help
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            It is through the generosity of our Christian <span className="text-blue-600">brothers and sisters</span> that we are able to fund the ongoing activities of our ministry and further our mission for spreading the love of Christ. As our outreach grows, so does our need for financial support. We welcome any questions you may have on how we allocate our funds, and greatly appreciate your donations. To make a contribution, please visit this link:
          </p>
        </div>

        <div className="text-center">
          <a href="/contact?subject=Donation" className="btn-primary inline-block">
            DONATE NOW
          </a>
        </div>
      </div>
    </section>
  );
}
