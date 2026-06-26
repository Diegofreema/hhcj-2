'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationStructure } from '@/lib/constants/navigation';
import { ChevronDown } from 'lucide-react';

interface MobileNavProps {
  onClose: () => void;
}

interface ExpandedState {
  [key: string]: boolean;
}

export function MobileNav({ onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <nav className="flex flex-col py-4">
      {/* About Us */}
      <div>
        <button
          onClick={() => toggleExpanded('aboutUs')}
          className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth flex items-center justify-between"
        >
          {navigationStructure.aboutUs.label}
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expanded.aboutUs ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expanded.aboutUs && (
          <div className="bg-muted/50 pl-4">
            {navigationStructure.aboutUs.sublinks?.map((link) => (
              <div key={link.href}>
                {link.sublinks ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(`aboutUs-${link.href}`)}
                      className="w-full px-4 py-2 text-sm text-foreground hover:text-primary transition-smooth flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          expanded[`aboutUs-${link.href}`] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expanded[`aboutUs-${link.href}`] && (
                      <div className="bg-muted/50 pl-4">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Our Works */}
      <div>
        <button
          onClick={() => toggleExpanded('ourWorks')}
          className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth flex items-center justify-between"
        >
          {navigationStructure.ourWorks.label}
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expanded.ourWorks ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expanded.ourWorks && (
          <div className="bg-muted/50 pl-4">
            {navigationStructure.ourWorks.sublinks?.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Mother Foundress */}
      <div>
        <button
          onClick={() => toggleExpanded('mother')}
          className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth flex items-center justify-between"
        >
          {navigationStructure.mother.label}
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expanded.mother ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expanded.mother && (
          <div className="bg-muted/50 pl-4">
            {navigationStructure.mother.sublinks?.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Events */}
      <Link
        href={navigationStructure.events.href}
        onClick={handleLinkClick}
        className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
      >
        {navigationStructure.events.label}
      </Link>

      {/* Media */}
      <div>
        <button
          onClick={() => toggleExpanded('media')}
          className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth flex items-center justify-between"
        >
          {navigationStructure.media.label}
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expanded.media ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expanded.media && (
          <div className="bg-muted/50 pl-4">
            {navigationStructure.media.sublinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-smooth"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Support Us */}
      <Link
        href={navigationStructure.supportUs.href}
        onClick={handleLinkClick}
        className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
      >
        {navigationStructure.supportUs.label}
      </Link>
      {/* Membership Login */}
      <Link
        href={navigationStructure.membership.href}
        onClick={handleLinkClick}
        className="mx-4 mt-4 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-smooth rounded-md text-center"
      >
        {navigationStructure.membership.label}
      </Link>
    </nav>
  );
}
