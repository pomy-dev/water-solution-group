import Link from "next/link";
import { ArrowRight, Bell, Droplets, Gauge, MapPin, TrendingDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

const layers = [
  { icon: Bell, title: "Alerts & Escalation", text: "Thresholds breached → alert → work order → resolution, with full audit trail." },
  { icon: Gauge, title: "Network Intelligence", text: "Flow, pressure, DMA analytics, tank levels and demand forecasting." },
  { icon: Droplets, title: "Quality Monitoring", text: "Online sensors plus laboratory results, unified against compliance rules." },
  { icon: MapPin, title: "GIS & Assets", text: "Pipes, valves, pumps, reservoirs and critical facilities on one map." },
];

export function SmartTeaser() {
  return (
    <section className="section-pad relative overflow-hidden bg-mesh">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Smart Water Platform"
            title="See your water network breathe — in real time"
            subtitle="Every smart-city page answers: what is measured, how often, who is alerted, what action follows, and what KPI improves."
          />
          <div className="space-y-4">
            {layers.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-border/70 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-water/10">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-water/10 text-water">
                    <l.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy">{l.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{l.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Button asChild className="group mt-8">
              <Link href="/smart-water">
                Explore the Smart Water Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Command centre preview */}
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-water/20 to-aqua/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-navy-dark p-6 text-white shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Municipal Command Centre</p>
                <span className="flex items-center gap-1.5 rounded-full bg-aqua/15 px-3 py-1 text-[11px] font-medium text-aqua">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" /> Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "NRW (est.)", value: "31%", delta: "-4.2%", good: true },
                  { label: "Supply continuity", value: "99.1%", delta: "+0.3%", good: true },
                  { label: "Open work orders", value: "17", delta: "6 urgent", good: false },
                  { label: "Reservoir levels", value: "76%", delta: "stable", good: true },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-xl bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/50">{kpi.label}</p>
                    <p className="mt-1 font-display text-2xl font-bold">{kpi.value}</p>
                    <p className={`mt-1 flex items-center gap-1 text-[11px] font-medium ${kpi.good ? "text-aqua" : "text-gold"}`}>
                      <TrendingDown className={`h-3 w-3 ${kpi.good ? "" : "rotate-90"}`} />
                      {kpi.delta}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-white/5 p-4">
                <p className="mb-3 text-[10px] uppercase tracking-wider text-white/50">Water quality events — 30 days</p>
                <div className="flex h-16 items-end gap-1">
                  {[40, 65, 30, 80, 55, 90, 45, 70, 35, 60, 25, 85, 50, 75, 40, 65, 30, 55, 20, 70, 45, 60, 35, 80, 50, 40, 65, 30, 55, 45].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t ${h > 75 ? "bg-gold/70" : "bg-water/70"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
