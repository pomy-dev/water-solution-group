import Link from "next/link";
import { Droplet, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/data";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About AWSG", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Laboratory & Quality", href: "/laboratory" },
      { label: "Insights & FAQs", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Water Quality Testing", href: "/solutions#testing" },
      { label: "Water Treatment Plants", href: "/water-plants" },
      { label: "Reverse Osmosis", href: "/water-plants#ro" },
      { label: "Consulting & Project Delivery", href: "/consulting" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "Smart Water Platform", href: "/smart-water" },
      { label: "Sectors We Serve", href: "/sectors" },
      { label: "Global Health & WASH", href: "/sectors#health" },
      { label: "Emergency Water", href: "/solutions#emergency" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-water/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />

      <div className="container relative py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/assets/logo.png" alt="Africa Water Solutions Group" className="h-16 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Integrated water security, testing, treatment, smart monitoring and project delivery —
              helping clients move from uncertainty to measurable water performance across Africa.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-aqua" /> +27 82 519 6140 (24/7 emergency)</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-aqua" /> info@africawatersolutions.co.za</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-aqua" /> Johannesburg • Harare • Lusaka • Windhoek</li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="group inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-aqua">
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Africa Water Solutions Group. All rights reserved.</p>
          <p className="text-center">Water Security • Treatment Plants • Reverse Osmosis • Smart Cities</p>
          <p className="text-center">Powered By:{" "}
            <a href="https://indabuko-global.vercel.app" target="_blank" rel="noopener noreferrer">Indabuko Tech Crafts</a><br />
            Contacts: <a href="tel:+270745032009">+27 074 503 2009</a> / <a href="tel:+26876957019">+268 7695 7019</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
