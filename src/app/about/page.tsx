import Mission from "@/components/Mission";

export default function About() {
  return (
    <div className="space-y-16">
      <section className="relative bg-cover bg-center text-white py-32 md:py-40" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/pine-cove/image/upload/t_twitterimagelarge/blog/imported/content/Bible-Open-Leather')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Harvest Community Church</h1>
        </div>
      </section>

      <Mission />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-600 mb-8">Our Vision</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            We envision a Philippines where every child has access to quality education, every family has financial stability, and every community is strengthened by the gospel of Christ. We believe that by providing educational empowerment and entrepreneurial support, we can lift families out of poverty and create lasting change in communities.
          </p>
          
          <h2 className="text-3xl font-bold text-slate-600 mb-8 mt-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">🙏 Love & Compassion</h3>
              <p className="text-slate-700">We demonstrate Christ's love through practical acts of service and genuine care for others.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">📚 Education</h3>
              <p className="text-slate-700">Education is the key to breaking cycles of poverty and building prosperous communities.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">💪 Empowerment</h3>
              <p className="text-slate-700">We believe in empowering individuals to become agents of change in their own communities.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">🤝 Community</h3>
              <p className="text-slate-700">Together, we are stronger. Community support creates sustainable impact and lasting relationships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
