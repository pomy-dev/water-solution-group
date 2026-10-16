import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, FileText, Landmark, Loader as LoaderIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = { title: "Contact" };

const desks = [
  { icon: FileText, title: "Quotes & bookings", text: "Water tests, treatment systems, maintenance contracts", contact: "quotes@africawatersolutions.co.za" },
  { icon: Landmark, title: "Government / RFP desk", text: "Tenders, municipal assessments, PPP structures", contact: "rfp@africawatersolutions.co.za" },
  { icon: LoaderIcon, title: "Emergency support", text: "24/7 rapid response for outages and water-quality incidents", contact: "+27 10 000 0000" },
];

const offices = [
  { city: "Johannesburg", country: "South Africa", role: "Head office & engineering hub" },
  { city: "Harare", country: "Zimbabwe", role: "Laboratory partner coordination" },
  { city: "Lusaka", country: "Zambia", role: "Projects & municipal services" },
  { city: "Windhoek", country: "Namibia", role: "Reuse & arid-region specialisation" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak to a water engineer, not a call centre"
        subtitle="Structured intake, named owner, published response SLAs — no dead inboxes."
        chips={["Request Quote", "Book Test", "Emergency", "RFP Desk", "Investor Desk", "Suppliers"]}
      />
      <section className="section-pad bg-mesh">
        <div className="container grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <Card className="border-border/70">
                <CardContent className="space-y-5 p-7">
                  <p className="font-display text-lg font-semibold text-navy">Direct channels</p>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-water/10 text-water"><Phone className="h-4 w-4" /></span>
                    <div><p className="text-sm font-semibold text-navy">+27 10 000 0000</p><p className="text-xs text-muted-foreground">24/7 emergency line</p></div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-water/10 text-water"><Mail className="h-4 w-4" /></span>
                    <div><p className="text-sm font-semibold text-navy">info@africawatersolutions.co.za</p><p className="text-xs text-muted-foreground">General enquiries</p></div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-water/10 text-water"><Clock className="h-4 w-4" /></span>
                    <div><p className="text-sm font-semibold text-navy">Mon–Fri 08:00–17:00 SAST</p><p className="text-xs text-muted-foreground">Engineering response within 1 business hour</p></div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
            {desks.map((d, i) => (
              <Reveal key={d.title} delay={0.08 + i * 0.06}>
                <Card className="card-hover border-border/70">
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua/10 text-aqua"><d.icon className="h-5 w-5" /></span>
                    <div>
                      <p className="font-display text-base font-semibold text-navy">{d.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{d.text}</p>
                      <p className="mt-1.5 text-sm font-medium text-water">{d.contact}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <Card className="border-border/70 bg-navy-dark text-white">
                <CardContent className="p-7">
                  <p className="flex items-center gap-2 font-display text-base font-semibold"><MapPin className="h-4 w-4 text-aqua" /> Regional footprint</p>
                  <ul className="mt-4 space-y-3">
                    {offices.map((o) => (
                      <li key={o.city} className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <div>
                          <p className="text-sm font-semibold">{o.city}, {o.country}</p>
                          <p className="text-xs text-white/60">{o.role}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-3">
            <Card className="border-border/70 p-7 md:p-10">
              <LeadForm title="Request a consultation" subtitle="Upload-capable forms route to named teams with SLAs. For technical projects, attach your water report after submission — we reply with a secure upload link." />
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
