import type { Metadata } from "next";
import { ShieldCheck, Globe2, Users, Award } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Counter } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = { title: "About" };

const values = [
  { icon: ShieldCheck, title: "Evidence before adjectives", text: "No unsubstantiated 'market leader' claims — verifiable standards, named methods, project evidence and response times." },
  { icon: Globe2, title: "Global benchmark, African application", text: "Singapore's integration, Israel's delivery models, Dutch governance and Windhoek's reuse — adapted to local reality." },
  { icon: Users, title: "People-centred technology", text: "Sensors and AI are a means to inclusive, sustainable service outcomes — never an end in themselves." },
  { icon: Award, title: "Professional accountability", text: "Registered engineers, verified laboratory partners, stage-gate governance and published service levels." },
];

const team = [
  { name: "Engineering Leadership", role: "Process & water treatment engineering", bio: "Registered professionals spanning conventional treatment, membranes, reuse and commissioning across municipal, industrial and healthcare projects." },
  { name: "Laboratory & Quality Team", role: "Sampling, chain-of-custody & QA", bio: "Coordinating verified partner laboratories, method scopes, result QA and the standards compliance register." },
  { name: "Digital Water Team", role: "IoT, GIS & platform engineering", bio: "Building the smart-water stack: device registry, telemetry, alerts, dashboards and integrations — securely." },
  { name: "Project Delivery Office", role: "PMO, owner's engineer & contracts", bio: "Stage-gate governance from feasibility to handover: schedule, commercial, quality, HSE and performance acceptance." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AWSG"
        title="From uncertainty to measurable water performance"
        subtitle="Africa Water Solutions Group is an integrated water security and smart-water solutions platform serving communities, institutions, utilities and industry across Africa — connecting testing, treatment engineering, infrastructure, digital monitoring and lifecycle support."
        chips={["Purpose", "Governance", "Leadership", "Technology Partners", "Careers", "Procurement"]}
      />
      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeading eyebrow="How we operate" title="Four commitments behind every engagement" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.07} className="h-full">
                <Card className="card-hover h-full border-border/70 bg-white">
                  <CardContent className="p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-water/10 text-water">
                      <v.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-navy">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-mesh">
        <div className="container">
          <SectionHeading eyebrow="Leadership" title="A multi-disciplinary team, one accountable platform" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.07} className="h-full">
                <Card className="card-hover h-full border-border/70 bg-white">
                  <CardContent className="p-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-water to-aqua font-display text-lg font-bold text-white">
                      {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-navy">{m.name}</h3>
                    <p className="mt-0.5 text-xs font-semibold text-water">{m.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl bg-navy-dark p-10 text-white lg:grid-cols-4">
              {[
                { v: 4, s: "", l: "operating country hubs" },
                { v: 12, s: "+", l: "sectors served" },
                { v: 30, s: "+", l: "verified partner capabilities" },
                { v: 100, s: "%", l: "evidence-checked public claims" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-display text-4xl font-bold text-aqua"><Counter value={s.v} suffix={s.s} /></p>
                  <p className="mt-1 text-xs text-white/60">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container">
          <Card className="border-border/70 p-7 md:p-10">
            <LeadForm title="Work with us" subtitle="Careers, supplier registration, technology partnerships and procurement enquiries all start here." />
          </Card>
        </div>
      </section>
    </>
  );
}
