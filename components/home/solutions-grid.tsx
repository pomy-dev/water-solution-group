import Link from "next/link";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { ArrowRight } from "lucide-react";

export function SolutionsGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title="One platform. Every layer of water security."
          subtitle="From the first laboratory sample to a city-scale smart-water command centre — engineered, delivered and operated by one accountable team."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06} className="h-full">
              <div className="group h-full bg-white p-7 transition-colors duration-300 hover:bg-gradient-to-br hover:from-water/5 hover:to-aqua/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-water group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/solutions" className="group inline-flex items-center gap-2 font-semibold text-water">
            Explore all solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
