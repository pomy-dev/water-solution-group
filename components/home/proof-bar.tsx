import { proofStats } from "@/lib/data";
import { Counter, Reveal } from "@/components/motion";

export function ProofBar() {
  return (
    <section className="border-y border-border/60 bg-white">
      <div className="container py-10">
        <Reveal>
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Evidence before adjectives — every figure sourced & dated
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-bold text-navy md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
              </p>
              <p className="mx-auto mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">{s.label}</p>
              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-wider text-water/70">{s.source}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
