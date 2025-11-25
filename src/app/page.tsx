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
      <section className="relative min-h-[700px] flex items-center justify-center text-white bg-cover bg-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/generated/hero-demolition.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--pd-dark-charcoal))]/95 via-[hsl(var(--pd-dark-charcoal))]/85 to-[hsl(var(--pd-dark-charcoal))]/75" />

        {/* Accent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--pd-safety-orange))]/10 via-transparent to-transparent" />

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 text-center z-10 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <span className="w-2 h-2 bg-[hsl(var(--pd-safety-orange))] rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Ontario's Most Trusted Demolition Experts</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Demolition
              <br />
              <span className="text-[hsl(var(--pd-safety-orange))]">Done Right</span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 font-light leading-relaxed">
              Safe, efficient, and reliable demolition services across Ontario. Licensed operators, comprehensive insurance, and exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[hsl(var(--pd-safety-orange))] hover:bg-[hsl(var(--pd-orange-hover))] text-white px-10 py-5 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:4379919026"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 text-base font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                <span>(437) 991-9026</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--pd-safety-orange))] to-transparent" />
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-[hsl(var(--pd-medium-gray))] max-w-2xl mx-auto">
              Comprehensive demolition solutions tailored to your project needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[hsl(var(--pd-light-gray-bg))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/generated/safety-professional.jpg"
                  alt="Professional demolition crew member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--pd-dark-charcoal))]/60 to-transparent" />

                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[hsl(var(--pd-safety-orange))]">15+</div>
                      <div className="text-xs font-medium text-[hsl(var(--pd-text-dark))] mt-1">Years</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[hsl(var(--pd-safety-orange))]">500+</div>
                      <div className="text-xs font-medium text-[hsl(var(--pd-text-dark))] mt-1">Projects</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[hsl(var(--pd-safety-orange))]">100%</div>
                      <div className="text-xs font-medium text-[hsl(var(--pd-text-dark))] mt-1">Licensed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[hsl(var(--pd-safety-orange))]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-[hsl(var(--pd-safety-orange))] uppercase tracking-wide">Why Choose Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Safety & Excellence in Every Project
              </h2>

              <p className="text-lg text-[hsl(var(--pd-medium-gray))] leading-relaxed mb-8">
                At Premium Demolition, we combine years of experience with modern equipment and safety protocols to deliver exceptional demolition services across Ontario.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--pd-safety-orange))] transition-colors">
                    <ArrowRight className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--pd-text-dark))] mb-1">Certified & Insured</h3>
                    <p className="text-[hsl(var(--pd-medium-gray))]">Licensed operators with comprehensive insurance coverage</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--pd-safety-orange))] transition-colors">
                    <ArrowRight className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--pd-text-dark))] mb-1">Environmental Compliance</h3>
                    <p className="text-[hsl(var(--pd-medium-gray))]">Dust control measures and proper waste management</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--pd-safety-orange))] transition-colors">
                    <ArrowRight className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--pd-text-dark))] mb-1">Modern Equipment</h3>
                    <p className="text-[hsl(var(--pd-medium-gray))]">State-of-the-art machinery and experienced crews</p>
                  </div>
                </li>
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[hsl(var(--pd-safety-orange))] hover:bg-[hsl(var(--pd-orange-hover))] text-white px-8 py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Serving Ontario</h2>
            <p className="text-lg text-[hsl(var(--pd-medium-gray))] max-w-2xl mx-auto">
              Premium Demolition proudly serves communities across Ontario
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="group bg-gradient-to-br from-white to-[hsl(var(--pd-light-gray-bg))] border-2 border-[hsl(var(--pd-border-gray))] hover:border-[hsl(var(--pd-safety-orange))] p-6 text-center rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <span className="text-base font-semibold text-[hsl(var(--pd-text-dark))] group-hover:text-[hsl(var(--pd-safety-orange))] transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[hsl(var(--pd-dark-charcoal))] to-[hsl(var(--pd-charcoal-light))] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }} />
        </div>

        {/* Accent Gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--pd-safety-orange))] to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <span className="text-sm font-medium tracking-wide">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free quote and project consultation. Our team is ready to help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:4379919026"
                className="group inline-flex items-center gap-2 bg-[hsl(var(--pd-safety-orange))] hover:bg-[hsl(var(--pd-orange-hover))] text-white px-10 py-5 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Call (437) 991-9026
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 text-base font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
