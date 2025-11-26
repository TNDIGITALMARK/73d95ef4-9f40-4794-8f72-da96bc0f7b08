"use client";

import React from 'react';
import Link from 'next/link';
import { Flame, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
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
    <footer className="relative bg-gradient-to-br from-[hsl(var(--pd-dark-charcoal))] to-[hsl(var(--pd-charcoal-light))] text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[hsl(var(--pd-safety-orange))] to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[hsl(var(--pd-safety-orange))]/20 rounded-lg transform rotate-6" />
                <Flame className="relative w-10 h-10 text-[hsl(var(--pd-safety-orange))]" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Premium <span className="text-[hsl(var(--pd-safety-orange))]">Demolition</span>
              </span>
            </div>
            <p className="text-base text-white mb-6 leading-relaxed max-w-md opacity-90">
              Ontario's premier choice for professional demolition services. We deliver safe, efficient, and reliable solutions for all your demolition needs.
            </p>
            <div className="flex items-start gap-3 text-sm text-white">
              <MapPin className="w-5 h-5 text-[hsl(var(--pd-safety-orange))] flex-shrink-0 mt-0.5" />
              <span>Serving communities across Ontario</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-white hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-200 hover:translate-x-1 inline-block">
                Home
              </Link>
              <Link href="/services" className="text-sm text-white hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-200 hover:translate-x-1 inline-block">
                Services
              </Link>
              <Link href="/contact" className="text-sm text-white hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-200 hover:translate-x-1 inline-block">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:4379919026"
                className="group flex items-center gap-3 text-sm text-white hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--pd-safety-orange))]/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(437) 991-9026</span>
              </a>
              <a
                href="mailto:premiumdemolitioncontact@gmail.com"
                className="group flex items-start gap-3 text-sm text-white hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--pd-safety-orange))]/10 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all">premiumdemolitioncontact@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-8 border-t border-white/10">
          <h4 className="text-sm font-semibold mb-6 text-center text-white uppercase tracking-wider opacity-75">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white/5 rounded-lg text-sm text-white hover:bg-white/10 hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-200 cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white opacity-75">
            © {new Date().getFullYear()} Premium Demolition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
