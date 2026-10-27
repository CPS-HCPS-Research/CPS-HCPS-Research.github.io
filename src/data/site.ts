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

// English content is the default. Keep the Chinese bundle in site.zh.ts aligned.
// Publish only verified information. An absent URL intentionally renders no link.
export const site = {
  locale: "en",
  name: "CPS-HCPS Research",
  fullName: "Cyber-Physical and Human-Cyber-Physical Systems Research",
  tagline: "From Formal Foundations to Grounded Intelligence",
  metaDescription:
    "CPS-HCPS Research studies AI-native cyber-physical and human-cyber-physical systems, connecting learning and reasoning with human oversight, physical feedback, and formal verification.",
  github: "https://github.com/CPS-HCPS-Research",
  url: "https://cps-hcps-research.github.io/",
  navigation: [
    { id: "home", label: "Home" },
    { id: "news", label: "News" },
    { id: "research", label: "Research" },
    { id: "seminars", label: "Seminars" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "resources", label: "Resources" },
    { id: "people", label: "People" },
    { id: "about", label: "About" },
  ],
  hero: {
    eyebrow: "Intelligent · Autonomous · AI-native",
    title: "From Formal\nFoundations to",
    emphasis: "Grounded Intelligence.",
    description:
      "We investigate how intelligent systems can reason, act, and adapt reliably in the real world, connecting AI-native design with formal foundations and human oversight.",
    primary: "Research & applications",
    secondary: "Explore collaboration",
    note: "Connecting rigorous models with real-world interaction.",
    principles: [
      { title: "Intelligent", description: "Perceive situations, reason about decisions, and learn from interaction." },
      { title: "Autonomous", description: "Execute within defined boundaries, with human supervision and intervention." },
      { title: "AI-native", description: "Design intelligence, system architecture, and assurance together from the outset." },
    ],
  },
  news: {
    eyebrow: "01 / News",
    title: "Latest from the group",
    emptyTitle: "Updates will appear here.",
    emptyDescription:
      "Research updates, seminar announcements, and group news will be shared here as they become available.",
  },
  about: {
    eyebrow: "08 / About",
    title: "Three perspectives.\nOne connected system.",
    introduction:
      "Our AI-native perspective brings sensing, knowledge, learning, reasoning, and action into system design from the outset. Human goals, decision authority, and verification are part of the architecture and its evolution.",
    paragraphs: [
      "Cyber-Physical Systems (CPS) couple computation and communication with physical processes through sensing, control, and feedback. Their behavior depends on both discrete decisions and continuous dynamics.",
      "Human-Cyber-Physical Systems (HCPS) explicitly include people: their goals, decisions, abilities, and interactions. This perspective asks how human agency and computational autonomy can work together under real physical constraints.",
      "We investigate how intelligent capabilities can learn from operational feedback and adapt within explicit limits. Our research connects formal models, runtime monitoring, and reproducible evaluation to examine what remains reliable as systems change.",
    ],
    question:
      "How can systems learn and adapt while remaining accountable to human goals and verifiable under physical constraints?",
  },
  research: {
    eyebrow: "02 / Research",
    title: "Towards dependable\nautonomous systems.",
    description:
      "How can learned behavior remain consistent with system goals as environments, models, and human decisions change? We connect formal guarantees, adaptive computation, and shared human control to investigate this question.",
  },
  applications: {
    title: "Application opportunities",
    description:
      "We invite joint research across three settings where intelligent decisions must lead to dependable action. These scenarios identify opportunities for collaboration and validation.",
    challengeLabel: "The challenge",
    valueLabel: "Research value",
    collaborationLabel: "Potential joint work",
    items: [
      {
        id: "embodied",
        title: "Embodied intelligence",
        examples: "Mobile robots · Facility inspection · Human–robot collaboration",
        challenge: "How can robots adapt to unfamiliar conditions while respecting task goals and physical constraints?",
        value: "Connect perception, planning, and action with verifiable task models, runtime checks, and human intervention to support dependable autonomous operation.",
        collaboration: "Simulation and robot evaluations, task benchmarks, and studies of failure recovery.",
      },
      {
        id: "industrial",
        title: "Intelligent industrial operations",
        examples: "Equipment monitoring · Fault diagnosis · Maintenance coordination",
        challenge: "How can diagnosis and planning support autonomous operations when equipment states and operating conditions change?",
        value: "Combine knowledge, data, and system constraints to study explainable decisions, early intervention, and reduced dependence on on-site manual work.",
        collaboration: "Operational scenarios, data and knowledge models, and prototype evaluation with domain partners.",
      },
      {
        id: "software",
        title: "Intelligent software systems",
        examples: "Software agents · Tool use · Collaborative development",
        challenge: "How can agents carry out extended workflows while preserving requirements, permissions, and software correctness?",
        value: "Develop methods for task specification, execution tracing, and continuous evaluation to make autonomous software work more controllable and reproducible.",
        collaboration: "Agent workflow studies, evaluation benchmarks, and reusable verification tools.",
      },
    ],
  },
  methods: {
    title: "Foundations and methods",
    description: "Six connected research directions provide the theoretical and engineering basis for these questions.",
  },
  seminars: {
    eyebrow: "03 / Seminars",
    title: "A shared space for\ncareful thinking.",
    description:
      "Connecting formal foundations with AI-native system design through book and paper reading, technical discussion, and reproducible examples. The seminar programme is in preparation.",
  },
  resources: {
    eyebrow: "06 / Resources",
    title: "Knowledge, made open.",
    description:
      "Our GitHub organization is the home for public research and learning resources. Planned additions include modeling cases, verification experiments, project artifacts, and open tools.",
    note: "The resource collection is being established. The links below point to existing public destinations; research artifacts will be listed as they become available.",
  },
  publications: {
    eyebrow: "04 / Publications",
    title: "Research record",
    emptyTitle: "A place for work to come.",
    emptyDescription:
      "Verified publications and links to accompanying artifacts will be collected here. No publications are listed yet.",
  },
  projects: {
    eyebrow: "05 / Projects",
    title: "Research in practice",
    emptyTitle: "Projects will be introduced here.",
    emptyDescription:
      "This space will collect research projects, their goals, and links to code and artifacts when details are ready to share.",
  },
  people: {
    eyebrow: "07 / People",
    title: "People behind the research",
    emptyTitle: "Meet the group, soon.",
    emptyDescription:
      "Member profiles and research interests will be added as details are confirmed.",
  },
  contact: {
    eyebrow: "Research with us",
    title: "Turn shared questions\ninto testable ideas.",
    description:
      "We welcome collaboration with researchers, engineering teams, and domain partners—from defining meaningful problems to evaluating methods and developing reusable research artifacts.",
    topics: ["Joint research and problem formulation", "Shared data, scenarios, and evaluation", "Research prototypes, open tools, and seminars"],
    action: "Explore our GitHub organization",
  },
  footer: "Cyber-Physical and Human-Cyber-Physical Systems Research",
};

export const researchAreas: ResearchArea[] = [
  {
    id: "cps",
    title: "Cyber-Physical Systems",
    description:
      "Modeling the interaction between learned components, control logic, and physical dynamics, with explicit timing, resource, and safety constraints.",
    keywords: ["Hybrid systems", "Physical constraints"],
  },
  {
    id: "hcps",
    title: "Human-Cyber-Physical Systems",
    description:
      "Making human goals, roles, and decision authority explicit in the design of adaptive systems that couple people, computation, and physical processes.",
    keywords: ["Human agency", "System architecture"],
  },
  {
    id: "formal-methods",
    title: "Formal Methods and Verification",
    description:
      "Combining specifications, proofs, and runtime monitoring to study the guarantees and limits of systems containing learned and adaptive components.",
    keywords: ["Specification", "Runtime assurance"],
  },
  {
    id: "software-engineering",
    title: "Intelligent Software Engineering",
    description:
      "Engineering AI capabilities across requirements, architecture, development, and operation, with traceable evidence and reproducible evaluation as software evolves.",
    keywords: ["AI-native software", "Lifecycle evaluation"],
  },
  {
    id: "collaboration",
    title: "Human-Machine Collaboration",
    description:
      "Investigating shared decision-making, task delegation, and human intervention, with explicit boundaries for the authority of autonomous systems.",
    keywords: ["Shared autonomy", "Human oversight"],
  },
  {
    id: "embodied-intelligence",
    title: "Embodied and Collaborative Intelligence",
    description:
      "Studying perception, reasoning, action, and learning as a feedback loop for agents that operate and collaborate in physical environments.",
    keywords: ["Learning through interaction", "Multi-agent systems"],
  },
];

export const seminars: Seminar[] = [
  {
    id: "book",
    title: "Book Reading",
    status: "In preparation",
    description:
      "A planned close reading of Logical Foundations of Cyber-Physical Systems, connecting formal models and proofs to cyber-physical behavior.",
    focus: "Initial reading · Logical Foundations of Cyber-Physical Systems",
    href: "https://github.com/CPS-HCPS-Research/Book-Reading-Seminar",
  },
  {
    id: "paper",
    title: "Paper Reading",
    status: "Planned",
    description:
      "A planned forum for examining AI-native architectures, learning-enabled control, formal assurance, and human–AI collaboration, with close attention to assumptions and evidence.",
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

export const ui = {
  brandSubtitle: "Research",
  homeLabel: "CPS-HCPS Research home",
  skipToContent: "Skip to content",
  navigation: "Main navigation",
  menu: "Menu",
  close: "Close",
  learnAbout: "Learn about CPS-HCPS Research",
  exploreConnections: "Explore the connections",
  researchTopics: "Research topics",
  readingWords: ["Read.", "Question.", "Connect."],
  readingProcess: "MODEL → REASON → UNDERSTAND",
  seminarLabel: "SEMINAR",
  visitSeminar: "Visit seminar repository",
  seminarDetails: "Details will be published here.",
  researchArtifact: "Research artifact",
  backToTop: "Back to top",
};

export const diagram = {
  label: "Intelligence by design",
  index: "FIG. 01",
  title: "An AI-native perspective on human-cyber-physical systems",
  description:
    "A conceptual architecture for AI-native HCPS. People contribute goals, decisions, and oversight. Cyber systems provide models, reasoning, knowledge, and learning. Physical systems provide sensing, action, dynamics, and constraints. Two-way links and operational feedback connect these capabilities, with specification, monitoring, and verification across the system.",
  human: "Human",
  cyber: "Cyber",
  physical: "Physical",
  goals: "Goals & decisions",
  humanNote: "Judgment & oversight",
  models: "Models & reasoning",
  cyberNote: "Knowledge & learning",
  sensing: "Sensing & action",
  physicalNote: "Dynamics & constraints",
  coreLabel: "AI-native",
  coreProcess: "Learn · Reason · Adapt",
  feedback: "Operational feedback",
  assurance: "Specify · Monitor · Verify",
  caption: "A research perspective on intelligence, human agency, and physical grounding.",
};
