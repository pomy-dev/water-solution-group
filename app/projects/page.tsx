import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

const pipeline = [
  { title: "Direct Potable Reuse Demonstration", sector: "Municipal reuse", stage: "Pilot design", region: "Southern Africa" },
  { title: "Industrial Estate Water Loop", sector: "Circular water", stage: "Feasibility", region: "East Africa" },
  { title: "District Smart Metering Phase 2", sector: "Smart water", stage: "Procurement", region: "West Africa" },
  { title: "Resort Seawater RO + Energy Recovery", sector: "Desalination", stage: "Owner's engineer appointed", region: "Coastal Southern Africa" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Evidence you can audit"
        subtitle="Every case study shows situation, baseline, solution, timeframe and performance — published only with client permission and verified data."
        chips={["Case Studies", "Project Map", "Before / After Metrics", "In Development", "PPP Opportunities"]}
      />
      <section className="section-pad bg-mesh">
        <div className="container">
          <SectionHeading eyebrow="Delivered & operating" title="Selected case studies" />
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-water/10">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <Badge variant="navy">{p.sector}</Badge>
                      <Badge className="border-white/30 bg-white/15 text-white backdrop-blur"><MapPin className="h-3 w-3" /> {p.location}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-navy">{p.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-water/8 px-2.5 py-1 text-[11px] font-medium text-water">{t}</span>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border/60 pt-5">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-base font-bold text-navy">{m.value}</p>
                          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="mt-5 justify-start px-0 text-water">
                      <Link href="/contact">Read the full case study <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-navy-dark text-white">
        <div className="container">
          <SectionHeading dark eyebrow="In development" title="Bankable pipeline" subtitle="Feasibility and PPP opportunities open to partners, funders and offtakers — subject to confidentiality and due diligence." />
          <div className="grid gap-4 md:grid-cols-2">
            {pipeline.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div>
                    <h3 className="font-display text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{p.sector} • {p.region}</p>
                  </div>
                  <Badge variant="gold" className="shrink-0">{p.stage}</Badge>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-sm text-white/60">
              Investors & developers:{" "}
              <Link href="/contact" className="font-semibold text-aqua underline-offset-4 hover:underline">
                request access to the project deal room
              </Link>{" "}
              — NDA → data room → feasibility → project finance pathway.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
