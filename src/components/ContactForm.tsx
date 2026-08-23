export default function ContactForm() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Church leadership and admin contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Main Administrator</p>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Roger Catalan</h3>
            <p className="text-base text-blue-700 font-medium mb-5">Administrative Contact</p>

            <ul className="space-y-3 text-slate-700">
              <li><strong>Address:</strong> 4923 Browndeer Ln., Rancho Palos Verdes, CA 90275</li>
              <li><strong>Email:</strong> <a href="mailto:rogerbc2000@gmail.com" className="font-semibold text-slate-800 underline decoration-slate-400 underline-offset-4 hover:text-blue-700">rogerbc2000@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+13106190182" className="font-semibold text-slate-800 underline decoration-slate-400 underline-offset-4 hover:text-blue-700">(310) 619-0182</a></li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Spiritual Leadership</p>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Pastor Joseph Vincent Hue Catalan</h3>
            <p className="text-base text-blue-700 font-medium mb-5">Senior Pastor</p>

            <ul className="space-y-3 text-slate-700">
              <li><strong>Role:</strong> Church leadership and pastoral guidance</li>
              <li><strong>Support:</strong> Prayer requests, ministry guidance, and spiritual direction</li>
              <li><strong>Contact:</strong> Please reach out through Roger Catalan for church coordination and donation inquiries</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-blue-600 px-6 py-6 text-center shadow-sm">
          <p className="text-lg font-semibold mb-4 text-black">For donations, ministry partnerships, and church inquiries</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:rogerbc2000@gmail.com?subject=Donation%20Inquiry" className="inline-flex items-center justify-center rounded-full bg-[#f4f4f4] px-5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-white/80">
              Email Main Contact
            </a>
            <a href="tel:+13106190182" className="inline-flex items-center justify-center rounded-full border border-white bg-transparent px-5 py-2.5 text-sm font-bold text-black hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-white/80">
              Call the office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
