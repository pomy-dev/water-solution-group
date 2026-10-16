import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { LeadForm } from "@/components/lead-form";
import { sectors } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Sectors" };

const wasp = [
  "Facility intake: beds, services, sources, storage, outages, prior lab reports",
  "Site mapping: source → treatment → storage → distribution → critical points",
  "Risk-based sampling across source, storage and critical distribution points",
  "Infrastructure gap review: availability, sanitation, hygiene, cleaning, power",
  "Risk register: hazards, controls, owners — traffic-light action plan",
  "Budgeted improvement roadmap with quick wins and capex phasing",
  "Continuous monitoring: scheduled tests, sensors, incidents and audit trail",
];

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Purpose-built for your sector's water reality"
        subtitle="Compliance context, recommended services, solution architecture and case evidence — organised the way you actually carry responsibility."
        chips={sectors.map((s) => s.title.split(" &")[0])}
      />
      <section className="section-pad bg-mesh">
        <div className="container">
          <SectionHeading eyebrow="Sector solutions" title="Twelve sectors. One engineering backbone." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.06} className="h-full">
                <Card id={s.id} className="card-hover h-full scroll-mt-40 border-border/70 bg-white">
                  <CardContent className="p-7">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-water/15 to-aqua/15 text-water">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    <Badge variant="outline" className="mt-4">Sector-specific compliance register</Badge>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Health & WASH hub */}
      <section id="health" className="scroll-mt-24 bg-navy-dark py-20 text-white md:py-28">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-aqua">Global Health & WASH Hub</p>
            <h2 className="display-title mt-3 text-3xl text-white sm:text-4xl">
              Safe water is foundational to quality healthcare
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              WHO's 2026 health-care-facility report highlights major remaining gaps in basic sanitation and
              environmental cleaning. AWSG supports hospitals and clinics with water-risk assessments, monitoring
              plans, treatment solutions and continuity planning — strengthening WASH infrastructure and facility resilience.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Hospital water-quality monitoring", "WASH facility assessments", "Water Safety Plans", "Storage tank hygiene", "Emergency continuity", "Facility dashboards"].map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/80">{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="flex items-center gap-2 font-display text-lg font-semibold">
                <HeartPulse className="h-5 w-5 text-aqua" /> Healthcare WASH assessment workflow
              </p>
              <ol className="mt-5 space-y-3.5">
                {wasp.map((s, i) => (
                  <li key={s} className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-xs font-bold text-aqua">{i + 1}</span>
                    <p className="text-sm leading-relaxed text-white/75">{s}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-4 text-xs leading-relaxed text-gold/90">
                AWSG provides water infrastructure and WASH services — never clinical diagnosis or medical treatment.
                All health claims are evidence-based and linked to recognised public-health guidance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <Card className="border-border/70 p-7 md:p-10">
            <LeadForm title="Sector enquiry" subtitle="Tell us your sector and site profile — we route you to the right specialist team." />
          </Card>
        </div>
      </section>
    </>
  );
}
