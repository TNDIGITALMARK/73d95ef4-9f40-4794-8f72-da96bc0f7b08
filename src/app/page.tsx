"use client";

import React from 'react';
import Link from 'next/link';
import { Home, Building2, Truck, HardHat, ArrowRight } from 'lucide-react';
import { Header } from '@/components/demolition/Header';
import { Footer } from '@/components/demolition/Footer';
import { ServiceCard } from '@/components/demolition/ServiceCard';

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Residential Demolition",
      description: "Complete house teardowns, garage removal, interior gutting"
    },
    {
      icon: Building2,
      title: "Commercial Demolition",
      description: "Large-scale building removal, warehouse demolition, retail spaces"
    },
    {
      icon: Truck,
      title: "Site Clearing",
      description: "Land preparation, debris removal, lot clearing"
    },
    {
      icon: HardHat,
      title: "Excavation",
      description: "Foundation preparation, basement excavation, utility trenching"
    }
  ];

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

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/generated/hero-demolition.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider mb-4">
            Ontario's Premier Choice For
            <br />
            Professional Demolition Services
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Safe, Efficient Demolition Across Ontario
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[hsl(var(--pd-safety-orange))] text-white px-8 py-4 text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
          >
            Get Free Quote
          </Link>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-[hsl(var(--pd-dark-charcoal))]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-12 text-white">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href="/services"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Professionalism Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm uppercase tracking-wider text-[hsl(var(--pd-medium-gray))]">
            Safety. Professionalism. Reliability.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-6">Why Choose Us?</h2>
              <div className="space-y-4 text-[hsl(var(--pd-medium-gray))]">
                <p className="leading-relaxed">
                  At Premium Demolition, we combine years of experience with modern equipment and safety protocols to deliver exceptional demolition services across Ontario.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] flex-shrink-0 mt-1" />
                    <span>Certified operators and comprehensive insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] flex-shrink-0 mt-1" />
                    <span>Environmental compliance and dust control measures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] flex-shrink-0 mt-1" />
                    <span>Neighbor notification and communication procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] flex-shrink-0 mt-1" />
                    <span>Reliable equipment and experienced crews</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-block bg-[hsl(var(--pd-safety-orange))] text-white px-8 py-3 text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="/generated/safety-professional.jpg"
                alt="Professional demolition crew member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-8">Serving Ontario</h2>
          <p className="text-center text-[hsl(var(--pd-medium-gray))] mb-8 max-w-3xl mx-auto">
            Premium Demolition proudly serves communities across Ontario, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-white border border-[hsl(var(--pd-border-gray))] p-4 text-center"
              >
                <span className="text-sm uppercase tracking-wider font-semibold text-[hsl(var(--pd-dark-charcoal))]">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--pd-dark-charcoal))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and project consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:4379919026"
              className="bg-[hsl(var(--pd-safety-orange))] text-white px-8 py-4 text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
            >
              Call (437) 991-9026
            </a>
            <Link
              href="/contact"
              className="bg-white text-[hsl(var(--pd-dark-charcoal))] px-8 py-4 text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
