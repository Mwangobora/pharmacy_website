import Link from "next/link";
import { Mail, MapPin, Phone, Pill } from "lucide-react";
import { APP_ROUTES, SITE } from "@/lib/config";

const CONTACT = {
  email: "mwangobora37@gmail.com",
  phone: "+255 761 862 523",
  address: "Sinza, Dar es Salaam, Tanzania",
};

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Test the Pharmacy System Freely", href: APP_ROUTES.login, external: true },
      { label: "Request Access", href: "#request-access" },
      { label: "Contact", href: "#request-access" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Pill className="h-4.5 w-4.5" />
              </span>
              <span className="text-sm font-bold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.description}
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> {CONTACT.address}
              </p>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built for pharmacies in Tanzania.</p>
        </div>
      </div>
    </footer>
  );
}
