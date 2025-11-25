"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Flame } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[hsl(var(--pd-dark-charcoal))] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Flame className="w-8 h-8 text-[hsl(var(--pd-safety-orange))]" />
            <span className="text-white font-bold text-lg uppercase tracking-wider">
              Premium Demolition
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white text-sm uppercase tracking-wider hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white text-sm uppercase tracking-wider hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white text-sm uppercase tracking-wider hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
            >
              Contact
            </Link>
            <a
              href="tel:4379919026"
              className="bg-[hsl(var(--pd-safety-orange))] text-white px-6 py-2 text-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
            >
              (437) 991-9026
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-white text-sm uppercase tracking-wider hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white text-sm uppercase tracking-wider hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white text-sm uppercase tracking-wider hover:text-[hsl(var(--pd-safety-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:4379919026"
              className="bg-[hsl(var(--pd-safety-orange))] text-white px-6 py-3 text-sm uppercase tracking-wider font-semibold text-center hover:opacity-90 transition-opacity"
            >
              (437) 991-9026
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
