import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  chips = [],
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  chips?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-hero pb-20 pt-40 text-white md:pb-28 md:pt-52">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-water/25 blur-3xl" />
      {/* floating droplets */}
      <div className="pointer-events-none absolute right-[12%] top-32 hidden animate-float lg:block">
        <div className="h-16 w-16 rounded-full border-2 border-aqua/40" />
      </div>
      <div className="pointer-events-none absolute right-[22%] top-56 hidden animate-float lg:block" style={{ animationDelay: "1.5s" }}>
        <div className="h-8 w-8 rounded-full bg-water/30 backdrop-blur" />
      </div>

      <div className="container relative">
        <Reveal>
          <p className="eyebrow text-aqua">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
        </Reveal>
        {chips.length > 0 && (
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span key={c} className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur transition-colors hover:bg-white/20">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.3}>
          <nav className="mt-10 flex items-center gap-1.5 text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-aqua">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">{eyebrow}</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
