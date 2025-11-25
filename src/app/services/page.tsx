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
      <section className="bg-[hsl(var(--pd-dark-charcoal))] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-center mb-4">
            Our Services
          </h1>
          <p className="text-center text-lg max-w-2xl mx-auto">
            Professional demolition, clearing, and excavation services tailored to your project needs
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="bg-white border-b border-[hsl(var(--pd-border-gray))]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            {(Object.keys(serviceDetails) as ServiceTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm uppercase tracking-wider font-semibold transition-colors ${
                  activeTab === tab
                    ? 'bg-[hsl(var(--pd-safety-orange))] text-white'
                    : 'bg-[hsl(var(--background))] text-[hsl(var(--pd-dark-charcoal))] hover:bg-[hsl(var(--pd-border-gray))]'
                }`}
              >
                {serviceDetails[tab].title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Content */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          {/* Service Header */}
          <div className="flex items-center gap-4 mb-8">
            <Icon className="w-12 h-12 text-[hsl(var(--pd-safety-orange))]" strokeWidth={1.5} />
            <div>
              <h2 className="text-3xl font-bold">{currentService.title}</h2>
              <p className="text-[hsl(var(--pd-medium-gray))] mt-2">{currentService.description}</p>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Process */}
            <div className="bg-white border border-[hsl(var(--pd-border-gray))] p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--pd-safety-orange))]" />
                <h3 className="text-xl font-bold uppercase tracking-wider">Our Process</h3>
              </div>
              <ol className="space-y-3">
                {currentService.process.map((step, index) => (
                  <li key={index} className="flex gap-3 text-[hsl(var(--pd-medium-gray))]">
                    <span className="font-bold text-[hsl(var(--pd-safety-orange))] flex-shrink-0">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* What's Included */}
            <div className="bg-white border border-[hsl(var(--pd-border-gray))] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-[hsl(var(--pd-safety-orange))]" />
                <h3 className="text-xl font-bold uppercase tracking-wider">What's Included</h3>
              </div>
              <ul className="space-y-3">
                {currentService.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[hsl(var(--pd-medium-gray))]">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-[hsl(var(--pd-border-gray))] p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[hsl(var(--pd-safety-orange))]" />
              <h3 className="text-xl font-bold uppercase tracking-wider">Typical Timeline</h3>
            </div>
            <p className="text-[hsl(var(--pd-medium-gray))] text-lg">{currentService.timeline}</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-[hsl(var(--pd-medium-gray))] mb-6 text-lg">
              Ready to discuss your {currentService.title.toLowerCase()} project?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[hsl(var(--pd-safety-orange))] text-white px-8 py-4 text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">Safety Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Certified Operators</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-sm">
                All crew members are fully certified and trained in safe demolition practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Comprehensive Insurance</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-sm">
                Full liability and workers compensation coverage on every project
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[hsl(var(--pd-safety-orange))] text-white">
                <Home className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Environmental Compliance</h3>
              <p className="text-[hsl(var(--pd-medium-gray))] text-sm">
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
