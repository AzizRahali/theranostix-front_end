import {
  AskFigure,
  ChartBar,
  CtaLink,
  EdgeColumn,
  FeatureItem,
  FlowNode,
  MiniStat,
  Pillar,
  Readout,
  StatCard,
} from '../models/landing.model';

/**
 * Single source of truth for all landing-page copy.
 * Grouped by section; every array/object is `as const` so the values stay
 * immutable and fully typed at the point of use.
 */

export const BRAND = {
  name: 'THERANOSTIX.',
  navStatus: 'PROTOTYPE IN DEVELOPMENT',
  requestDeckHref: '#ask',
} as const;

export const HERO = {
  eyebrow: 'NUCLEAR MEDICINE · AUTONOMOUS ROBOTICS',
  title: 'THERANOSTIX.',
  subtitle:
    'The first autonomous, fully remote robotic system for the safe injection of radioactive cancer therapies.',
  ctas: [
    { label: 'Request Investor Deck', href: '#ask', variant: 'primary' },
    { label: 'See the Vision', href: '#vision', variant: 'ghost' },
  ] satisfies CtaLink[],
} as const;

export const PROBLEM = {
  eyebrow: 'The Problem',
  heading: 'Manual handling has not kept pace with the therapies it delivers.',
  lede: 'Every dose of a radioactive cancer therapy still moves through infrastructure — and staff — built for a slower, heavier era of nuclear medicine.',
  stats: [
    {
      figure: '3,000–5,000 kg',
      label: 'Weight of a shielded hot lab',
      description:
        'Reinforced flooring and a dedicated room, before a single dose is prepared.',
    },
    {
      figure: '€200K–300K',
      label: 'Cost to install one lab',
      description: 'Capital committed to shielding and infrastructure, not to care.',
    },
    {
      figure: '€80K–100K',
      label: 'Value of one dose at risk',
      description: 'A single handling error can void an entire radioactive therapy dose.',
    },
    {
      figure: 'Hand-prepared',
      label: 'Staff exposure, every dose',
      description:
        'Radiation exposure and musculoskeletal strain accumulate with each dose prepared and injected manually.',
    },
  ] satisfies StatCard[],
} as const;

export const SOLUTION = {
  eyebrow: 'The Solution',
  heading:
    'A compact, autonomous lab that removes the operator from the radiation path.',
  lede: 'Four integrated systems replace the shielded room, the manual syringe and the paper log.',
  features: [
    {
      number: '01',
      title: 'Remote Preparation Module',
      description:
        'Isotopes are drawn, measured and dispensed without a hand ever entering the hot cell.',
    },
    {
      number: '02',
      title: 'Robotic Injector',
      description:
        'Precision delivery of the prepared dose directly to the patient, under continuous monitoring.',
    },
    {
      number: '03',
      title: 'Smart Operator Interface',
      description:
        'A single clinician oversees the full sequence from outside the shielding — no lead apron required.',
    },
    {
      number: '04',
      title: 'Traceability & Safety Logs',
      description:
        'Every dose and every step is timestamped and auditable, built for regulators from day one.',
    },
  ] satisfies FeatureItem[],
  flow: [
    { icon: 'isotopes', label: 'Isotopes' },
    { icon: 'hot-lab', label: 'Hot Lab' },
    { icon: 'injector', label: 'Injector' },
    { icon: 'scanner', label: 'Scanner' },
  ] satisfies FlowNode[],
} as const;

export const MARKET = {
  eyebrow: 'Market Opportunity',
  heading: 'Nuclear medicine is entering a decade of compounding growth.',
  readout: { label: 'Market size by 2030', value: '€34.5B' } satisfies Readout,
  miniStats: [
    { value: '>8%', label: 'CAGR, 2022–2030' },
    { value: '19M+', label: 'New cancer cases per year' },
  ] satisfies MiniStat[],
  bars: [
    { value: '€10B', caption: '€10B · 2022', heightPct: 30, emphasis: false },
    { value: '€34.5B', caption: '€34.5B · 2030', heightPct: 100, emphasis: true },
  ] satisfies ChartBar[],
  chartCaption: 'Global nuclear medicine market, projected',
} as const;

export const VISION = {
  eyebrow: 'Why Now',
  heading: 'Three shifts are converging to make this the moment.',
  pillars: [
    {
      index: '01',
      title: 'Robotics',
      description:
        'Precision robotics has matured enough for medical-grade, radiation-safe deployment at hospital scale.',
    },
    {
      index: '02',
      title: 'Protocol Innovation',
      description:
        'New radioligand therapies demand faster, more precise and more repeatable preparation and delivery.',
    },
    {
      index: '03',
      title: 'Safety Standardization',
      description:
        'Regulators and hospitals are converging on stricter exposure and traceability standards — ahead of the technology built to meet them.',
    },
  ] satisfies Pillar[],
  closing:
    'Theranostix sits at the intersection of all three: a paradigm shift from manual, room-scale handling to autonomous, protocol-driven delivery.',
} as const;

export const EDGE = {
  eyebrow: 'Competitive Edge',
  heading: 'Built to move faster than the incumbents.',
  columns: [
    {
      tone: 'legacy',
      title: 'Legacy Suppliers',
      summary:
        'Decades-old shielding and automation businesses, built around static, room-scale hot labs.',
      points: [
        'Hardware-first, not protocol-first',
        'Room-scale, fixed installations',
        'Slow, multi-year release cycles',
      ],
      names: 'LemerPax · Tema Sinergie · Comecer',
    },
    {
      tone: 'us',
      title: 'Theranostix',
      summary:
        'A specialized R&D team building a single autonomous system from the ground up.',
      points: [
        'Software-defined and protocol-first',
        'Compact, fully autonomous footprint',
        'Built to evolve with each new therapy',
      ],
    },
  ] satisfies EdgeColumn[],
} as const;

export const ASK = {
  eyebrow: 'Traction & Ask',
  heading: 'From working prototype to regulatory-ready system.',
  statusChip: 'Prototype in active development',
  lede: "We're raising to finalize the prototype and open the regulatory pathway toward clinical deployment.",
  figures: [
    { value: '€155K', label: 'Raising', style: 'readout' },
    { value: '€5M', label: 'Long-term revenue target', style: 'plain' },
  ] satisfies AskFigure[],
  detail:
    'Funds finalize the autonomous injector prototype and carry it through the regulatory pathway required for hospital deployment.',
  ctas: [
    { label: 'Request Investor Deck', href: '#ask', variant: 'primary' },
    { label: 'Book a Call', href: '#ask', variant: 'ghost' },
  ] satisfies CtaLink[],
} as const;

export const FOOTER = {
  mark: 'THERANOSTIX.',
  credit: 'Created by Walid Rahali',
  contact: '[INVESTOR RELATIONS EMAIL]',
} as const;
