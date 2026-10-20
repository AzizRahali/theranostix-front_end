import { FeatureItem, HeadingPart, Link } from '../models/landing.model';

/**
 * Single source of truth for all site copy, grouped by section.
 * Values are `as const` so they stay immutable and fully typed at use sites.
 */

const BRAND_NAME = 'THERANOSTIX';

const SECTION_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'THERION', href: '#therion' },
  { label: 'Vision', href: '#vision' },
] satisfies Link[];

const CONTACT_EMAIL = {
  label: 'wally@theranostixrobot.com',
  href: 'mailto:wally@theranostixrobot.com',
} satisfies Link;

export const NAV = {
  brand: BRAND_NAME,
  links: SECTION_LINKS,
  cta: { label: 'Contact us', href: '#contact' } satisfies Link,
} as const;

export const HERO = {
  eyebrow: 'Our mission',
  heading: [
    { text: 'Transforming the ' },
    { text: 'future', accent: true },
    { text: ' of nuclear medicine' },
  ] satisfies HeadingPart[],
  lede: 'Innovative robotic solutions that make the preparation and administration of radioactive cancer drugs safer, more precise, and more efficient.',
  cta: { label: 'Discover THERION', href: '#therion' } satisfies Link,
  imageAlt:
    'Render of a humanoid robot with exposed red joint actuators, above a cutaway view of a robotic actuator module.',
  hud: { top: 'THERANOSTIX // ROBOTICS', bottom: 'Autonomous · Remote' },
} as const;

export const ABOUT = {
  eyebrow: 'About us',
  heading: [
    { text: 'Robotics for ' },
    { text: 'safer', accent: true },
    { text: ' cancer therapies' },
  ] satisfies HeadingPart[],
  paragraphs: [
    'At THERANOSTIX, we develop innovative robotic solutions to make the preparation and administration of radioactive drugs for cancer treatment safer, more precise, and more efficient.',
    'Our ambition goes beyond building a robotic injector. We are developing autonomous, remotely operated solutions to support healthcare professionals and transform nuclear medicine protocols through automation, standardization, and improved traceability.',
  ],
} as const;

export const APPROACH = {
  eyebrow: 'Innovation',
  heading: [
    { text: 'Autonomous, ' },
    { text: 'remotely operated', accent: true },
    { text: ' nuclear medicine' },
  ] satisfies HeadingPart[],
  lede: 'Three principles guide everything we build for nuclear medicine teams.',
  pillars: [
    {
      number: '01',
      title: 'Automation',
      description:
        'Autonomous, remotely operated preparation and administration of radioactive drugs, keeping professionals out of the radiation path.',
    },
    {
      number: '02',
      title: 'Standardization',
      description:
        'Repeatable protocols that make nuclear medicine procedures safer, more reliable and consistent from one dose to the next.',
    },
    {
      number: '03',
      title: 'Traceability',
      description:
        'Improved traceability of every preparation and administration step, in support of safer, more reliable care.',
    },
  ] satisfies FeatureItem[],
} as const;

export const THERION = {
  eyebrow: 'Our first robot',
  heading: [{ text: 'Meet ' }, { text: 'THERION', accent: true }] satisfies HeadingPart[],
  status: 'Design phase completed',
  intro:
    'We are proud to have completed the design phase of THERION, our first robot dedicated to the preparation and administration of radioactive drugs used in cancer treatment. This achievement marks an important milestone for THERANOSTIX and brings us one step closer to safer, more reliable, and more standardized nuclear medicine procedures.',
  capabilities: [
    'Automated preparation',
    'Precise dosing',
    'Enhanced traceability',
    'Remote operation',
  ],
  benefitsTitle: 'THERION is designed to help',
  benefits: [
    'Reduce radiation exposure',
    'Minimize human error',
    'Optimize the use of costly radiopharmaceuticals',
    'Improve clinical workflow efficiency',
  ],
  imageAlt: 'Cutaway render of a compact robotic actuator module with illuminated internals.',
  hud: { top: 'THERION // 01', bottom: 'Design phase complete' },
} as const;

export const VISION = {
  eyebrow: 'Our vision',
  heading: [
    { text: 'Shaped by the ' },
    { text: 'hot lab', accent: true },
  ] satisfies HeadingPart[],
  paragraphs: [
    'Our solutions are shaped by the real-world expertise of nuclear medicine technologists working in hot labs. Their daily experience, practical insights, and understanding of current challenges play a key role in optimizing our technology.',
    'By working closely with these professionals, we are developing solutions that respond to clinical needs and integrate naturally into existing nuclear medicine workflows.',
  ],
} as const;

export const CONTACT = {
  eyebrow: 'Contact',
  heading: [
    { text: "Let's shape the " },
    { text: 'future', accent: true },
    { text: ' of nuclear medicine together' },
  ] satisfies HeadingPart[],
  text: 'Interested in THERION, a partnership or our work? Get in touch with the team.',
  email: CONTACT_EMAIL,
  cta: { label: 'Get in touch', href: CONTACT_EMAIL.href } satisfies Link,
} as const;

export const FOOTER = {
  brand: BRAND_NAME,
  tagline: 'Transforming the future of nuclear medicine.',
  links: SECTION_LINKS,
  email: CONTACT_EMAIL,
} as const;
