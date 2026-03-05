import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: {
      heading: "Tjänster",
      links: [
        { href: "/build-studio", label: "Build Studio" },
        { href: "/cto-as-a-service", label: "CTO as a Service" },
        { href: "/specialiststod", label: "Specialiststöd" },
      ],
    },
    company: {
      heading: "Företaget",
      links: [
        { href: "/om-axuvo", label: "Om Axuvo" },
        { href: "/insikter", label: "Insikter" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    legal: {
      heading: "Juridiskt",
      links: [
        { href: "/integritet", label: "Integritet" },
        { href: "/cookies", label: "Cookies" },
      ],
    },
  };

  return (
    <footer className="bg-navy-mid border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logos/axuvo-logo-dark.svg"
                alt="Axuvo"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-slate text-sm">
              Vi bygger, leder och förstärker din digitala satsning.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">
              {footerLinks.services.heading}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">
              {footerLinks.company.heading}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">
              {footerLinks.legal.heading}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-slate/60 text-xs">
            © {currentYear} Axuvo AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};
