'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function AETAProjects() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 md:py-40" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/pine-cove/image/upload/t_twitterimagelarge/blog/imported/content/Bible-Open-Leather')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">AETA Projects</h1>
          <p className="text-xl md:text-2xl text-slate-100 mt-4">Empowering Indigenous Communities Through Education & Enterprise</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our AETA Initiative</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              The AETA (Aeta Indigenous Peoples) Projects represent our commitment to serving and empowering the indigenous Aeta communities in the Philippines. Through education, vocational training, and sustainable business initiatives, we work to create meaningful opportunities and lasting positive change.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Active Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Impact & Results</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Through our dedicated AETA Projects, we have witnessed transformative change in the lives of thousands of individuals and families. By combining compassion with practical action, education with entrepreneurship, and spiritual guidance with tangible support, we are creating pathways to prosperity and dignity for the Aeta community.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Every contribution, whether through donations, volunteering, or partnerships, directly impacts lives and helps us expand our reach to serve more communities in need.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
