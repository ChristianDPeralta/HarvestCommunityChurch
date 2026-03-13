'use client';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-white py-32 md:py-48" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://www.nextlevelworship.com/wp-content/uploads/2019/01/Cross-Easter-scaled.jpg')`}}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Join us in spreading the<span className="italic"> love of Christ</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-100 mb-8 drop-shadow-lg">
          & empowering communities in need
        </p>
      </div>
    </section>
  );
}
