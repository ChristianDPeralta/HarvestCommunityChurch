export default function SchoolPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 md:py-48" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/pine-cove/image/upload/t_twitterimagelarge/blog/imported/content/Bible-Open-Leather')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Harvest Community School</h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-6">Quality Education. Zero Cost. Unlimited Opportunity.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg">FREE EDUCATION</span>
            <span className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-lg">ALL WELCOME</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Welcome to Our Community School</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              We believe every child deserves access to quality education regardless of their financial circumstances. Our school is committed to providing a nurturing, professional learning environment where children from all backgrounds can thrive academically, socially, and spiritually.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-600">
              <div className="text-4xl mb-3">💚</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">100% Free</h3>
              <p className="text-slate-700">No tuition, no hidden fees. Education is a right, not a privilege.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Quality Education</h3>
              <p className="text-slate-700">Professional curriculum and experienced educators dedicated to excellence.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-l-4 border-purple-600">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Inclusive Community</h3>
              <p className="text-slate-700">A welcoming environment where every child feels valued and supported.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border-l-4 border-orange-600">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Holistic Growth</h3>
              <p className="text-slate-700">Academic, social, emotional, and spiritual development for every student.</p>
            </div>
          </div>

          {/* Programs Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Elementary School</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Core Subjects:</strong> Math, English, Science, Social Studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Special Classes:</strong> Arts, Physical Education, Music</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Values Education:</strong> Character and spiritual development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Age Groups:</strong> Grades 1-6</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Services & Support</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Student Meals:</strong> Nutritious breakfast and lunch provided</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Academic Support:</strong> Tutoring and extra help available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>School Supplies:</strong> Books and materials provided</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>Counseling:</strong> Student and family support services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-lg mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Getting your child started at Harvest Community School is easy. Click below to register or contact our admissions team with any questions.
            </p>
            <a 
              href="/school/register"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Register Your Child →
            </a>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* School Admin */}
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-slate-800 mb-4">School Administration</h3>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">Principal</p>
                    <p>Contact for general inquiries and school matters</p>
                  </div>
                  <a href="/contact" className="inline-block bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition">
                    Contact School
                  </a>
                </div>
              </div>

              {/* Admissions */}
              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Admissions Office</h3>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">Enrollment Questions</p>
                    <p>Information about registration and enrollment process</p>
                  </div>
                  <a href="/contact?subject=school-admissions" className="inline-block bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700 transition">
                    Get Help
                  </a>
                </div>
              </div>

              {/* General Support */}
              <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Student Support</h3>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">Counseling & Help</p>
                    <p>Support for students and families throughout the year</p>
                  </div>
                  <a href="/contact?subject=student-support" className="inline-block bg-purple-600 text-white font-bold px-4 py-2 rounded hover:bg-purple-700 transition">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Every Child Deserves an Excellent Education</h2>
          <p className="text-lg text-slate-700 mb-8">Join our growing community of students thriving at Harvest Community School.</p>
          <a 
            href="/school/register"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-lg"
          >
            Enroll Today - It's Free!
          </a>
        </div>
      </section>
    </div>
  );
}
