export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  href?: string;
}
export interface Seminar {
  id: string;
  title: string;
  status: string;
  description: string;
  focus: string;
  href?: string;
}
export interface Resource {
  title: string;
  category: string;
  description: string;
  href: string;
}
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  href: string;
  artifactUrl?: string;
}

// A single English content bundle; add a parallel locale bundle when needed.
// Publish only verified information. An absent URL intentionally renders no link.
export const site = {
  locale: "en",
  name: "CPS-HCPS Research",
  fullName: "Cyber-Physical and Human-Cyber-Physical Systems Research",
  tagline: "From Formal Foundations to Grounded Intelligence",
  github: "https://github.com/CPS-HCPS-Research",
  url: "https://cps-hcps-research.github.io/",
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "seminars", label: "Seminars" },
    { id: "resources", label: "Resources" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Human · Cyber · Physical",
    description:
      "Understanding, engineering, and verifying intelligent systems where computation, the physical world, and human agency meet.",
    primary: "Explore our research",
    secondary: "Discover the seminars",
    note: "Connecting rigorous models with real-world interaction.",
  },
  about: {
    eyebrow: "01 / About",
    title: "Three perspectives.\nOne connected system.",
    introduction:
      "CPS-HCPS Research brings together foundational theory, software engineering, and intelligent systems research to study how people, computation, and physical processes interact.",
    paragraphs: [
      "Cyber-Physical Systems (CPS) couple computation and communication with physical processes through sensing, control, and feedback. Their behavior depends on both discrete decisions and continuous dynamics.",
      "Human-Cyber-Physical Systems (HCPS) explicitly include people: their goals, decisions, abilities, and interactions. This perspective asks how human agency and computational autonomy can work together under real physical constraints.",
    ],
    question:
      "How can intelligent systems remain reliable, understandable, and verifiable as they interact with the world?",
  },
  research: {
    eyebrow: "02 / Research",
    title: "Foundations that reach\ninto the real world.",
    description:
      "Six connected directions, spanning mathematical models, engineering methods, and intelligence in context.",
  },
  seminars: {
    eyebrow: "03 / Seminars",
    title: "A shared space for\ncareful thinking.",
    description:
      "Building understanding through close reading, technical discussion, and reproducible examples. The seminar programme is in preparation.",
  },
  resources: {
    eyebrow: "04 / Projects & resources",
    title: "Knowledge, made open.",
    description:
      "Our GitHub organization is the home for public research and learning resources. Planned additions include modeling cases, verification experiments, project artifacts, and open tools.",
    note: "The resource collection is being established. The links below point to existing public destinations; research artifacts will be listed as they become available.",
  },
  publications: {
    eyebrow: "05 / Publications",
    title: "Research record",
    emptyTitle: "A place for work to come.",
    emptyDescription:
      "Verified publications and links to accompanying artifacts will be collected here. No publications are listed yet.",
  },
  contact: {
    eyebrow: "06 / Contact",
    title: "Continue the conversation.",
    description:
      "Explore the organization and follow the development of our public repositories on GitHub.",
    action: "Visit CPS-HCPS Research on GitHub",
  },
  footer: "Cyber-Physical and Human-Cyber-Physical Systems Research",
};

export const researchAreas: ResearchArea[] = [
  {
    id: "cps",
    title: "Cyber-Physical Systems",
    description:
      "Modeling and analyzing the feedback between software, networks, and physical processes, with attention to timing, control, and safety.",
    keywords: ["Hybrid systems", "Feedback & control"],
  },
  {
    id: "hcps",
    title: "Human-Cyber-Physical Systems",
    description:
      "Representing human goals, decisions, and behavior within coupled computational and physical systems.",
    keywords: ["Human agency", "System modeling"],
  },
  {
    id: "formal-methods",
    title: "Formal Methods and Verification",
    description:
      "Using logic, specifications, and mathematical reasoning to establish system properties and make assumptions explicit.",
    keywords: ["Specification", "Proof & verification"],
  },
  {
    id: "software-engineering",
    title: "Intelligent Software Engineering",
    description:
      "Studying AI-assisted requirements, programming, testing, and maintenance with reproducible evaluation of correctness and reliability.",
    keywords: ["AI for software", "Evidence & evaluation"],
  },
  {
    id: "collaboration",
    title: "Human-Machine Collaboration",
    description:
      "Investigating shared decision-making, oversight, and task coordination between people and autonomous systems.",
    keywords: ["Shared autonomy", "Human oversight"],
  },
  {
    id: "embodied-intelligence",
    title: "Embodied and Collaborative Intelligence",
    description:
      "Examining how agents perceive, act, and coordinate when intelligence is grounded in physical environments and interaction.",
    keywords: ["Perception & action", "Multi-agent systems"],
  },
];

export const seminars: Seminar[] = [
  {
    id: "book",
    title: "Book Reading Seminar",
    status: "In preparation",
    description:
      "A planned close reading of Logical Foundations of Cyber-Physical Systems, connecting formal models and proofs to cyber-physical behavior.",
    focus: "Initial reading · Logical Foundations of Cyber-Physical Systems",
    href: "https://github.com/CPS-HCPS-Research/Book-Reading-Seminar",
  },
  {
    id: "paper",
    title: "Paper Reading Seminar",
    status: "Planned",
    description:
      "A planned forum for examining research questions, methods, assumptions, and evidence across CPS, HCPS, and intelligent software systems.",
    focus: "Reading list and schedule to be announced",
  },
];

export const resources: Resource[] = [
  {
    title: "Organization repositories",
    category: "GitHub organization",
    description:
      "The entry point for public code, learning materials, and future research artifacts.",
    href: site.github,
  },
  {
    title: "Book Reading Seminar",
    category: "Learning repository · in preparation",
    description:
      "The public repository has been created. Reading materials and seminar records are not yet published.",
    href: "https://github.com/CPS-HCPS-Research/Book-Reading-Seminar",
  },
];

// Keep empty until bibliographic details and public links have been verified.
export const publications: Publication[] = [];
