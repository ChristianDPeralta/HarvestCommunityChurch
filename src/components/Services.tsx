'use client';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: ServiceCard[] = [
  {
    id: 'church',
    title: 'CHURCH AND PRE-SCHOOL BUILDING PROJECT',
    description: 'Many families cannot afford quality early education. We support the development of spaces where children can learn, worship, and grow in a safe and nurturing environment.',
    icon: '🏘️',
  },
  {
    id: 'fund-pastors',
    title: 'FUND PASTORS & MISSIONARY WORKERS',
    description: 'We provide support to pastors and missionaries who are faithfully serving communities and sharing the gospel through practical care and discipleship.',
    icon: '⛪',
  },
  {
    id: 'entrepreneur',
    title: 'MICRO ENTREPRENEUR FUNDING',
    description: 'Through small-scale financial support and resources, we help individuals build sustainable livelihoods and strengthen their families.',
    icon: '🏪',
  },
  {
    id: 'educational',
    title: 'EDUCATIONAL WORKSHOPS',
    description: 'We organize workshops that equip parents and youth with practical guidance and biblical encouragement to support healthy growth and learning.',
    icon: '📚',
  },
  {
    id: 'short-term',
    title: 'SHORT-TERM MISSION TRIPS',
    description: 'Our mission teams bring essential care, medicine, and compassion to underserved communities through organized outreach efforts.',
    icon: '👥',
  },
  {
    id: 'local',
    title: 'LOCAL OUTREACH',
    description: 'We reach out to children and families through ministry, food support, and acts of service that strengthen community relationships.',
    icon: '🤝',
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
            Our Work
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            I AM FOUNDATION serves children, families, and communities through education, outreach, and practical support in the Philippines. These efforts reflect our mission to bring hope and lasting care where it is needed most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
              <div className="mb-6 flex justify-center">
                <div className="text-5xl">{service.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-4 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
