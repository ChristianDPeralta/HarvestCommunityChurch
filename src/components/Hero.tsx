'use client';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-white py-32 md:py-48" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://www.nextlevelworship.com/wp-content/uploads/2019/01/Cross-Easter-scaled.jpg')`}}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Serving children, families, and communities with compassion
        </h2>
        <p className="text-xl md:text-2xl text-slate-100 mb-8 drop-shadow-lg">
          I AM FOUNDATION is a faith-based nonprofit focused on education, outreach, and practical support in the Philippines.
        </p>
      </div>
    </section>
  );
}
