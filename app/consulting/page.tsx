import type { Metadata } from "next";
import {
  ClipboardCheck, FileSearch, FlaskConical, DraftingCompass, Microscope,
  Wrench, Gavel, ShieldCheck, Rocket, Gauge,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = { title: "Consulting & Project Management" };

const services = [
  { icon: FileSearch, title: "Water Source & Quality Assessment", text: "Review borehole, river, dam, municipal, seawater or process-water sources; validate laboratory data and sampling plans." },
  { icon: FlaskConical, title: "Plant Feasibility Study", text: "Demand profile, design flow, process alternatives, site constraints, energy, waste streams, capex/opex ranges and implementation plan." },
  { icon: DraftingCompass, title: "Concept & Process Design", text: "Design basis, process flow diagrams, mass balance, hydraulic profile, equipment duty points and control philosophy." },
  { icon: Microscope, title: "Pilot & Treatability Testing", text: "Bench and pilot testing where source variability or advanced reuse/desalination risk makes desktop design insufficient." },
  { icon: Gauge, title: "Plant Audit & Optimisation", text: "Capacity bottlenecks, dosing, filters, membranes, disinfection, instrumentation, energy and operator practices." },
  { icon: Wrench, title: "Upgrade & Rehabilitation Design", text: "Brownfield tie-ins, phased expansion, redundancy, automation and compliance recovery." },
  { icon: Gavel, title: "Tender & Procurement Support", text: "Employer requirements, specifications, BOQ, bid evaluation, vendor qualification and contract support." },
  { icon: ShieldCheck, title: "Owner's Engineer / Technical Advisory", text: "Independent design review, contractor oversight, FAT/SAT and performance acceptance." },
  { icon: Rocket, title: "Commissioning & Handover", text: "Flushing, calibration, start-up, performance testing, training, O&M manuals and handover packs." },
  { icon: ClipboardCheck, title: "O&M / Lifecycle Support", text: "Remote monitoring, planned maintenance, membrane/chemical management, spares, calibration and reporting." },
];

const models = [
  { name: "Consulting / Feasibility", when: "Problem, technology and budget still being defined" },
  { name: "Owner's Engineer / EPCM", when: "Client wants independent control of design & procurement packages" },
  { name: "Design-Build / EPC", when: "Integrated design-and-construction responsibility required" },
  { name: "BOOT / PPP / Concession", when: "Private finance, long-term operation or water off-take structure" },
  { name: "O&M Performance Contract", when: "Existing plant needs stable, measurable operations" },
  { name: "Modular Lease / Water-as-a-Service", when: "Rapid deployment and opex model rather than upfront ownership" },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulting & Project Management"
        title="ONE ACCOUNTABLE TEAM FROM PROBLEM TO OPERATING ASSET"
        subtitle="Feasibility • Process Design • Owner's Engineer • EPC/EPCM Support • Procurement • Commissioning • O&M • Smart Monitoring. Even where designers, OEMs, contractors and financiers are separate organisations."
        chips={["Feasibility", "Process Design", "Owner's Engineer", "EPC/EPCM", "PPP / BOOT", "Commissioning", "O&M"]}
      />
      <section className="section-pad bg-mesh">
        <div className="container">
          <SectionHeading eyebrow="Consulting catalogue" title="Professional problem-solving before equipment" subtitle="The entry point for municipalities, mines, factories, hospitals, estates, farms, developers and investors." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06} className="h-full">
                <Card className="card-hover h-full border-border/70 bg-white">
                  <CardContent className="p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua/10 text-aqua">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3.5 font-display text-base font-semibold text-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeading eyebrow="Delivery models" title="Choose the responsibility model that fits your risk" subtitle="From pure consulting to full BOOT concessions — benchmarked on Israel's desalination PPPs and Durban's water-recycling concession." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {models.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-border/70 bg-mesh p-6">
                  <h3 className="font-display text-base font-semibold text-navy">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.when}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <Card className="mt-14 border-border/70 p-7 md:p-10">
              <LeadForm title="Submit a project brief" subtitle="Include your source, demand, site constraints and delivery preference — we respond with a stage-gate plan and fee proposal." />
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
