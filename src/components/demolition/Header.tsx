"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Flame, Phone } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[hsl(var(--pd-dark-charcoal))] transition-all duration-300 ${
        scrolled ? 'shadow-xl backdrop-blur-lg bg-[hsl(var(--pd-dark-charcoal))]/95' : 'shadow-md'
      }`}
    >
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[hsl(var(--pd-safety-orange))] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[70px]' : 'h-[80px]'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[hsl(var(--pd-safety-orange))]/20 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <Flame className="relative w-8 h-8 text-[hsl(var(--pd-safety-orange))] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Premium <span className="text-[hsl(var(--pd-safety-orange))]">Demolition</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--pd-safety-orange))] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--pd-safety-orange))] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--pd-safety-orange))] group-hover:w-full transition-all duration-300" />
            </Link>
            <a
              href="tel:4379919026"
              className="group inline-flex items-center gap-2 bg-[hsl(var(--pd-safety-orange))] hover:bg-[hsl(var(--pd-orange-hover))] text-white px-6 py-3 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              (437) 991-9026
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 pt-2 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <Link
              href="/"
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide hover:text-[hsl(var(--pd-safety-orange))] transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide hover:text-[hsl(var(--pd-safety-orange))] transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide hover:text-[hsl(var(--pd-safety-orange))] transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:4379919026"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--pd-safety-orange))] hover:bg-[hsl(var(--pd-orange-hover))] text-white px-6 py-4 text-sm font-semibold text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              (437) 991-9026
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
