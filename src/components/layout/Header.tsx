"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Start" },
    { href: "/build-studio", label: "Build Studio" },
    { href: "/cto-as-a-service", label: "CTO as a Service" },
    { href: "/specialiststod", label: "Specialiststöd" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-midnight/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/axuvo-logo-dark.svg"
              alt="Axuvo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver hover:text-white transition text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/kontakt"
              className="bg-mint text-midnight rounded-lg px-4 py-2 text-sm font-medium hover:bg-mint-hover transition-colors duration-200"
            >
              Boka möte
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-navy-mid transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Öppna meny"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-white/5 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-silver hover:text-white hover:bg-navy-mid rounded-lg transition text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block px-4 py-2 bg-mint text-midnight rounded-lg text-sm font-medium hover:bg-mint-hover transition-colors duration-200 w-full text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Boka möte
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
