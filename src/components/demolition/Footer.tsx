"use client";

import React from 'react';
import Link from 'next/link';
import { Flame, Phone, Mail } from 'lucide-react';

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
    <footer className="bg-[hsl(var(--pd-dark-charcoal))] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-[hsl(var(--pd-safety-orange))]" />
              <span className="font-bold text-lg uppercase tracking-wider">
                Premium Demolition
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Ontario's premier choice for professional demolition services. Safe, efficient, and reliable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-300 hover:text-[hsl(var(--pd-safety-orange))] transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm text-gray-300 hover:text-[hsl(var(--pd-safety-orange))] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-[hsl(var(--pd-safety-orange))] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:4379919026" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[hsl(var(--pd-safety-orange))] transition-colors">
                <Phone className="w-4 h-4" />
                (437) 991-9026
              </a>
              <a href="mailto:premiumdemolitioncontact@gmail.com" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[hsl(var(--pd-safety-orange))] transition-colors break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                premiumdemolitioncontact@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-center">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {serviceAreas.map((area) => (
              <span key={area} className="text-sm text-gray-300">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Premium Demolition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
