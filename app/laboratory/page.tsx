"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { testPackages } from "@/lib/data";
import { toast } from "sonner";
import {
  CheckCircle2, ChevronRight, ChevronLeft, Loader2, FlaskConical,
  Truck, CalendarClock, FileCheck2, Droplet,
} from "lucide-react";

const steps = ["Package", "Site", "Schedule", "Confirm"];

export default function LaboratoryPage() {
  const [step, setStep] = useState(0);
  const [pkg, setPkg] = useState<string | null>(null);
  const [source, setSource] = useState("");
  const [location, setLocation] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [orderId, setOrderId] = useState("");

  const canNext =
    (step === 0 && pkg) ||
    (step === 1 && source && location.trim()) ||
    (step === 2 && slot) ||
    true;

  const submit = () => {
    if (!name.trim() || !phone.trim()) {
      toast.error("Please provide your name and phone number to confirm the booking.");
      return;
    }
    setLoading(true);
    toast.info("Processing booking & reserving your sample kit…");
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setOrderId(`AWSG-${Math.floor(100000 + Math.random() * 900000)}`);
      toast.success("Booking confirmed! Your sample kit instructions have been sent by SMS & email.");
    }, 2200);
  };

  return (
    <>
      <PageHero
        eyebrow="Laboratory & Quality"
        title="Good water decisions begin with good data"
        subtitle="Structured sampling, chain-of-custody, accredited laboratory analysis and clear reporting — so you can understand your water risk and act on it with confidence."
        chips={["Book a Test", "Chain of Custody", "Partner Labs", "Results Portal", "Example Report"]}
      />

      {/* Packages */}
      <section className="section-pad bg-mesh">
        <div className="container">
          <SectionHeading eyebrow="Test packages" title="Choose the package that matches your risk" subtitle="Every recommendation states the standard, the lab, the methods and the turnaround — before you pay." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testPackages.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.06} className="h-full">
                <Card
                  className={`card-hover h-full cursor-pointer border-2 bg-white ${pkg === p.name ? "border-water shadow-lg shadow-water/15" : "border-transparent"}`}
                  onClick={() => { setPkg(p.name); toast.info(`Selected: ${p.name}`); }}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-water/10 text-water">
                        <FlaskConical className="h-5 w-5" />
                      </span>
                      {pkg === p.name && <Badge variant="aqua"><CheckCircle2 className="h-3 w-3" /> Selected</Badge>}
                    </div>
                    <h3 className="mt-3 font-display text-base font-semibold text-navy">{p.name}</h3>
                    <p className="mt-0.5 text-xs font-medium text-water">{p.use}</p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.points}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking wizard */}
      <section className="section-pad bg-white">
        <div className="container grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Book online</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl">Track your sample end-to-end</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Collection → laboratory receipt → analysis → QA review → verified result release.
              Results are presented as within-guideline, attention or action-required only where
              the underlying standard and professional interpretation support that status.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Truck, t: "Certified collection or approved drop-off" },
                { icon: CalendarClock, t: "Unique sample ID with live status tracking" },
                { icon: FileCheck2, t: "QA-approved results with method, units and limits" },
                { icon: Droplet, t: "One-click consultation or treatment design from your result" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3.5 rounded-xl border border-border/70 bg-mesh px-4 py-3.5">
                  <f.icon className="h-5 w-5 text-water" />
                  <span className="text-sm font-medium text-navy/85">{f.t}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <Card className="border-border/70">
              <CardContent className="p-7 md:p-9">
                {done ? (
                  <div className="py-8 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-aqua/15">
                      <CheckCircle2 className="h-8 w-8 text-aqua" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold text-navy">Booking confirmed</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Order reference <span className="font-mono font-semibold text-water">{orderId}</span>
                    </p>
                    <div className="mx-auto mt-6 max-w-sm space-y-2.5 text-left">
                      {[
                        `Package: ${pkg}`,
                        `Source: ${source}`,
                        `Location: ${location}`,
                        `Collection slot: ${slot}`,
                      ].map((d) => (
                        <p key={d} className="flex items-center gap-2.5 rounded-lg bg-mesh px-4 py-2.5 text-sm text-navy/80">
                          <CheckCircle2 className="h-4 w-4 text-aqua" /> {d}
                        </p>
                      ))}
                    </div>
                    <p className="mt-6 text-xs text-muted-foreground">
                      Track your sample in the Results Portal using your reference number. Preparation
                      instructions have been sent by SMS and email.
                    </p>
                    <Button className="mt-6" onClick={() => { setDone(false); setStep(0); setPkg(null); }}>
                      Book Another Test
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Stepper */}
                    <div className="mb-8 flex items-center gap-2">
                      {steps.map((s, i) => (
                        <div key={s} className="flex flex-1 items-center gap-2">
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                            i < step ? "bg-aqua text-white" : i === step ? "bg-water text-white" : "bg-muted text-muted-foreground"
                          }`}>
                            {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                          </span>
                          <span className={`hidden text-xs font-medium sm:block ${i === step ? "text-navy" : "text-muted-foreground"}`}>{s}</span>
                          {i < steps.length - 1 && <span className={`h-px flex-1 ${i < step ? "bg-aqua" : "bg-border"}`} />}
                        </div>
                      ))}
                    </div>

                    {step === 0 && (
                      <div className="space-y-4">
                        <Label>Select a test package</Label>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {testPackages.map((p) => (
                            <button
                              key={p.name}
                              type="button"
                              onClick={() => setPkg(p.name)}
                              className={`rounded-xl border-2 p-3.5 text-left text-sm font-medium transition-all ${
                                pkg === p.name ? "border-water bg-water/5 text-navy" : "border-border text-muted-foreground hover:border-water/40"
                              }`}
                            >
                              {p.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <Label>Water source</Label>
                          <Select value={source} onValueChange={setSource}>
                            <SelectTrigger><SelectValue placeholder="Select source" /></SelectTrigger>
                            <SelectContent>
                              {["Borehole", "Municipal tap", "River / Dam", "Rainwater tank", "Well / Spring", "Wastewater / Effluent"].map((s) => (
                                <SelectItem key={s} value={s}>{s}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <Label>Site location</Label>
                          <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Suburb, City, Country" />
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <Label>Preferred collection slot</Label>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {["Mon–Fri, 08:00–12:00", "Mon–Fri, 13:00–17:00", "Saturday, 08:00–12:00", "Approved drop-off point"].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setSlot(s)}
                              className={`rounded-xl border-2 p-3.5 text-left text-sm font-medium transition-all ${
                                slot === s ? "border-water bg-water/5 text-navy" : "border-border text-muted-foreground hover:border-water/40"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <Label>Full name</Label>
                          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                        </div>
                        <div className="space-y-1.5">
                          <Label>Phone / WhatsApp</Label>
                          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+263 77 000 0000" />
                        </div>
                      </div>
                    )}

                    <div className="mt-8 flex items-center justify-between">
                      <Button variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0 || loading}>
                        <ChevronLeft className="h-4 w-4" /> Back
                      </Button>
                      {step < 3 ? (
                        <Button onClick={() => canNext && setStep((s) => s + 1)} disabled={!canNext}>
                          Continue <ChevronRight className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button onClick={submit} disabled={loading}>
                          {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Confirming…</>) : (<>Confirm Booking <CheckCircle2 className="h-4 w-4" /></>)}
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
