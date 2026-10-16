import type { Metadata } from "next";
import {
  Bell, MapPin, Gauge, FlaskConical, Users, LayoutDashboard,
  BarChart3, LineChart, HeartPulse, Globe2, Lock, ArrowRight, Cpu,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = { title: "Smart Water Platform" };

const stack = [
  { icon: Users, layer: "Citizen / Customer", caps: "Portal, app/PWA, usage, bills, leak alerts, service requests, quality notices" },
  { icon: Bell, layer: "Field Operations", caps: "Mobile work orders, sampling, asset scans, photos, chain of custody" },
  { icon: Gauge, layer: "Network Intelligence", caps: "Flow, pressure, smart meters, DMA analytics, tank levels, leakage, demand forecasting" },
  { icon: FlaskConical, layer: "Water Quality", caps: "Online sensors + laboratory results + compliance rules + incident workflows" },
  { icon: MapPin, layer: "GIS & Assets", caps: "Pipes, valves, pumps, reservoirs, meters, condition, criticality" },
  { icon: LayoutDashboard, layer: "Command Centre", caps: "Operational KPIs, alarms, incidents, water balance, energy and service levels" },
  { icon: BarChart3, layer: "Decision Intelligence", caps: "Predictive maintenance, demand scenarios, investment prioritisation, digital twin" },
  { icon: Globe2, layer: "City / SDG Reporting", caps: "U4SSC / ISO 37120-37124 aligned metrics and public transparency dashboards" },
];

const kpis = [
  { icon: FlaskConical, label: "Water quality", items: "On-time samples, attention status, time-to-verified-result" },
  { icon: Gauge, label: "Network", items: "Continuity, pressure exceptions, NRW, leaks detected, repair time" },
  { icon: Cpu, label: "Treatment", items: "Flow treated, uptime, recovery, energy intensity, compliance" },
  { icon: Users, label: "Customer", items: "Quote response, first-time resolution, portal adoption, CSAT" },
  { icon: HeartPulse, label: "Health facilities", items: "Critical-point compliance, WASH closure, outage readiness" },
  { icon: LineChart, label: "Impact", items: "People served, litres reused, water saved, jobs trained" },
];

export default function SmartWaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart Water Platform"
        title="Trusted data. Fast response. Accountable infrastructure."
        subtitle="We help utilities and municipalities connect meters, sensors, GIS, laboratory results and field operations into a practical smart-water operating model — focused on service quality, water loss, resilience and accountability."
        chips={["Customer Portal", "Command Centre", "IoT / SCADA", "GIS", "Asset Management", "Digital Twin", "API"]}
      />
      <section className="section-pad bg-mesh">
        <div className="container">
          <SectionHeading
            eyebrow="The platform stack"
            title="Eight layers, one operating picture"
            subtitle="Benchmarked on PUB Singapore's smart meters, DEWA's digital journeys and the World Bank's Digital Water reference architecture — localised to African networks."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s, i) => (
              <Reveal key={s.layer} delay={(i % 4) * 0.06} className="h-full">
                <Card className="card-hover h-full border-border/70 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <Badge variant="aqua">L{i + 1}</Badge>
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-navy">{s.layer}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.caps}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-navy-dark text-white">
        <div className="container">
          <SectionHeading
            dark
            eyebrow="KPI framework"
            title="Every dashboard answers five questions"
            subtitle="What is measured? How often? Who is alerted? What action follows? What KPI improves — and what evidence proves it?"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kpis.map((k, i) => (
              <Reveal key={k.label} delay={(i % 3) * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-water/15 text-water-light">
                    <k.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{k.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{k.items}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-aqua/25 bg-aqua/5 p-7 md:flex-row">
              <p className="flex items-center gap-3 text-sm text-white/80">
                <Lock className="h-5 w-5 text-aqua" />
                Role-based portals: customers, municipalities, hospitals, labs, field teams and executives — each sees only what they should.
              </p>
              <a href="#demo" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-aqua">
                Book a live demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="demo" className="section-pad scroll-mt-24 bg-white">
        <div className="container">
          <Card className="border-border/70 p-7 md:p-10">
            <LeadForm title="Book a platform demo" subtitle="We will walk you through a live dashboard configured for your sector — municipal, hospital, industrial or estate." />
          </Card>
        </div>
      </section>
    </>
  );
}
