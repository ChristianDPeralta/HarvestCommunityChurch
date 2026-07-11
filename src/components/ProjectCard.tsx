'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/aeta-projects/${project.id}`}>
      <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer h-full">
        {/* Image */}
        <div className="relative w-full h-48 bg-slate-200 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            {project.category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition">{project.title}</h3>

          {/* Summary */}
          <p className="text-slate-600 text-sm mb-4">{project.summary}</p>

          {/* Date */}
          <p className="text-slate-500 text-xs mb-4">
            {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {/* CTA */}
          <span className="inline-block bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded group-hover:bg-blue-700 transition">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
