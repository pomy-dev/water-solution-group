import {
  FlaskConical, Droplets, Recycle, Globe2, Waves, Cpu,
  Activity, MapPin, Briefcase, HeartPulse, Building2,
  Factory, Wheat, Hotel, GraduationCap, Server, HardHat,
  HandHeart, TestTube2, Gauge, LayoutDashboard, Map,
  ClipboardCheck, Radar, ArrowRight,
} from "lucide-react";

export const nav = [
  {
    label: "Solutions",
    href: "/solutions",
    mega: [
      {
        title: "Core Services",
        links: [
          { label: "Water Quality Testing", href: "/solutions#testing", icon: FlaskConical },
          { label: "Drinking Water Treatment", href: "/solutions#treatment", icon: Droplets },
          { label: "Wastewater & Reuse", href: "/solutions#wastewater", icon: Recycle },
          { label: "Desalination", href: "/solutions#desalination", icon: Waves },
          { label: "Boreholes & Groundwater", href: "/solutions#boreholes", icon: Globe2 },
        ],
      },
      {
        title: "Digital & Operations",
        links: [
          { label: "Smart Metering & IoT", href: "/smart-water", icon: Cpu },
          { label: "Leak Detection & NRW", href: "/solutions#nrw", icon: Radar },
          { label: "Operations & Maintenance", href: "/consulting#om", icon: ClipboardCheck },
          { label: "Emergency Water", href: "/solutions#emergency", icon: Activity },
          { label: "Laboratory & Quality", href: "/laboratory", icon: TestTube2 },
        ],
      },
    ],
  },
  { label: "Water Plants", href: "/water-plants" },
  { label: "Consulting", href: "/consulting" },
  {
    label: "Sectors",
    href: "/sectors",
    mega: [
      {
        title: "By Sector",
        links: [
          { label: "Municipalities & Smart Cities", href: "/sectors#municipal", icon: Building2 },
          { label: "Hospitals & Clinics", href: "/sectors#health", icon: HeartPulse },
          { label: "Mining & Industry", href: "/sectors#mining", icon: Factory },
          { label: "Agriculture", href: "/sectors#agriculture", icon: Wheat },
          { label: "Property & Estates", href: "/sectors#property", icon: Briefcase },
        ],
      },
      {
        title: "More Sectors",
        links: [
          { label: "Hotels & Resorts", href: "/sectors#hotels", icon: Hotel },
          { label: "Schools & Universities", href: "/sectors#education", icon: GraduationCap },
          { label: "Data Centres", href: "/sectors#datacentres", icon: Server },
          { label: "Construction", href: "/sectors#construction", icon: HardHat },
          { label: "Humanitarian & NGOs", href: "/sectors#humanitarian", icon: HandHeart },
        ],
      },
    ],
  },
  { label: "Smart Water", href: "/smart-water" },
  { label: "Laboratory", href: "/laboratory" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export const proofStats = [
  { value: 2.1, suffix: "bn", label: "people globally lacked safely managed drinking water in 2024", source: "WHO/UNICEF JMP 2025" },
  { value: 250, suffix: "+", label: "cities implementing the U4SSC smart-city KPI framework", source: "ITU U4SSC" },
  { value: 300, suffix: "k+", label: "smart water meters deployed by PUB Singapore — phase one", source: "PUB Singapore" },
  { value: 56, suffix: "%", label: "of monitored water bodies classified 'good' in 2023", source: "UN-Water 2024" },
];

export const problems = [
  { icon: FlaskConical, title: "Is my water safe?", text: "Book accredited laboratory testing with clear, interpreted results.", cta: "Book a Water Test", href: "/laboratory" },
  { icon: Droplets, title: "I need a treatment system", text: "From boreholes to reverse osmosis — engineered around your source water.", cta: "Design My System", href: "/water-plants" },
  { icon: HeartPulse, title: "I manage a hospital", text: "WASH assessments, risk mapping and continuity planning for healthcare.", cta: "WASH Assessment", href: "/sectors#health" },
  { icon: Building2, title: "I manage a city / utility", text: "Smart metering, NRW reduction and command-centre dashboards.", cta: "Municipal Diagnostic", href: "/smart-water" },
  { icon: Recycle, title: "I need wastewater reuse", text: "Treatment, polishing and compliant reuse for industry and municipalities.", cta: "Reuse Feasibility", href: "/solutions#wastewater" },
  { icon: Cpu, title: "I need smart monitoring", text: "IoT sensors, alerts, GIS and analytics across your network.", cta: "See the Platform", href: "/smart-water" },
];

export const services = [
  { icon: FlaskConical, title: "Water Quality Testing", text: "Structured sampling, chain-of-custody and accredited lab analysis — interpreted into plain-language actions." },
  { icon: Droplets, title: "Drinking Water Treatment", text: "Conventional trains, membranes, UV and disinfection designed for your actual source water." },
  { icon: Waves, title: "Desalination & RO", text: "Brackish and seawater reverse osmosis with energy recovery and responsible concentrate management." },
  { icon: Recycle, title: "Wastewater & Reuse", text: "Biological treatment, MBR, tertiary polishing and circular-water reuse programmes." },
  { icon: Cpu, title: "Smart Water & IoT", text: "Meters, tank levels, quality sensors, alarms and dashboards — from site to command centre." },
  { icon: Radar, title: "Leak Detection & NRW", text: "District metering, acoustic surveys and analytics that recover lost revenue." },
  { icon: HeartPulse, title: "Health & WASH", text: "Hospital water-risk assessments, Water Safety Plans and monitoring programmes." },
  { icon: Activity, title: "Emergency Water", text: "Containerised plants, rapid deployment and continuity support for outages and disasters." },
];

export const journey = [
  { step: "01", title: "Test", text: "Representative sampling and accredited laboratory analysis of your source water." },
  { step: "02", title: "Diagnose", text: "Engineering review of results against the applicable standard and your intended use." },
  { step: "03", title: "Design", text: "Process selection, mass balance and lifecycle costing — not a catalogue sale." },
  { step: "04", title: "Treat", text: "Procurement, construction supervision, commissioning and acceptance testing." },
  { step: "05", title: "Monitor", text: "Sensors, schedules and verified results tracked against baselines." },
  { step: "06", title: "Optimise", text: "Trend analysis, energy and chemical optimisation, planned upgrades." },
  { step: "07", title: "Report", text: "Compliance dossiers, impact metrics and decision-ready dashboards." },
];

export const sectors = [
  { id: "municipal", icon: Building2, title: "Municipalities & Smart Cities", text: "Non-revenue water, Water Safety Plans, command centres and U4SSC-aligned KPIs." },
  { id: "health", icon: HeartPulse, title: "Hospitals & Clinics", text: "Facility water-risk mapping, critical-point monitoring and WASH improvement plans." },
  { id: "mining", icon: Factory, title: "Mining & Industry", text: "Process water, dewatering monitoring, effluent compliance and reuse." },
  { id: "agriculture", icon: Wheat, title: "Agriculture", text: "Borehole treatment, irrigation reuse and livestock water quality programmes." },
  { id: "property", icon: Briefcase, title: "Property & Estates", text: "Safe storage, distribution hygiene and sub-metering for residential estates." },
  { id: "hotels", icon: Hotel, title: "Hotels & Resorts", text: "Guest-safe water, desalination for coastal properties and legionella risk control." },
  { id: "education", icon: GraduationCap, title: "Schools & Universities", text: "Potability testing, safe storage and learner WASH education." },
  { id: "datacentres", icon: Server, title: "Data Centres", text: "High-purity process water, cooling-water treatment and continuity planning." },
  { id: "humanitarian", icon: HandHeart, title: "Humanitarian & NGOs", text: "Rapid-deployment treatment, emergency monitoring and camp water security." },
];

export const projects = [
  {
    title: "Regional Hospital WASH Programme",
    sector: "Healthcare", location: "Southern Africa",
    tags: ["WASH Audit", "Critical-point Monitoring", "Water Safety Plan"],
    metrics: [
      { label: "Critical points monitored", value: "38" },
      { label: "Action-plan closure", value: "92%" },
      { label: "Sampling compliance", value: "100%" },
    ],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Coastal Municipal Desalination Feasibility",
    sector: "Municipal", location: "East Africa",
    tags: ["Seawater RO", "Feasibility", "Lifecycle Costing"],
    metrics: [
      { label: "Design flow", value: "15,000 m³/day" },
      { label: "Indicative recovery", value: "45%" },
      { label: "Phasing options", value: "3" },
    ],
    image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mine Water Treatment & Reuse",
    sector: "Mining", location: "Southern Africa",
    tags: ["Process Water", "Reuse", "Remote Monitoring"],
    metrics: [
      { label: "Water reused annually", value: "420 ML" },
      { label: "Sensor uptime", value: "99.2%" },
      { label: "Discharge compliance", value: "100%" },
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  },
];

export const impact = [
  { value: 120, suffix: "+", label: "facilities assessed & supported" },
  { value: 48, suffix: " ML", label: "wastewater reused for irrigation & industry" },
  { value: 340, suffix: "+", label: "technicians & operators trained" },
  { value: 27, suffix: "%", label: "average NRW reduction in pilot districts" },
];

export const testPackages = [
  { name: "Essential Potability", use: "Homes, offices, schools", points: "Core physical & chemical indicators plus indicator bacteria to applicable standards." },
  { name: "Borehole / Groundwater Plus", use: "Boreholes, farms, estates", points: "Hardness, iron/manganese, nitrate/fluoride and selected metals based on local risk." },
  { name: "Hospital / Facility Risk", use: "Clinics & hospitals", points: "Risk-based sampling across source, storage and critical distribution points." },
  { name: "Industrial / Process", use: "Factories, F&B, cooling", points: "Parameters linked to process specs, corrosion/scale risk and compliance." },
  { name: "Wastewater / Effluent", use: "Industrial & municipal", points: "Aligned to discharge, reuse requirements and process control." },
  { name: "Subscription Monitoring", use: "Any recurring-risk client", points: "Scheduled sampling, trend dashboard, exception alerts and annual review." },
];

export const faqs = [
  { q: "How do I book a water test?", a: "Choose your test package, enter your site details, pick a collection slot — and track your sample from collection through laboratory QA to your verified result." },
  { q: "Are your partner laboratories accredited?", a: "We only publish laboratories whose accreditation scope, certificate number and expiry we have independently verified for the relevant matrices and methods." },
  { q: "Do you design reverse osmosis plants?", a: "Yes — brackish, seawater and advanced reuse RO with source-specific pretreatment, post-treatment, concentrate management and performance monitoring. Every design starts with a validated water analysis." },
  { q: "What is a Water Safety Plan?", a: "A catchment-to-consumer risk management approach recommended by WHO: identify hazards, define controls, monitor them and verify independently — not just test final water." },
  { q: "Can you work under a PPP or BOOT model?", a: "Yes. We support project development, bankability packages, consortium building and long-term performance structures for large municipal and industrial schemes." },
];
