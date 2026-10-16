import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { impact } from "@/lib/data";
import { Counter, Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function Impact() {
  return (
    <section className="section-pad bg-mesh">
      <div className="container">
        <SectionHeading
          eyebrow="Impact & ESG"
          title="Water infrastructure you can measure"
          subtitle="Every public metric carries a definition, a baseline, a measurement method and a date."
        />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {impact.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-border/70 bg-white p-7 text-center shadow-sm">
                <p className="font-display text-4xl font-bold text-water md:text-5xl">
                  <Counter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section-pad bg-white">
      <div className="container grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow">Knowledge Centre</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-muted-foreground">
            Clear answers on testing, treatment, RO and delivery models — reviewed by our engineering team.
          </p>
          <Link href="/laboratory" className="group mt-6 inline-flex items-center gap-2 font-semibold text-water">
            <FileCheck2 className="h-4 w-4" />
            Download an example lab report
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-hero py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-water/25 blur-3xl" />
      <div className="container relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Ready to move from water risk to <span className="text-gradient">water performance</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Book a test, request a site assessment, upload a water report or submit an RFP —
            a named engineer responds within one business day.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg"><Link href="/laboratory">Book a Water Test</Link></Button>
            <Button asChild size="lg" variant="white"><Link href="/contact">Request Site Assessment</Link></Button>
            <Button asChild size="lg" variant="accent"><Link href="/water-plants">Submit RFP</Link></Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
