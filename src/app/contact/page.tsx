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
      <section className="bg-[hsl(var(--pd-dark-charcoal))] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-center mb-4">
            Contact Us
          </h1>
          <p className="text-center text-lg max-w-2xl mx-auto">
            Get your free quote today - we're ready to discuss your demolition project
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              {/* Primary Contact - Phone */}
              <div className="bg-[hsl(var(--pd-safety-orange))] text-white p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider">Call Us Now</h3>
                    <p className="text-sm">Available Monday - Saturday, 7am - 6pm</p>
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
              <div className="bg-white border border-[hsl(var(--pd-border-gray))] p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-8 h-8 text-[hsl(var(--pd-safety-orange))]" />
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wider">Email Us</h3>
                    <p className="text-sm text-[hsl(var(--pd-medium-gray))]">We respond within 24 hours</p>
                  </div>
                </div>
                <a
                  href="mailto:premiumdemolitioncontact@gmail.com"
                  className="text-lg text-[hsl(var(--pd-dark-charcoal))] hover:text-[hsl(var(--pd-safety-orange))] transition-colors break-all"
                >
                  premiumdemolitioncontact@gmail.com
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-white border border-[hsl(var(--pd-border-gray))] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-[hsl(var(--pd-safety-orange))]" />
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wider">Service Areas</h3>
                    <p className="text-sm text-[hsl(var(--pd-medium-gray))]">Proudly serving across Ontario</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--pd-safety-orange))]" />
                      <span className="text-sm text-[hsl(var(--pd-medium-gray))]">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Request Form */}
            <div>
              <div className="bg-white border border-[hsl(var(--pd-border-gray))] p-8">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Request a Quote</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your quote request has been received. We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 border border-[hsl(var(--pd-border-gray))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] transition-all"
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
                        className="w-full px-4 py-3 border border-[hsl(var(--pd-border-gray))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] transition-all"
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
                        className="w-full px-4 py-3 border border-[hsl(var(--pd-border-gray))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] transition-all"
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
                        className="w-full px-4 py-3 border border-[hsl(var(--pd-border-gray))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] transition-all bg-white"
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
                        className="w-full px-4 py-3 border border-[hsl(var(--pd-border-gray))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] transition-all"
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
                        className="w-full px-4 py-3 border border-[hsl(var(--pd-border-gray))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] transition-all bg-white"
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
                        rows={4}
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[hsl(var(--pd-border-gray))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--pd-safety-orange))] transition-all resize-none"
                        placeholder="Tell us about your project, any special requirements, or questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[hsl(var(--pd-safety-orange))] text-white px-8 py-4 text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>

                    <p className="text-xs text-[hsl(var(--pd-medium-gray))] text-center">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">We Review Your Request</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-sm">
                Our team evaluates your project details and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">We Contact You</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-sm">
                We'll reach out within 24 hours to discuss your project
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">You Get Your Quote</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-sm">
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
