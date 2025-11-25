"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Building2, Truck, HardHat, CheckCircle, Clock, Shield } from 'lucide-react';
import { Header } from '@/components/demolition/Header';
import { Footer } from '@/components/demolition/Footer';

type ServiceTab = 'residential' | 'commercial' | 'clearing' | 'excavation';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>('residential');

  const serviceDetails = {
    residential: {
      title: "Residential Demolition",
      icon: Home,
      description: "Complete residential demolition services for homeowners and contractors",
      process: [
        "Initial site assessment and inspection",
        "Permit assistance and application support",
        "Utility disconnection coordination",
        "Safe structural demolition",
        "Debris removal and disposal",
        "Complete site cleanup and preparation"
      ],
      timeline: "2 to 5 days depending on structure size",
      includes: [
        "House teardowns and full demolitions",
        "Garage and shed removal",
        "Interior gutting and selective demolition",
        "Deck and fence removal",
        "Driveway and concrete demolition",
        "Foundation removal"
      ]
    },
    commercial: {
      title: "Commercial Demolition",
      icon: Building2,
      description: "Large-scale commercial and industrial demolition projects",
      process: [
        "Comprehensive site evaluation",
        "Safety planning and risk assessment",
        "Asbestos and hazmat testing if required",
        "Phased demolition execution",
        "Material sorting and recycling",
        "Final site grading and cleanup"
      ],
      timeline: "1 to 4 weeks depending on project scope",
      includes: [
        "Office building demolition",
        "Warehouse and industrial facilities",
        "Retail space teardown",
        "Multi-unit residential buildings",
        "Strip mall demolition",
        "Factory and manufacturing facilities"
      ]
    },
    clearing: {
      title: "Site Clearing",
      icon: Truck,
      description: "Complete land preparation and site clearing services",
      process: [
        "Site survey and assessment",
        "Vegetation and tree removal",
        "Debris collection and removal",
        "Grading and leveling",
        "Soil testing if required",
        "Final site preparation"
      ],
      timeline: "3 to 10 days depending on lot size",
      includes: [
        "Land clearing for new construction",
        "Lot preparation and leveling",
        "Vegetation and brush removal",
        "Stump grinding and removal",
        "Debris hauling and disposal",
        "Property line clearing"
      ]
    },
    excavation: {
      title: "Excavation Services",
      icon: HardHat,
      description: "Professional excavation for residential and commercial projects",
      process: [
        "Site marking and utility location",
        "Excavation planning and layout",
        "Precision digging and excavation",
        "Soil removal and hauling",
        "Grading and compaction",
        "Final inspection and approval"
      ],
      timeline: "2 to 7 days depending on scope",
      includes: [
        "Foundation excavation and preparation",
        "Basement digging and excavation",
        "Utility trenching and installation",
        "Pool excavation",
        "Drainage system installation",
        "Septic system excavation"
      ]
    }
  };

  const currentService = serviceDetails[activeTab];
  const Icon = currentService.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-[hsl(var(--pd-dark-charcoal))] section-spacing text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-center mb-6">
            Our Services
          </h1>
          <p className="text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Professional demolition, clearing, and excavation services tailored to your project needs
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="bg-white border-b border-[hsl(var(--pd-border-gray))]">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 py-6">
            {(Object.keys(serviceDetails) as ServiceTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm uppercase tracking-wider font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[hsl(var(--pd-safety-orange))] text-white shadow-md'
                    : 'bg-[hsl(var(--background))] text-[hsl(var(--pd-dark-charcoal))] hover:bg-[hsl(var(--pd-border-gray))] border border-[hsl(var(--pd-border-gray))]'
                }`}
              >
                {serviceDetails[tab].title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Content */}
      <section className="section-spacing bg-[hsl(var(--background))]">
        <div className="container mx-auto">
          {/* Service Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-shrink-0 w-16 h-16 bg-[hsl(var(--pd-safety-orange))]/10 rounded-xl flex items-center justify-center">
              <Icon className="w-10 h-10 text-[hsl(var(--pd-safety-orange))]" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentService.title}</h2>
              <p className="text-[hsl(var(--pd-medium-gray))] text-lg leading-relaxed">{currentService.description}</p>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Process */}
            <div className="bg-white border-2 border-[hsl(var(--pd-border-gray))] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-[hsl(var(--pd-safety-orange))]" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider">Our Process</h3>
              </div>
              <ol className="space-y-4">
                {currentService.process.map((step, index) => (
                  <li key={index} className="flex gap-4 text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                    <span className="font-bold text-lg text-[hsl(var(--pd-safety-orange))] flex-shrink-0 w-6">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* What's Included */}
            <div className="bg-white border-2 border-[hsl(var(--pd-border-gray))] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-7 h-7 text-[hsl(var(--pd-safety-orange))]" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider">What's Included</h3>
              </div>
              <ul className="space-y-4">
                {currentService.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border-2 border-[hsl(var(--pd-border-gray))] rounded-xl p-8 mb-16 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(var(--pd-safety-orange))]/10 rounded-lg flex items-center justify-center">
                <Clock className="w-7 h-7 text-[hsl(var(--pd-safety-orange))]" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider">Typical Timeline</h3>
            </div>
            <p className="text-[hsl(var(--pd-medium-gray))] text-lg leading-relaxed ml-16">{currentService.timeline}</p>
          </div>

          {/* CTA */}
          <div className="text-center bg-[hsl(var(--pd-light-gray-bg))] rounded-2xl py-12 px-8">
            <p className="text-[hsl(var(--pd-medium-gray))] mb-8 text-xl font-medium">
              Ready to discuss your {currentService.title.toLowerCase()} project?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[hsl(var(--pd-safety-orange))] text-white px-10 py-5 text-base uppercase tracking-wider font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Safety Protocols</h2>
            <p className="text-lg text-[hsl(var(--pd-medium-gray))] max-w-2xl mx-auto">
              Your safety and peace of mind are our top priorities on every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Shield className="w-11 h-11" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Certified Operators</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                All crew members are fully certified and trained in safe demolition practices
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                <CheckCircle className="w-11 h-11" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Comprehensive Insurance</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                Full liability and workers compensation coverage on every project
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Home className="w-11 h-11" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Environmental Compliance</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-base leading-relaxed">
                Dust control, proper disposal, and full regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
