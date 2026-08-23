import Image from 'next/image';
import Link from 'next/link';
import { schoolGallerySections, schoolStats } from '@/data/school';

export default function SchoolPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(22,163,74,0.25),_transparent_28%),linear-gradient(135deg,_rgba(15,23,42,0.94),_rgba(15,23,42,0.8))]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 backdrop-blur">
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white/15">
                <Image src="/HCLC/2025-2026/logo.jpg" alt="HCLC logo" fill className="object-cover" />
              </span>
              Harvest Community Learning Center
            </div>
            <h1 className="page-hero-title mb-5 max-w-2xl">A school page that feels like a community, not just a brochure.</h1>
            <p className="page-hero-subtitle mb-8 max-w-2xl text-white/85">
              We serve children through a caring, faith-centered learning environment where every student is known, supported, and encouraged to grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white">Free Education</span>
              <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white">Student First</span>
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white backdrop-blur">Faith Driven</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:justify-self-end">
            {schoolStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">About the School</p>
              <h2 className="mb-6 text-3xl font-bold text-slate-800 md:text-4xl">A simple, dignified school presentation for a nonprofit website.</h2>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
                This school exists to provide a safe, structured, and nurturing place for children to learn. The photos below document student life, classroom moments, and the real faces behind the mission.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Learning style</p>
                <p className="mt-3 text-xl font-bold text-slate-800">Small, personal, and values-based</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Support</p>
                <p className="mt-3 text-xl font-bold text-slate-800">Free education and community care</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Focus</p>
                <p className="mt-3 text-xl font-bold text-slate-800">Academic growth and character formation</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Community</p>
                <p className="mt-3 text-xl font-bold text-slate-800">Built for families, not just classrooms</p>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border-l-4 border-emerald-600 bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 shadow-sm">
              <div className="mb-3 text-4xl">💚</div>
              <h3 className="mb-2 text-xl font-bold text-slate-800">100% Free</h3>
              <p className="text-slate-700">No tuition, no hidden fees. Education is a right, not a privilege.</p>
            </div>

            <div className="rounded-2xl border-l-4 border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-sm">
              <div className="mb-3 text-4xl">📚</div>
              <h3 className="mb-2 text-xl font-bold text-slate-800">Quality Education</h3>
              <p className="text-slate-700">Professional curriculum and experienced educators dedicated to excellence.</p>
            </div>

            <div className="rounded-2xl border-l-4 border-slate-700 bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-sm">
              <div className="mb-3 text-4xl">🌍</div>
              <h3 className="mb-2 text-xl font-bold text-slate-800">Inclusive Community</h3>
              <p className="text-slate-700">A welcoming environment where every child feels valued and supported.</p>
            </div>

            <div className="rounded-2xl border-l-4 border-amber-600 bg-gradient-to-br from-amber-50 to-orange-100 p-8 shadow-sm">
              <div className="mb-3 text-4xl">✨</div>
              <h3 className="mb-2 text-xl font-bold text-slate-800">Holistic Growth</h3>
              <p className="text-slate-700">Academic, social, emotional, and spiritual development for every student.</p>
            </div>
          </div>

          {/* Programs Section */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-800">Our Programs</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>Core Subjects:</strong> Math, English, Science, and values formation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>Special Classes:</strong> Arts, physical education, music, and practical learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>Meals & Care:</strong> A supportive environment that helps students stay ready to learn</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>Age Groups:</strong> Nursery and kinder-level learning communities</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-800">Services & Support</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>Student Meals:</strong> Nutritious support when available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>Academic Support:</strong> Encouragement and guidance throughout the school year</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>School Supplies:</strong> Learning materials and classroom resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">✓</span>
                  <span><strong>Family Care:</strong> Support that extends beyond the classroom</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16 rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Student Gallery</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-800">A respectful look at the students and classrooms we serve.</h2>
              </div>
                <p className="max-w-xl text-slate-700">
                These photographs tell the story of the school day: the faces of our students, the classroom setting, and the sense of care that surrounds their learning. The gallery is presented as a simple and dignified record of the children we serve.
              </p>
            </div>

            <div className="space-y-10">
              {schoolGallerySections.map((section) => (
                <div key={section.title} className="space-y-5">
                  <div className="flex flex-col gap-2 border-b border-amber-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{section.title}</h3>
                      <p className="mt-2 max-w-3xl text-slate-700">{section.description}</p>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{section.items.length} photos</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {section.items.map((item) => (
                      <div key={item.src} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="relative aspect-square w-full bg-slate-100">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          />
                        </div>
                        <div className="border-t border-slate-100 p-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{section.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration CTA */}
          <div className="mb-16 rounded-3xl bg-gradient-to-r from-blue-600 to-slate-900 p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
            <p className="text-xl mb-8 text-white">
              Getting your child started at Harvest Community School is easy. Click below to register or contact our admissions team with any questions.
            </p>
            <a href="/school/register" className="btn-outline inline-block">
              Register Your Child →
            </a>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-800">Contact Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* School Admin */}
              <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-slate-800">School Administration</h3>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">Principal</p>
                    <p>Contact for general inquiries and school matters</p>
                  </div>
                  <a href="/contact" className="btn-primary inline-block">
                    Contact School
                  </a>
                </div>
              </div>

              {/* Admissions */}
              <div className="rounded-2xl border-l-4 border-green-600 bg-green-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-slate-800">Admissions Office</h3>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">Enrollment Questions</p>
                    <p>Information about registration and enrollment process</p>
                  </div>
                  <a href="/contact?subject=school-admissions" className="btn-outline inline-block text-green-700 border-green-600">
                    Get Help
                  </a>
                </div>
              </div>

              {/* General Support */}
              <div className="rounded-2xl border-l-4 border-purple-600 bg-purple-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-slate-800">Student Support</h3>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">Counseling & Help</p>
                    <p>Support for students and families throughout the year</p>
                  </div>
                  <a href="/contact?subject=student-support" className="btn-outline inline-block text-purple-700 border-purple-600">
                    Reach Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-slate-800">Every Child Deserves an Excellent Education</h2>
          <p className="mb-8 text-lg text-slate-700">Join our growing community of students thriving at Harvest Community School.</p>
          <a href="/school/register" className="btn-primary inline-block">
            Enroll Today - It's Free!
          </a>
        </div>
      </section>
    </div>
  );
}
