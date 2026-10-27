import {
  site as englishSite,
  type ResearchArea,
  type Seminar,
  type Resource,
  type ui as englishUi,
  type diagram as englishDiagram,
} from "./site";

// Translate display content only; section IDs, URLs, and publication records stay shared.
export const site: typeof englishSite = {
  ...englishSite,
  locale: "zh-CN",
  name: "CPS-HCPS 研究组",
  fullName: "信息物理系统与人机物融合系统研究",
  tagline: "从形式化基础迈向扎根现实的智能",
  metaDescription:
    "CPS-HCPS 研究组面向智原生的信息物理系统与人机物融合系统，研究学习推理、人类监督、物理反馈与形式化验证的协同设计。",
  navigation: [
    { id: "home", label: "首页" },
    { id: "news", label: "动态" },
    { id: "research", label: "研究方向" },
    { id: "seminars", label: "研讨交流" },
    { id: "publications", label: "研究成果" },
    { id: "projects", label: "项目" },
    { id: "resources", label: "资源" },
    { id: "people", label: "成员" },
    { id: "about", label: "关于我们" },
  ],
  hero: {
    eyebrow: "智能化 · 无人化 · 智原生",
    title: "从形式化基础",
    emphasis: "迈向扎根现实的智能",
    description:
      "面向真实世界中的智能化与无人化需求，连接智原生设计、形式化基础与人类监督，研究智能系统如何可靠地推理、行动与适应变化。",
    primary: "研究方向与应用场景",
    secondary: "探索合作机会",
    note: "连接严谨模型与真实世界的交互。",
    principles: [
      { title: "智能化", description: "通过环境感知、知识推理与交互学习，形成面向任务的理解与决策能力。" },
      { title: "无人化", description: "在明确的任务与权限边界内自主执行，支持人类监督、干预与接管。" },
      { title: "智原生", description: "从设计之初统筹智能能力、系统架构与验证机制，贯穿系统全生命周期。" },
    ],
  },
  news: {
    eyebrow: "01 / 动态",
    title: "研究组动态",
    emptyTitle: "关注后续动态。",
    emptyDescription: "研究进展、研讨通知与团队动态将在这里陆续发布。",
  },
  about: {
    eyebrow: "08 / 关于我们",
    title: "三个视角，\n一个相互联系的系统。",
    introduction:
      "我们所关注的“智原生”（AI-native），是从系统设计之初，将感知、知识、学习、推理与行动作为相互联系的能力，并将人的目标、决策权限与验证机制融入架构及其演进过程。",
    paragraphs: [
      "信息物理系统（CPS）通过感知、控制与反馈，将计算、通信和物理过程紧密联系起来。系统行为同时受到离散决策与连续动态的影响。",
      "人机物融合系统（HCPS）进一步将人的目标、决策、能力与交互纳入系统，研究在真实物理约束下，人的自主性与计算系统的自主能力如何协同发挥作用。",
      "我们研究智能能力如何从运行反馈中学习、在明确边界内适应变化，并结合形式模型、运行时监测与可复现评估，考察系统演进过程中哪些性质仍然可靠。",
    ],
    question:
      "系统如何在学习与适应的同时，遵循人的目标，并在物理约束下保持可验证？",
  },
  research: {
    eyebrow: "02 / 研究方向",
    title: "迈向可信的\n自主系统。",
    description:
      "当环境、模型与人的决策持续变化，系统如何在自主学习与执行的同时遵循目标和约束？我们围绕这一问题，连接形式化保证、自适应计算与人机协同。",
  },
  applications: {
    title: "应用场景与合作机会",
    description:
      "面向智能决策需要转化为可靠行动的真实需求，我们希望与学术、工程及领域伙伴，在以下三类场景中共同开展研究与验证。",
    challengeLabel: "关键难题",
    valueLabel: "研究价值",
    collaborationLabel: "可开展的合作",
    items: [
      {
        id: "embodied",
        title: "具身智能",
        examples: "移动机器人 · 设施巡检 · 人机协作",
        challenge: "机器人如何在陌生或变化的环境中适应任务，同时遵循目标与物理约束？",
        value: "连接感知、规划与行动，研究可验证的任务模型、运行时检查与人工接管，为可靠的无人自主作业提供方法与证据。",
        collaboration: "仿真与机器人评测、任务基准，以及异常恢复与接管机制研究。",
      },
      {
        id: "industrial",
        title: "工业智能运维",
        examples: "设备监测 · 故障诊断 · 运维协同",
        challenge: "面对设备状态与工况变化，诊断和规划如何支持受约束的自主运行？",
        value: "融合知识、数据与系统约束，研究可解释决策与及时干预，探索降低现场人工依赖、提升运维连续性的方法。",
        collaboration: "领域场景与数据、知识和系统模型，以及面向实际需求的原型评测。",
      },
      {
        id: "software",
        title: "智能软件系统",
        examples: "软件智能体 · 工具使用 · 协同开发",
        challenge: "智能体如何在长流程任务中持续遵循需求、权限与软件正确性要求？",
        value: "研究任务规约、执行追踪与持续评估，使自主软件作业更可控、可追溯、可复现，为智原生软件工程建立方法基础。",
        collaboration: "智能体工作流研究、评测基准，以及可复用的验证工具。",
      },
    ],
  },
  methods: {
    title: "研究基础与方法",
    description: "六个相互联系的研究方向，为上述问题提供理论与工程支撑。",
  },
  seminars: {
    eyebrow: "03 / 研讨交流",
    title: "共同阅读，\n深入思考。",
    description:
      "通过图书研读、论文阅读、技术讨论与可复现实例，连接形式化基础与智原生系统设计。研讨活动正在筹备中。",
  },
  resources: {
    eyebrow: "06 / 资源",
    title: "让知识开放共享。",
    description:
      "GitHub 组织用于汇集公开的研究与学习资源。后续计划逐步加入建模案例、验证实验、项目产物与开源工具。",
    note:
      "资源集合正在建设中。以下链接指向已有公开页面，研究产物将在具备公开条件后陆续列出。",
  },
  publications: {
    eyebrow: "04 / 研究成果",
    title: "研究成果记录",
    emptyTitle: "记录未来的研究进展。",
    emptyDescription:
      "这里将收录经过核实的论文及配套研究产物链接，目前尚未列出论文。",
  },
  projects: {
    eyebrow: "05 / 项目",
    title: "研究与实践",
    emptyTitle: "项目介绍待更新。",
    emptyDescription:
      "这里将介绍研究项目及其目标，并在具备公开条件后提供代码与研究产物链接。",
  },
  people: {
    eyebrow: "07 / 成员",
    title: "研究团队",
    emptyTitle: "成员介绍待更新。",
    emptyDescription: "成员信息与研究兴趣将在确认后陆续补充。",
  },
  contact: {
    eyebrow: "合作研究",
    title: "把共同关心的问题，\n推进为可验证的方案。",
    description:
      "欢迎学术团队、工程团队与领域伙伴共同凝练有价值的问题，开展方法研究、场景验证与可复用研究产物建设。",
    topics: ["联合研究与问题凝练", "数据、场景与评测共建", "研究原型、开放工具与研讨交流"],
    action: "访问我们的 GitHub 组织",
  },
  footer: "信息物理系统与人机物融合系统研究",
};

export const researchAreas: ResearchArea[] = [
  {
    id: "cps",
    title: "信息物理系统",
    description:
      "研究学习组件、控制逻辑与物理动态之间的相互作用，在建模与分析中明确时序、资源与安全约束。",
    keywords: ["混成系统", "物理约束"],
  },
  {
    id: "hcps",
    title: "人机物融合系统",
    description:
      "在连接人、计算与物理过程的自适应系统中，从设计阶段明确人的目标、角色与决策权限。",
    keywords: ["人的自主性", "系统架构"],
  },
  {
    id: "formal-methods",
    title: "形式化方法与验证",
    description:
      "结合形式规约、证明与运行时监测，研究包含学习和自适应组件的系统能够获得哪些保证，以及保证的适用边界。",
    keywords: ["形式规约", "运行时保障"],
  },
  {
    id: "software-engineering",
    title: "智能软件工程",
    description:
      "将智能能力的设计贯穿需求、架构、开发与运行，并通过可追溯证据和可复现评估，考察软件演进中的正确性与可靠性。",
    keywords: ["智原生软件", "全生命周期评估"],
  },
  {
    id: "collaboration",
    title: "人机协同",
    description:
      "研究人与自主系统之间的共同决策、任务委托与人工干预，并明确自主系统的权限边界。",
    keywords: ["共享自主权", "人工监督"],
  },
  {
    id: "embodied-intelligence",
    title: "具身与协同智能",
    description:
      "围绕感知、推理、行动与学习构成的反馈闭环，研究智能体在物理环境中的交互与协同机制。",
    keywords: ["交互中学习", "多智能体系统"],
  },
];

export const seminars: Seminar[] = [
  {
    id: "book",
    title: "图书研读",
    status: "筹备中",
    description:
      "计划精读《Logical Foundations of Cyber-Physical Systems》，探讨形式模型与证明如何连接信息物理系统的行为。",
    focus: "首本研读教材 · Logical Foundations of Cyber-Physical Systems",
    href: "https://github.com/CPS-HCPS-Research/Book-Reading-Seminar",
  },
  {
    id: "paper",
    title: "论文研读",
    status: "规划中",
    description:
      "计划围绕智原生架构、学习驱动的控制、形式化保障与人智协同，讨论论文的研究问题、方法、假设与证据。",
    focus: "阅读清单与日程待公布",
  },
];

export const resources: Resource[] = [
  {
    title: "组织公开仓库",
    category: "GitHub 组织",
    description: "公开代码、学习资料与后续研究产物的统一入口。",
    href: englishSite.github,
  },
  {
    title: "图书研讨会",
    category: "学习仓库 · 筹备中",
    description: "公开仓库已建立，研读材料与研讨记录尚未发布。",
    href: "https://github.com/CPS-HCPS-Research/Book-Reading-Seminar",
  },
];

export const ui: typeof englishUi = {
  brandSubtitle: "研究组",
  homeLabel: "CPS-HCPS 研究组首页",
  skipToContent: "跳至正文",
  navigation: "主导航",
  menu: "菜单",
  close: "关闭",
  learnAbout: "了解 CPS-HCPS 研究组",
  exploreConnections: "了解我们的研究",
  researchTopics: "研究主题",
  readingWords: ["阅读。", "追问。", "融通。"],
  readingProcess: "建模 → 推理 → 理解",
  seminarLabel: "研讨会",
  visitSeminar: "访问研讨会仓库",
  seminarDetails: "详细信息将在这里公布。",
  researchArtifact: "研究产物",
  backToTop: "返回顶部",
};

export const diagram: typeof englishDiagram = {
  label: "让智能融入系统设计",
  index: "图 01",
  title: "智原生的人机物融合系统研究视角",
  description:
    "智原生人机物融合系统的概念架构。人提供目标、决策与监督；信息系统提供模型、推理、知识与学习；物理系统提供感知、行动、动态与约束。三者通过双向联系与运行反馈协同，规约、监测与验证贯穿整个系统。",
  human: "人",
  cyber: "信息",
  physical: "物理",
  goals: "目标与决策",
  humanNote: "判断与监督",
  models: "建模与推理",
  cyberNote: "知识与学习",
  sensing: "感知与行动",
  physicalNote: "动态与约束",
  coreLabel: "智原生",
  coreProcess: "学习 · 推理 · 适应",
  feedback: "运行反馈",
  assurance: "规约 · 监测 · 验证",
  caption: "连接智能能力、人的自主性与物理基础的研究视角。",
};
