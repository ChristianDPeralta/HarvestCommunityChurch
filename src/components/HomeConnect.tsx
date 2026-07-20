import Link from "next/link";

const sections = [
  {
    href: "/about",
    title: "About the Foundation",
    description: "Our mission, values, and community impact story.",
  },
  {
    href: "/services",
    title: "Our Work",
    description: "Discover the programs and projects we support.",
  },
  {
    href: "/school",
    title: "School Programs",
    description: "Learn how early education and scholarships make a difference.",
  },
  {
    href: "/aeta-projects",
    title: "AETA Projects",
    description: "See our latest partner initiatives and outreach efforts.",
  },
  {
    href: "/contact",
    title: "Contact & Support",
    description: "Reach out for donations, volunteering, or partnership inquiries.",
  },
];

export default function HomeConnect() {
  return (
    <section id="discover" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 mb-4">
            Explore the site
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Everything is connected from the homepage.
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Navigate quickly to the stories, programs, school support, outreach projects, and ways to give.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white/90"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 mb-3">
                {section.title}
              </div>
              <p className="text-slate-700 leading-7">{section.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
                Learn more
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
