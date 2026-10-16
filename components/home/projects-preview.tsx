"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";

export function ProjectsPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Proof of delivery"
          title="Projects engineered for measurable outcomes"
          subtitle="Situation, baseline, solution, timeframe, performance — verified before we publish."
        />
        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-water/10">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <Badge variant="navy">{p.sector}</Badge>
                    <Badge className="border-white/30 bg-white/15 text-white backdrop-blur">
                      <MapPin className="h-3 w-3" /> {p.location}
                    </Badge>
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/projects" className="group inline-flex items-center gap-2 font-semibold text-water">
            View the full project library
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
