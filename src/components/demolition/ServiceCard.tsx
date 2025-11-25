"use client";

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const content = (
    <div className="bg-white border border-[hsl(var(--pd-border-gray))] p-8 text-center hover:shadow-md transition-all group cursor-pointer h-full flex flex-col">
      <div className="flex justify-center mb-6">
        <Icon className="w-16 h-16 text-[hsl(var(--pd-dark-charcoal))] group-hover:text-[hsl(var(--pd-safety-orange))] transition-colors" strokeWidth={1.5} />
      </div>
      <h3 className="text-sm uppercase tracking-wider font-bold mb-3 text-[hsl(var(--pd-dark-charcoal))]">
        {title}
      </h3>
      <p className="text-sm text-[hsl(var(--pd-medium-gray))] leading-relaxed flex-grow">
        {description}
      </p>
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
