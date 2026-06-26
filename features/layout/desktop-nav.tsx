import Link from 'next/link';
import { navigationStructure } from '@/lib/constants/navigation';
import { ChevronDown } from 'lucide-react';

export function DesktopNav() {
  return (
    <nav className="flex items-center gap-1">
      {/* About Us with Dropdown */}
      <div className="relative group">
        <Link
          href={navigationStructure.aboutUs.href}
          className="px-3 py-2 text-sm group font-medium text-foreground hover:text-primary transition-smooth hover:bg-muted rounded-md flex items-center gap-1"
        >
          {navigationStructure.aboutUs.label}
          <ChevronDown
            size={16}
            className={`transition-transform group-hover:rotate-180`}
          />
        </Link>

        {/* About Us Dropdown */}
        <div className="absolute left-0 mt-0 w-56 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
          {navigationStructure.aboutUs.sublinks?.map((link) => (
            <div key={link.label} className="relative group/submenu">
              {link.href ? (
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted flex items-center justify-between transition-smooth"
                >
                  {link.label}
                  {link.sublinks && <ChevronDown size={14} className="ml-2" />}
                </Link>
              ) : (
                <div className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted flex items-center justify-between transition-smooth">
                  {link.label}
                  {link.sublinks && <ChevronDown size={14} className="ml-2" />}
                </div>
              )}

              {/* Nested Submenu */}
              {link.sublinks && (
                <div className="absolute left-full top-0 mt-0 w-56 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 py-2 ml-2">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted block transition-smooth"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Our Works with Dropdown */}
      <div className="relative group">
        <p className="px-3 group py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth hover:bg-muted rounded-md flex items-center gap-1">
          {navigationStructure.ourWorks.label}
          <ChevronDown
            size={16}
            className={`transition-transform group-hover:rotate-180`}
          />
        </p>

        {/* Our Works Dropdown */}
        <div className="absolute left-0 mt-0 w-56 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
          {navigationStructure.ourWorks.sublinks?.map((link) => (
            <div key={link.href} className="relative group/submenu">
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted flex items-center justify-between transition-smooth"
              >
                {link.label}
              </Link>

              {/* Nested Submenu */}
              {/* {link.sublinks && (
                <div className="absolute left-full top-0 mt-0 w-56 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 py-2 ml-2">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted block transition-smooth"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
      {/* Mother Foundress with Dropdown */}
      <div className="relative group">
        <div className="px-3 py-2 text-sm group font-medium text-foreground hover:text-primary transition-smooth hover:bg-muted rounded-md flex items-center gap-1 cursor-pointer">
          {navigationStructure.mother.label}
          <ChevronDown
            size={16}
            className={`transition-transform group-hover:rotate-180`}
          />
        </div>

        {/* Mother Foundress Dropdown */}
        <div className="absolute left-0 mt-0 w-56 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
          {navigationStructure.mother.sublinks?.map((link) => (
            <div key={link.label} className="relative group/submenu">
              {link.href ? (
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted flex items-center justify-between transition-smooth"
                >
                  {link.label}
                </Link>
              ) : (
                <div className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted flex items-center justify-between transition-smooth">
                  {link.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <Link
        href={navigationStructure.events.href}
        className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth hover:bg-muted rounded-md"
      >
        {navigationStructure.events.label}
      </Link>
      <p className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth hover:bg-muted rounded-md"></p>

      {/* Media with Dropdown */}
      <div className="relative group">
        <Link
          href={navigationStructure.media.href}
          className="px-3 py-2 text-sm group font-medium text-foreground hover:text-primary transition-smooth hover:bg-muted rounded-md flex items-center gap-1"
        >
          {navigationStructure.media.label}
          <ChevronDown
            size={16}
            className={`transition-transform  group-hover:rotate-180`}
          />
        </Link>

        {/* Media Dropdown */}
        <div className="absolute left-0 mt-0 w-56 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
          {navigationStructure.media.sublinks?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted block transition-smooth"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Support Us */}
      <Link
        href={navigationStructure.supportUs.href}
        className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth hover:bg-muted rounded-md"
      >
        {navigationStructure.supportUs.label}
      </Link>
      {/* Membership Login */}
      <Link
        href={navigationStructure.membership.href}
        className="ml-2 px-4 py-2 text-sm font-medium text-white bg-foreground hover:bg-primary-dark transition-smooth rounded-md"
      >
        {navigationStructure.membership.label}
      </Link>
    </nav>
  );
}
