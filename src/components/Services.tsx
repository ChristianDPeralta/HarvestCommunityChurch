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
    description: 'Many locals cannot afford to send their children to a private pre-school. We\'re constructing a facility for families to worship & teach kids about a life in Christ.',
    icon: '🏘️',
  },
  {
    id: 'fund-pastors',
    title: 'FUND PASTORS & MISSIONARY WORKERS',
    description: 'We provide financial support to churches, missionary pastors, and others working to grow God\'s kingdom. We recently sent supplies of PPE and medicines were sent to missionary Rochelle M. and her team.',
    icon: '⛪',
  },
  {
    id: 'entrepreneur',
    title: 'MICRO ENTREPRENEUR FUNDING',
    description: 'Through micro-financing we can enable individual entrepreneurs to start their own business and lift themselves up and out of poverty. We offer our support to them both financially & with business supplies.',
    icon: '🏪',
  },
  {
    id: 'educational',
    title: 'EDUCATIONAL WORKSHOPS',
    description: 'We empower individuals to become productive members of the community and teach the youth how to live a Godly life. These workshops provide instruction to parents for teaching biblical principles to their children.',
    icon: '📚',
  },
  {
    id: 'short-term',
    title: 'SHORT-TERM MISSION TRIPS',
    description: 'Essential healthcare, dental and optical services are not available to people who cannot afford them. To help these communities, we organize week long mission trips with a medical staff and distribute medicine.',
    icon: '👥',
  },
  {
    id: 'local',
    title: 'LOCAL OUTREACH',
    description: 'We host weekly children\'s ministry to reach young minds who love God and know him personally. On Christmas of 2020 we also had the opportunity to deliver groceries to 31 families who couldn\'t afford to celebrate Christmas.',
    icon: '🤝',
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
            Outreach activities in the Philippines
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">Programs and initiatives we operate to support education, health, and local livelihoods.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card-soft text-center">
              <div className="mb-6 flex justify-center">
                <div className="text-5xl">{service.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              {service.id === 'church' && (
                <button className="btn-outline">
                  Learn more
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
