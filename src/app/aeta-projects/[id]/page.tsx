'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { use } from 'react';

const isVideo = (src: string) => src.toLowerCase().endsWith('.mp4');

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = use(params);
  const project = projects.find(p => p.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const currentImage = project.gallery[selectedImageIndex];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="hero-section relative bg-cover bg-center text-white py-32 md:py-40" style={{backgroundImage: `url('https://res.cloudinary.com/pine-cove/image/upload/t_twitterimagelarge/blog/imported/content/Bible-Open-Leather')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-hero-title">{project.title}</h1>
          <p className="page-hero-subtitle mt-4 flex items-center justify-center gap-3">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-lg">{project.category}</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Gallery Section */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="bg-slate-200 rounded-lg overflow-hidden mb-6">
                <div className="relative w-full h-96 md:h-[500px]">
                  {isVideo(currentImage) ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={currentImage} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={currentImage}
                      alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {project.gallery.length > 1 && (
                <div className="mb-8">
                  <p className="text-slate-700 text-sm font-semibold mb-3">Gallery ({selectedImageIndex + 1} of {project.gallery.length})</p>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {project.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition-all hover:border-blue-500 ${
                          selectedImageIndex === index ? 'border-blue-600 ring-2 ring-blue-400' : 'border-slate-300'
                        }`}
                      >
                        {isVideo(image) ? (
                          <video className="h-full w-full object-cover" muted loop playsInline>
                            <source src={image} type="video/mp4" />
                          </video>
                        ) : (
                          <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {project.gallery.length > 1 && (
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedImageIndex(prev => prev === 0 ? project.gallery.length - 1 : prev - 1)}
                    className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 rounded-lg transition"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex(prev => prev === project.gallery.length - 1 ? 0 : prev + 1)}
                    className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 rounded-lg transition"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-6">
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">Category</h3>
                  <p className="text-lg font-bold text-slate-800">{project.category}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">Date</h3>
                  <p className="text-lg font-bold text-slate-800">
                    {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">Summary</h3>
                  <p className="text-slate-700">{project.summary}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3">Get Involved</h3>
                <p className="text-white mb-4">Want to support this project or learn more?</p>
                <Link 
                  href="/contact"
                  className="btn-outline inline-block w-full text-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Back Link */}
              <Link 
                href="/aeta-projects"
                className="btn-outline inline-block w-full text-center"
              >
                ← Back to Projects
              </Link>
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-12 pt-12 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Project Details</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            
            {/* Impact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Making a Difference</h3>
              <p className="text-slate-700 leading-relaxed">
                This project is part of our ongoing commitment to empower the Aeta indigenous communities. Through education, skills training, and community support, we're creating sustainable pathways to prosperity and dignity. Every contribution helps us reach more families and communities in need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
