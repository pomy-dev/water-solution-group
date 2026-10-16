import type { Metadata } from "next";
import Link from "next/link";
import {
  FlaskConical, Droplets, Recycle, Waves, Globe2, Cpu,
  Radar, Activity, ClipboardCheck, Briefcase,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = { title: "Solutions" };

const items = [
  { id: "testing", icon: FlaskConical, title: "Water Quality Testing & Sampling", text: "Residential, borehole, municipal, hospital, industrial and environmental sampling — physical, chemical and microbiological analysis through verified laboratories, with chain-of-custody and interpreted results." },
  { id: "treatment", icon: Droplets, title: "Drinking Water Treatment", text: "Sediment filtration, activated carbon, softening, iron/manganese removal, UV, chlorination, RO, ultrafiltration — tailored treatment trains for your actual source." },
  { id: "wastewater", icon: Recycle, title: "Wastewater Treatment & Reuse", text: "Package plants, MBR/biological systems, tertiary polishing, disinfection and compliant greywater / process-water / irrigation reuse." },
  { id: "desalination", icon: Waves, title: "Desalination", text: "Seawater and brackish RO with robust pretreatment, energy recovery and responsible concentrate management — benchmarked against Singapore's Four National Taps." },
  { id: "boreholes", icon: Globe2, title: "Boreholes & Groundwater", text: "Water-quality assessment, yield support, storage, pumping, filtration, disinfection and scheduled monitoring for groundwater-dependent sites." },
  { id: "smart", icon: Cpu, title: "Smart Water & IoT", text: "Smart metering, tank levels, pressure, pH, chlorine, conductivity, turbidity and remote alarms — one dashboard from site to city." },
  { id: "nrw", icon: Radar, title: "Leak Detection & NRW", text: "District metering, acoustic and pressure tools, abnormal-consumption analytics, work-order workflows and performance reporting." },
  { id: "emergency", icon: Activity, title: "Emergency & Mobile Water", text: "Containerised and mobile treatment, temporary storage, disinfection and rapid deployment for outages and disasters." },
  { id: "om", icon: ClipboardCheck, title: "Operations & Maintenance", text: "Planned maintenance, consumables, calibration, service contracts, remote monitoring, spares and performance optimisation." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Every service, engineered around your water reality"
        subtitle="We start with your source, your standards and your operating constraints — then build the testing, treatment and monitoring pathway around them."
        chips={["Testing", "Treatment", "Reuse", "Desalination", "Smart Water", "O&M", "Emergency"]}
      />
      <section className="section-pad bg-mesh">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.07} className="h-full">
                <Card id={s.id} className="card-hover h-full scroll-mt-40 border-border/70 bg-white">
                  <CardContent className="flex h-full flex-col p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-water/15 to-aqua/15 text-water">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-water">
                      <Briefcase className="h-4 w-4" /> Discuss this solution
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Get started</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl">Not sure which solution fits?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Describe your situation — our engineers map it to the right test package, process train or
              project model. If RO, desalination or reuse is on the table, we begin with a validated water
              analysis, never a catalogue.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Every recommendation cites the applicable standard (SANS 241, ZWS 560, WHO guidelines).",
                "Lifecycle economics — energy, chemicals, membranes, sludge — included in every proposal.",
                "No universal-solution claims: multiple barriers, proportionate to your real risk.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="border-border/70 p-7">
              <LeadForm />
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
