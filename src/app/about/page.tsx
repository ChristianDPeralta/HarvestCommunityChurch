import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-16">
      <section className="relative bg-cover bg-center text-white py-32 md:py-40" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/pine-cove/image/upload/t_twitterimagelarge/blog/imported/content/Bible-Open-Leather')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About I AM FOUNDATION</h1>
          <p className="mt-6 text-xl text-slate-100 max-w-3xl mx-auto">
            We are a faith-centered nonprofit committed to empowering lives through education, service, and community care.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-600 mb-6">Who we are</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                I AM FOUNDATION exists to turn compassion into action. We serve vulnerable families and children in the Philippines by providing practical support, educational opportunities, and community-based outreach.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Our work is rooted in the belief that every child deserves the chance to learn, every family deserves the chance to thrive, and every community deserves the opportunity to grow with dignity.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-700 mb-4">How we serve</h3>
              <ul className="space-y-3 text-slate-700">
                <li>• Supporting children and families through education and sponsorship.</li>
                <li>• Partnering with churches, pastors, and local leaders in outreach initiatives.</li>
                <li>• Encouraging long-term growth through livelihood and community support.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm mb-8">
            <h2 className="text-3xl font-bold text-slate-600 mb-4">Our Mission</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              We believe that God's love is all-encompassing, and therefore we are an extension of God's love. Our mission is to strengthen families in the Philippines and build churches with pre-schools to serve the local community. We want to provide Biblical empowerment through education and the entrepreneurial spirit.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mt-4">
              We empower children in poverty by financing their education all the way through college.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mt-4">
              Our funding is created by sponsorships and our partner, Paglingap Foundation.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm mb-10">
            <h2 className="text-3xl font-bold text-slate-600 mb-4">Our Vision</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              We envision a Philippines where every child has access to quality education, every family has financial stability, and every community is strengthened by the gospel of Christ. We believe that by providing educational empowerment and entrepreneurial support, we can lift families out of poverty and create lasting change in communities.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-600 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-700 mb-3">🙏 Love & Compassion</h3>
              <p className="text-slate-600">We demonstrate Christ's love through practical acts of service and genuine care for others.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-700 mb-3">📚 Education</h3>
              <p className="text-slate-600">Education is the key to breaking cycles of poverty and building prosperous communities.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-700 mb-3">💪 Empowerment</h3>
              <p className="text-slate-600">We believe in empowering individuals to become agents of change in their own communities.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-700 mb-3">🤝 Community</h3>
              <p className="text-slate-600">Together, we are stronger. Community support creates sustainable impact and lasting relationships.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-slate-600 text-white px-8 py-3 font-bold hover:bg-slate-700 transition">
              CONTACT OUR ADMIN TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
