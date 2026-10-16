"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Upload, ShieldCheck, Globe2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pb-16 pt-40 text-white md:pb-24 md:pt-52">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -left-32 top-24 h-[28rem] w-[28rem] rounded-full bg-water/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-aqua/20 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <Badge variant="aqua" className="bg-aqua/15 text-aqua backdrop-blur">Integrated Water Security Platform</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl xl:text-6xl"
          >
            Safe Water.{" "}
            <span className="text-gradient">Smarter Systems.</span>{" "}
            Healthier Cities.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Africa Water Solutions Group delivers water testing, treatment plants, reverse osmosis,
            smart monitoring and infrastructure solutions for homes, hospitals, municipalities,
            industry and communities — from source to safe supply.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Request Project Assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="white" className="group">
              <Link href="/laboratory">
                <FlaskConical className="h-4 w-4 text-water" />
                Book a Water Test
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { icon: ShieldCheck, label: "Standards-led" },
              { icon: Globe2, label: "Pan-African" },
              { icon: Cpu, label: "Smart Water" },
              { icon: Upload, label: "Verified Data" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 backdrop-blur transition-colors hover:bg-white/10">
                <f.icon className="h-4 w-4 text-aqua" />
                <span className="text-xs font-medium text-white/85">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Animated dashboard card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-water/25 to-aqua/25 blur-2xl" />
          <div className="relative rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse-slow rounded-full bg-aqua" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Live Smart Water Demo</span>
              </div>
              <Badge className="border-aqua/30 bg-aqua/15 text-aqua">Online</Badge>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Tank Level", value: "87%", tone: "text-aqua" },
                { label: "Flow", value: "142 m³/h", tone: "text-water-light" },
                { label: "pH", value: "7.2", tone: "text-white" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-navy/40 p-3.5">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">{s.label}</p>
                  <p className={`mt-1 font-display text-lg font-bold ${s.tone}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* animated chart */}
            <div className="mt-4 rounded-xl bg-navy/40 p-4">
              <p className="mb-3 text-[10px] uppercase tracking-wider text-white/50">Network pressure — last 24h</p>
              <svg viewBox="0 0 320 80" className="w-full">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#14C7C0" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#14C7C0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,55 C30,50 45,32 70,38 C95,44 110,20 140,26 C170,32 185,48 215,40 C245,32 260,16 290,22 L320,18 L320,80 L0,80 Z"
                  fill="url(#chartFill)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                <motion.path
                  d="M0,55 C30,50 45,32 70,38 C95,44 110,20 140,26 C170,32 185,48 215,40 C245,32 260,16 290,22 L320,18"
                  fill="none" stroke="#14C7C0" strokeWidth="2.5" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="mt-4 space-y-2">
              {[
                { label: "Leak detected — Zone 4 DMA", time: "2 min ago", alert: true },
                { label: "Chlorine residual within SANS 241 range", time: "14 min ago", alert: false },
              ].map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.25 }}
                  className="flex items-center justify-between rounded-xl bg-navy/40 px-4 py-2.5"
                >
                  <span className="flex items-center gap-2 text-xs text-white/85">
                    <span className={`h-1.5 w-1.5 rounded-full ${n.alert ? "bg-gold" : "bg-aqua"}`} />
                    {n.label}
                  </span>
                  <span className="text-[10px] text-white/40">{n.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
