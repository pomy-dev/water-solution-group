import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves, ArrowRight, CheckCircle2, AlertTriangle, Gauge,
  FlaskConical, Factory, Container, Recycle,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = { title: "Water Plants & Reverse Osmosis" };

const families = [
  { icon: Factory, title: "Conventional Potable Plant", blocks: "Screening → coagulation → flocculation → clarification/DAF → filtration → disinfection → storage", markets: "Municipalities, estates, institutions, surface-water schemes" },
  { icon: Gauge, title: "Borehole / Groundwater Plant", blocks: "Aeration → iron/manganese removal → filtration → softening or membranes → disinfection → storage", markets: "Communities, farms, lodges, mines, property" },
  { icon: Waves, title: "Brackish-Water RO Plant", blocks: "Pretreatment → cartridge filtration → high-pressure pump → RO → remineralisation → disinfection", markets: "High-TDS boreholes, industry, agriculture" },
  { icon: Waves, title: "Seawater Desalination (SWRO)", blocks: "Intake → DAF/UF pretreatment → cartridge → high-pressure SWRO + energy recovery → remineralisation", markets: "Coastal cities, industry, mines, resorts" },
  { icon: Recycle, title: "Advanced Water Reuse", blocks: "Biological / MBR → advanced filtration → RO where required → UV/AOP → monitored reuse", markets: "Municipal & industrial reuse, potable reuse under strict governance" },
  { icon: Container, title: "Containerised / Modular", blocks: "Pre-engineered skids with remote monitoring, scaled to source and target quality", markets: "Remote communities, mining camps, emergencies, phased growth" },
];

const roSteps = [
  { label: "Source", detail: "Borehole, seawater, treated wastewater or process water" },
  { label: "Pretreat", detail: "Screening, oxidation, DAF, media filtration or UF" },
  { label: "Protect", detail: "Antiscalant, pH control, cartridge filtration" },
  { label: "Separate", detail: "High-pressure pump → RO arrays → permeate + concentrate" },
  { label: "Finish", detail: "Remineralise, stabilise, disinfect, store, distribute" },
  { label: "Manage", detail: "Concentrate, CIP waste, sludge and chemical streams" },
];

const risks = [
  "Poor pretreatment causes fouling, scaling and membrane damage — pretreatment is always source-specific.",
  "RO produces a concentrate stream that must have a lawful, environmentally responsible route.",
  "Low-mineral permeate normally requires remineralisation/stabilisation before distribution as drinking water.",
  "RO never replaces source protection, disinfection strategy, Water Safety Planning or laboratory verification.",
];

export default function WaterPlantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Water Plants & RO"
        title="FROM RAW WATER TO RELIABLE SUPPLY"
        subtitle="We assess your source, define the required water quality, select the right treatment barriers and manage the project through design, procurement, commissioning and lifecycle support."
        chips={["Water Treatment Plants", "Reverse Osmosis", "Seawater Desalination", "Brackish RO", "Containerised Plants", "Plant Upgrades"]}
      />

      {/* Plant families */}
      <section className="section-pad bg-mesh">
        <div className="container">
          <SectionHeading
            eyebrow="Plant portfolio"
            title="Plant families, presented honestly"
            subtitle="Benchmarked against Rand Water's full value chain, Cape Town's diversified strategy and Singapore's integrated water cycle — adapted to African operating reality."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {families.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.07} className="h-full">
                <Card className="card-hover h-full border-border/70 bg-white">
                  <CardContent className="flex h-full flex-col p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-water/10 text-water">
                      <f.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">{f.title}</h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Treatment train</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy/80">{f.blocks}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Typical markets</p>
                    <p className="mt-1 text-sm text-muted-foreground">{f.markets}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RO train visual */}
      <section id="ro" className="section-pad scroll-mt-24 bg-navy-dark text-white">
        <div className="container">
          <SectionHeading
            dark
            eyebrow="Reverse Osmosis Centre"
            title="RO designed around your water — not a catalogue"
            subtitle="Reverse osmosis applies pressure above the natural osmotic pressure to force water through a semipermeable membrane — typically 15–50 bar depending on application (WHO)."
          />
          <div className="grid gap-3 md:grid-cols-6">
            {roSteps.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="relative h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Badge variant="aqua" className="bg-aqua/15">{String(i + 1).padStart(2, "0")}</Badge>
                  <h3 className="mt-3 font-display text-base font-semibold">{s.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">{s.detail}</p>
                </div>
                {i < roSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-aqua/50 md:block" />
                )}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-6">
              <p className="flex items-center gap-2 font-semibold text-gold"><AlertTriangle className="h-4 w-4" /> Public risk controls we state on every RO project</p>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {risks.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consulting workflow */}
      <section className="section-pad bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Consultation workflow</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl">One technical journey from problem to operating plant</h2>
            <ol className="mt-8 space-y-4">
              {["Define customer, source and target quality", "Test — representative sampling & lab analysis", "Model demand, flow, storage & growth", "Compare treatment alternatives & lifecycle cost", "Design basis, PFDs, hydraulic & process calculations", "Procure & build with QA/QC and contract controls", "Commission, verify and train operators", "Operate, monitor and continuously improve"].map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-water/10 font-display text-sm font-bold text-water">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-sm font-medium text-navy/85">{s}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="border-border/70 p-7">
              <div className="mb-5 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-water" />
                <p className="font-display text-lg font-semibold text-navy">Request a Water Plant Consultation</p>
              </div>
              <LeadForm compact title="" subtitle="Upload your water report, state your demand — we respond with a scoped feasibility pathway." />
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link href="/laboratory"><FlaskConical className="h-4 w-4" /> Upload Water Test Instead</Link>
              </Button>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
