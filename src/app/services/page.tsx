import Services from "@/components/Services";
import Support from "@/components/Support";

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="relative bg-cover bg-center text-white py-32 md:py-40" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://t3.ftcdn.net/jpg/07/08/96/18/360_F_708961853_Wz6z791evkm31nm2MtOwdAIXzJzBbaHM.jpg')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-100">
            Through education, local outreach, and church partnerships, we are helping communities grow with dignity, hope, and practical support.
          </p>
        </div>
      </section>

      <Services />
      <Support />
    </div>
  );
}
