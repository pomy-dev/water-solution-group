import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

export function SectorsShowcase() {
  const featured = sectors.slice(0, 6);
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container">
        <SectionHeading
          dark
          eyebrow="Sectors"
          title="Built for the people who carry water responsibility"
          subtitle="Hospitals, municipalities, mines, farms, estates and industry — each with its own risks, standards and operating reality."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08} className="h-full">
              <Link href={`/sectors#${s.id}`}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-aqua/40 hover:bg-white/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua/15 text-aqua transition-colors group-hover:bg-aqua group-hover:text-navy">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{s.text}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-aqua">
                      Sector solutions
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
