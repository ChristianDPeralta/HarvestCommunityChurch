import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div>
      <section
        className="hero-section relative bg-cover bg-center text-white py-20 md:py-28"
        style={{
          backgroundImage: `url('/photo-collage.png')`,
        }}
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-hero-title">Contact Us</h1>
        </div>
      </section>

      <ContactForm />

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Support Our Work</h2>
          <p className="text-slate-700 mb-6">We appreciate your generosity and partnership. For donations, sponsorships, and ministry support, please contact the administrative office directly so your contribution can be coordinated properly.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:rogerbc2000@gmail.com?subject=Donation%20Inquiry" className="btn-primary inline-flex items-center">Email for Donation</a>
            <a href="tel:+13106190182" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition">Call the Office</a>
          </div>
        </div>
      </section>
    </div>
  );
}
