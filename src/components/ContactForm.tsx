'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-700 mb-12">
          Get in touch with our team:
        </h2>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Thank you for your message! We will get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-slate-100 border border-slate-400 text-slate-700 rounded">
            There was an error submitting your form. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            placeholder="FULL NAME"
            value={formData.fullName}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full px-6 py-3 border border-slate-300 bg-gray-50 focus:outline-none focus:border-slate-500 disabled:opacity-50"
          />

          <input
            type="email"
            name="email"
            placeholder="E-MAIL ADDRESS"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full px-6 py-3 border border-amber-300 bg-yellow-50 focus:outline-none focus:border-amber-700 disabled:opacity-50"
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="PHONE NUMBER"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-6 py-3 border border-slate-300 bg-gray-50 focus:outline-none focus:border-slate-500 disabled:opacity-50"
          />

          <textarea
            name="message"
            placeholder="MESSAGE"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            disabled={isLoading}
            className="w-full px-6 py-3 border border-slate-300 bg-gray-50 focus:outline-none focus:border-slate-500 resize-none disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-slate-500 text-white px-8 py-3 font-bold hover:bg-slate-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'SENDING...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </section>
  );
}
