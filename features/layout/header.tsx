'use client';

import { useState } from 'react';
import { Logo } from '@/components/ui/logo';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <DesktopNav />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background">
          <MobileNav onClose={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
