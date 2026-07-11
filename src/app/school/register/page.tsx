'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SchoolRegisterPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    childGrade: '',
    address: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'School Registration',
          type: 'school-registration'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          parentName: '',
          parentEmail: '',
          parentPhone: '',
          childName: '',
          childAge: '',
          childGrade: '',
          address: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 md:py-40" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/pine-cove/image/upload/t_twitterimagelarge/blog/imported/content/Bible-Open-Leather')`}}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Register Your Child</h1>
          <p className="text-xl md:text-2xl text-slate-100 mt-4">Start their journey to success at Harvest Community School</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">How Registration Works</h2>
            <ol className="space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">1.</span>
                <span>Fill out the registration form below with your child's information</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">2.</span>
                <span>Our admissions team will review your application</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">3.</span>
                <span>We'll contact you to schedule a school visit or discuss enrollment</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">4.</span>
                <span>Your child starts their free educational journey with us!</span>
              </li>
            </ol>
          </div>

          {/* Registration Form */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Student Registration Form</h2>

            {submitted && (
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-green-800 mb-2">Registration Submitted!</h3>
                <p className="text-green-700">Thank you for registering your child. Our admissions team will contact you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Information */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 pb-3 border-b-2 border-blue-600">Parent/Guardian Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Parent/Guardian Name *</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Street address"
                    />
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 pb-3 border-b-2 border-green-600">Student Information</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Student Name *</label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Child's full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Age *</label>
                    <input
                      type="number"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      min="5"
                      max="18"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Age"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Grade Level *</label>
                    <select
                      name="childGrade"
                      value={formData.childGrade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="">Select a grade</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Information / Questions</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Tell us anything else we should know about your child or your questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-lg"
              >
                Submit Registration
              </button>

              <p className="text-sm text-slate-600 text-center">
                * Required fields
              </p>
            </form>
          </div>

          {/* Need Help Section */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg mb-12 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Need Help with Registration?</h3>
            <p className="text-slate-700 mb-6">
              Have questions about enrollment or need assistance? Our admissions team is here to help!
            </p>
            <a 
              href="/contact?subject=school-enrollment"
              className="inline-block bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Contact Admissions Team
            </a>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 justify-center">
            <Link 
              href="/school"
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-2 rounded-lg transition"
            >
              ← Back to School
            </Link>
            <Link 
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
