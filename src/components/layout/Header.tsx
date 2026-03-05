"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface SubLink {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  children?: SubLink[];
}

const navigation: NavItem[] = [
  {
    href: "/build-studio",
    label: "Build Studio",
    children: [
      { href: "/build-studio", label: "Översikt" },
      { href: "/build-studio/blueprint", label: "Blueprint" },
      { href: "/build-studio/the-build", label: "The Build" },
      { href: "/build-studio/forvaltning", label: "Förvaltning" },
      { href: "/build-studio/idekatalog", label: "Idékatalog" },
    ],
  },
  {
    href: "/cto-as-a-service",
    label: "CTO as a Service",
    children: [
      { href: "/cto-as-a-service", label: "Översikt" },
      { href: "/cto-as-a-service/vad-gor-en-inhyrd-cto", label: "Vad gör en inhyrd CTO" },
      { href: "/cto-as-a-service/nar-behover-du", label: "När behöver du" },
      { href: "/cto-as-a-service/paket", label: "Paket" },
      { href: "/cto-as-a-service/faq", label: "Vanliga frågor" },
    ],
  },
  {
    href: "/specialiststod",
    label: "Specialiststöd",
    children: [
      { href: "/specialiststod", label: "Översikt" },
      { href: "/specialiststod/sprintar", label: "Sprintar" },
      { href: "/specialiststod/qa-och-audits", label: "QA och audits" },
      { href: "/specialiststod/utbildning", label: "Utbildning" },
      { href: "/specialiststod/radgivning", label: "Rådgivning" },
    ],
  },
  { href: "/insikter", label: "Insikter" },
  { href: "/om-axuvo", label: "Om Axuvo" },
];

/* ── Desktop dropdown ── */
function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 text-silver hover:text-white transition text-sm font-medium"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="bg-navy-mid/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[220px]">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-silver hover:text-white hover:bg-white/5 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile accordion ── */
function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-silver hover:text-white hover:bg-navy-mid rounded-lg transition text-sm font-medium"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-4 border-l border-white/10 pl-2 mt-1 space-y-0.5">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="block px-4 py-2 text-sm text-slate hover:text-white hover:bg-navy-mid rounded-lg transition"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Header ── */
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobile = () => setIsMobileMenuOpen(false);

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
          <nav className="hidden lg:flex items-center gap-7">
            {navigation.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-silver hover:text-white transition text-sm font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/kontakt"
              className="bg-mint text-midnight rounded-lg px-4 py-2 text-sm font-medium hover:bg-mint-hover transition-colors duration-200"
            >
              Boka möte
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-navy-mid transition-colors"
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
          <nav className="lg:hidden border-t border-white/5 py-4 space-y-1">
            <Link
              href="/"
              onClick={closeMobile}
              className="block px-4 py-2 text-silver hover:text-white hover:bg-navy-mid rounded-lg transition text-sm font-medium"
            >
              Start
            </Link>

            {navigation.map((item) =>
              item.children ? (
                <MobileAccordion key={item.href} item={item} onNavigate={closeMobile} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="block px-4 py-2 text-silver hover:text-white hover:bg-navy-mid rounded-lg transition text-sm font-medium"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/kontakt"
              className="block px-4 py-2 bg-mint text-midnight rounded-lg text-sm font-medium hover:bg-mint-hover transition-colors duration-200 w-full text-center mt-4"
              onClick={closeMobile}
            >
              Boka möte
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
