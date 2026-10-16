import { journey } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

export function Journey() {
  return (
    <section className="section-pad bg-navy-dark text-white">
      <div className="container">
        <SectionHeading
          dark
          eyebrow="How we work"
          title="From uncertain source to verified safe supply"
          subtitle="A disciplined operating model behind every project — no catalogue sales, no guesswork."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {journey.map((j, i) => (
            <Reveal key={j.step} delay={i * 0.07} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-aqua/40 hover:bg-white/10">
                <span className="font-display text-3xl font-bold text-aqua/40 transition-colors group-hover:text-aqua">{j.step}</span>
                <h3 className="mt-3 font-display text-base font-semibold">{j.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{j.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
