import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div>
      <section className="relative bg-cover bg-center text-white py-32 md:py-40" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/photo-collage.png')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <ContactForm />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-600 mb-12 text-center">Our Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-600 mb-4">USA Office</h3>
              <p className="text-slate-700 mb-2">
                <strong>Roger Catalan</strong>
              </p>
              <p className="text-slate-700 mb-2">4923 Browndeer Ln.</p>
              <p className="text-slate-700 mb-4">Rancho Palos Vrds., CA 90275</p>
              <p className="text-slate-700 mb-2">
                <strong>Email:</strong> rogerbc2000@gmail.com
              </p>
              <p className="text-slate-700">
                <strong>Phone:</strong> (310) 619-0182
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-600 mb-4">Get Involved</h3>
              <ul className="space-y-3 text-slate-700">
                <li>✓ Make a donation to support our mission</li>
                <li>✓ Volunteer with our organization</li>
                <li>✓ Sponsor a child's education</li>
                <li>✓ Participate in mission trips</li>
                <li>✓ Partner with us for community projects</li>
              </ul>
            </div>
          </div>

          {/* Admin contacts (same as Donate page) */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-slate-600 mb-6">Administrator contacts</h3>
            <div className="space-y-4">
              {adminContacts.map((a) => (
                <div key={a.id} className="rounded-2xl border p-4">
                  <p className="font-semibold text-slate-900">{a.name} {a.role ? `— ${a.role}` : ''}</p>
                  <div className="mt-2 text-sm text-slate-700">
                    <div className="flex flex-col gap-1">
                      {a.email ? <p className="text-sm">Email: <a className="text-blue-600 hover:underline" href={`mailto:${a.email}`}>{a.email}</a></p> : null}
                      {a.phone ? <p className="text-sm">Phone: <a className="text-blue-600 hover:underline" href={`tel:${a.phone}`}>{a.phone}</a></p> : null}
                    </div>

                    {a.socials?.length ? (
                      <p className="text-sm mt-2">{a.socials.map((s) => (
                        <a key={s.platform} className="text-blue-600 hover:underline mr-3" href={s.url} target="_blank" rel="noreferrer">{s.platform}</a>
                      ))}</p>
                    ) : null}

                    <div className="mt-3 flex flex-wrap gap-3">
                      {a.email ? (
                        <a href={`mailto:${a.email}`} className="inline-flex items-center rounded-2xl bg-blue-600 px-3 py-1.5 text-white text-sm">Message</a>
                      ) : null}
                      {a.phone ? (
                        <a href={`tel:${a.phone}`} className="inline-flex items-center rounded-2xl border border-slate-200 px-3 py-1.5 text-sm text-slate-700">Call</a>
                      ) : null}
                    </div>

                    {a.note ? <p className="text-xs text-slate-500 mt-2">{a.note}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
