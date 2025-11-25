"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Header } from '@/components/demolition/Header';
import { Footer } from '@/components/demolition/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    timeline: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        location: '',
        timeline: '',
        details: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const serviceAreas = [
    "Hamilton",
    "Mississauga",
    "Toronto",
    "Markham",
    "Barrie",
    "Oakville",
    "North Bay",
    "London",
    "Muskoka"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-[hsl(var(--pd-dark-charcoal))] section-spacing text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-center mb-6">
            Contact Us
          </h1>
          <p className="text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get your free quote today - we're ready to discuss your demolition project
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-spacing bg-[hsl(var(--background))]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10">Get In Touch</h2>

              {/* Primary Contact - Phone */}
              <div className="bg-[hsl(var(--pd-safety-orange))] text-white p-10 mb-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-1">Call Us Now</h3>
                    <p className="text-sm opacity-90">Available Monday - Saturday, 7am - 6pm</p>
                  </div>
                </div>
                <a
                  href="tel:4379919026"
                  className="text-4xl font-bold block hover:opacity-90 transition-opacity"
                >
                  (437) 991-9026
                </a>
              </div>

              {/* Email Contact */}
              <div className="bg-white border-2 border-[hsl(var(--pd-border-gray))] rounded-xl p-8 mb-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-7 h-7 text-[hsl(var(--pd-safety-orange))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-1">Email Us</h3>
                    <p className="text-sm text-[hsl(var(--pd-medium-gray))]">We respond within 24 hours</p>
                  </div>
                </div>
                <a
                  href="mailto:premiumdemolitioncontact@gmail.com"
                  className="text-base text-[hsl(var(--pd-dark-charcoal))] hover:text-[hsl(var(--pd-safety-orange))] transition-colors break-all leading-relaxed"
                >
                  premiumdemolitioncontact@gmail.com
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-white border-2 border-[hsl(var(--pd-border-gray))] rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-[hsl(var(--pd-safety-orange))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-1">Service Areas</h3>
                    <p className="text-sm text-[hsl(var(--pd-medium-gray))]">Proudly serving across Ontario</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--pd-safety-orange))]" />
                      <span className="text-sm text-[hsl(var(--pd-medium-gray))] font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Request Form */}
            <div>
              <div className="bg-white border-2 border-[hsl(var(--pd-border-gray))] rounded-xl p-10 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wider">Request a Quote</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-10 text-center">
                    <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-green-800 mb-3">Thank You!</h3>
                    <p className="text-green-700 text-lg leading-relaxed">
                      Your quote request has been received. We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[hsl(var(--pd-border-gray))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] focus:border-[hsl(var(--pd-safety-orange))] transition-all text-base"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[hsl(var(--pd-border-gray))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] focus:border-[hsl(var(--pd-safety-orange))] transition-all text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold uppercase tracking-wider mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[hsl(var(--pd-border-gray))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] focus:border-[hsl(var(--pd-safety-orange))] transition-all text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold uppercase tracking-wider mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[hsl(var(--pd-border-gray))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] focus:border-[hsl(var(--pd-safety-orange))] transition-all bg-white text-base"
                      >
                        <option value="">Select project type</option>
                        <option value="residential-full">Full House Demolition</option>
                        <option value="residential-partial">Partial Demolition</option>
                        <option value="garage">Garage Removal</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="clearing">Site Clearing</option>
                        <option value="excavation">Excavation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold uppercase tracking-wider mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[hsl(var(--pd-border-gray))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] focus:border-[hsl(var(--pd-safety-orange))] transition-all text-base"
                        placeholder="City and address"
                      />
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold uppercase tracking-wider mb-2">
                        Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[hsl(var(--pd-border-gray))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] focus:border-[hsl(var(--pd-safety-orange))] transition-all bg-white text-base"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1month">Within 1 Month</option>
                        <option value="1-3months">1 to 3 Months</option>
                        <option value="3-6months">3 to 6 Months</option>
                        <option value="planning">Just Planning</option>
                      </select>
                    </div>

                    {/* Details */}
                    <div>
                      <label htmlFor="details" className="block text-sm font-semibold uppercase tracking-wider mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={5}
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[hsl(var(--pd-border-gray))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] focus:border-[hsl(var(--pd-safety-orange))] transition-all resize-none text-base leading-relaxed"
                        placeholder="Tell us about your project, any special requirements, or questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[hsl(var(--pd-safety-orange))] text-white px-10 py-5 text-base uppercase tracking-wider font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>

                    <p className="text-sm text-[hsl(var(--pd-medium-gray))] text-center leading-relaxed">
                      We respect your privacy and will never share your information
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Happens Next?</h2>
            <p className="text-lg text-[hsl(var(--pd-medium-gray))] max-w-2xl mx-auto">
              Our simple three-step process ensures you get the information you need quickly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white font-bold text-3xl rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                1
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">We Review Your Request</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                Our team evaluates your project details and requirements
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white font-bold text-3xl rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                2
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">We Contact You</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                We'll reach out within 24 hours to discuss your project
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white font-bold text-3xl rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                3
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">You Get Your Quote</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                Receive a detailed, transparent quote for your project
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
