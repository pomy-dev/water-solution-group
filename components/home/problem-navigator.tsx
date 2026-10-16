import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { problems } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

export function ProblemNavigator() {
  return (
    <section className="section-pad bg-mesh">
      <div className="container">
        <SectionHeading
          eyebrow="Start with your problem"
          title="What water challenge are you solving?"
          subtitle="Choose your path — we route you to the right service, engineer or diagnostic in one click."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Link href={p.href}>
                <Card className="card-hover group h-full border-border/70 bg-white/80 backdrop-blur">
                  <CardContent className="flex h-full flex-col p-6">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-water/15 to-aqua/15 text-water transition-all duration-300 group-hover:from-water group-hover:to-aqua group-hover:text-white">
                      <p.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-navy">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-water">
                      {p.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
