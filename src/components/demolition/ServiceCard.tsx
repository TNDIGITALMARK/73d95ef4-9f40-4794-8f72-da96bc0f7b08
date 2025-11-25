"use client";

import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const content = (
    <div className="group relative bg-white border-2 border-[hsl(var(--pd-border-gray))] hover:border-[hsl(var(--pd-safety-orange))] p-8 text-center rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full flex flex-col overflow-hidden">
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--pd-safety-orange))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--pd-safety-orange))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Icon background circle */}
            <div className="absolute inset-0 bg-[hsl(var(--pd-safety-orange))]/10 rounded-2xl transform rotate-6 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <Icon
              className="relative w-16 h-16 text-[hsl(var(--pd-dark-charcoal))] group-hover:text-[hsl(var(--pd-safety-orange))] transition-all duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <h3 className="text-base font-bold mb-3 text-[hsl(var(--pd-text-dark))] group-hover:text-[hsl(var(--pd-safety-orange))] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-[hsl(var(--pd-medium-gray))] leading-relaxed flex-grow mb-4">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center justify-center gap-2 text-[hsl(var(--pd-safety-orange))] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
