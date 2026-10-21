import { ExpertiseArea, FeatureItem, HeadingPart, Link } from '../models/landing.model';

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
  { label: 'Consulting', href: '#consulting' },
] satisfies Link[];

const CONTACT_EMAIL = {
  label: 'wally@theranostixrobot.com',
  href: 'mailto:wally@theranostixrobot.com',
} satisfies Link;

export const NAV = {
  brand: BRAND_NAME,
  links: SECTION_LINKS,
  cta: { label: 'Contact us', href: '#contact' } satisfies Link,
  email: CONTACT_EMAIL,
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

export const CONSULTING = {
  eyebrow: 'Theranostix Consulting',
  heading: [
    { text: 'Your partner in nuclear medicine ' },
    { text: 'infrastructure,', accent: true },
    { text: ' expertise & innovation' },
  ] satisfies HeadingPart[],
  paragraphs: [
    'Theranostix Consulting supports hospitals, laboratories, and nuclear medicine centers in the development, construction, and optimization of hot labs and radiopharmaceutical facilities. From initial project planning to operational implementation, we provide comprehensive guidance to help our partners build safe, efficient, and compliant facilities aligned with their clinical ambitions and technical requirements.',
    'By combining regulatory expertise, technical consulting, staff training, and access to a worldwide network of industry leaders, Theranostix Consulting helps healthcare institutions turn complex projects into successful, sustainable operations.',
  ],
  expertiseTitle: 'Our areas of expertise',
  areas: [
    {
      number: '01',
      title: 'Regulatory Compliance & Project Development',
      summary:
        'We guide our clients through the regulatory and technical requirements involved in establishing a new hot lab, helping them navigate applicable national regulations and international recommendations, including those of the International Atomic Energy Agency (IAEA) and the European Association of Nuclear Medicine (EANM).',
      services: [
        'Regulatory guidance and feasibility studies',
        'Hot lab planning, design, and construction support',
        'Radiation protection and safety requirements',
        'Facility qualification and operational readiness',
        'Guidance on quality management and applicable GMP requirements',
      ],
    },
    {
      number: '02',
      title: 'Hot Lab Design, Equipment & Technology Integration',
      summary:
        'We connect healthcare institutions with leading technology providers and specialized professionals to develop facilities adapted to their specific needs, workflows, and future growth.',
      services: [
        'Hot lab equipment and radioactive material handling solutions',
        'PET and SPECT imaging systems and scanners',
        'Cyclotrons and radiopharmaceutical production technologies',
        'Specialized architects, engineers, and radiation protection experts',
        'Equipment selection, supplier coordination, and workflow optimization',
      ],
    },
    {
      number: '03',
      title: 'Protocol Development & Operational Excellence',
      summary:
        'We assist teams in establishing robust operational procedures that promote safety, quality, traceability, and efficiency throughout the radiopharmaceutical workflow.',
      services: [
        'Development and optimization of standard operating procedures (SOPs)',
        'Radiopharmaceutical preparation and handling protocols',
        'Quality control and quality assurance processes',
        'Radiation safety and radioactive waste management procedures',
        'Support for documentation, validation, and continuous improvement',
      ],
    },
    {
      number: '04',
      title: 'Professional Training & Knowledge Transfer',
      summary:
        'Our training programs are designed to strengthen the expertise of medical, technical, radiopharmacy, and laboratory teams, supporting the safe and effective operation of nuclear medicine facilities.',
      services: [
        'Staff training in hot lab operations and radiation protection',
        'Training on equipment use and operational procedures',
        'Radiopharmaceutical handling and quality control practices',
        'Protocol implementation and compliance awareness',
        'Knowledge transfer tailored to each facility’s equipment, activities, and level of expertise',
      ],
    },
    {
      number: '05',
      title: 'Global Industry Network & Strategic Partnerships',
      summary:
        'Through our international network, we facilitate connections between healthcare institutions and leading manufacturers, technology providers, and specialists across the nuclear medicine industry.',
      services: [
        'International cyclotron manufacturers and suppliers',
        'Radiopharmaceutical manufacturers and production partners',
        'Hot lab equipment and medical imaging technology leaders',
        'Specialized architectural, engineering, and technical consultants',
        'Support in identifying suitable technologies, suppliers, and potential strategic partnerships',
      ],
    },
  ] satisfies ExpertiseArea[],
} as const;

export const CONCEPT = {
  eyebrow: 'Consulting mission',
  heading: [
    { text: 'From ' },
    { text: 'concept', accent: true },
    { text: ' to operation' },
  ] satisfies HeadingPart[],
  paragraphs: [
    'At Theranostix Consulting, we believe that successful nuclear medicine facilities require more than infrastructure alone. They require the right expertise, reliable technologies, well-trained teams, robust protocols, and a clear understanding of regulatory expectations.',
    'Our mission is to help healthcare institutions build and operate high-quality nuclear medicine facilities by bringing together the knowledge, technologies, and international partnerships needed at every stage of their projects.',
  ],
  requirementsTitle: 'What a successful facility requires',
  requirements: [
    'The right expertise',
    'Reliable technologies',
    'Well-trained teams',
    'Robust protocols',
    'Regulatory clarity',
  ],
} as const;

export const CONTACT = {
  eyebrow: 'Contact',
  heading: [
    { text: "Let's shape the " },
    { text: 'future', accent: true },
    { text: ' of nuclear medicine together' },
  ] satisfies HeadingPart[],
  text: 'Interested in THERION, our consulting services or a partnership? Get in touch with the team.',
  email: CONTACT_EMAIL,
  cta: { label: 'Get in touch', href: CONTACT_EMAIL.href } satisfies Link,
} as const;

export const FOOTER = {
  brand: BRAND_NAME,
  tagline: 'Transforming the future of nuclear medicine.',
  links: SECTION_LINKS,
  email: CONTACT_EMAIL,
} as const;
