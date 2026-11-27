import type {
  ActionLink,
  AboutHighlight,
  Experience,
  MindsetPrinciple,
  NavigationLink,
  ProjectHighlight,
  PortfolioProfile,
  SkillArea,
  Tool,
} from "../types/portfolio";

export const navigationLinks: NavigationLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech", href: "#tech" },
  { label: "Tools", href: "#tools" },
  { label: "Mindset", href: "#mindset" },
  { label: "Contact", href: "#contact" },
];

export const profile: PortfolioProfile = {
  name: "Pamella Fernandes",
  role: "Frontend Software Engineer",
  headline: "Building thoughtful digital experiences through frontend engineering.",
  introduction:
    "I'm a Frontend Software Engineer with 4+ years of experience building web and mobile applications with React, React Native, and TypeScript. I turn complex business requirements into reliable, maintainable products, with a focus on collaboration, ownership, and continuous improvement.",
  about:
    "I enjoy working at the intersection of technology, product needs, and people — understanding the problem, contributing to technical decisions, and delivering solutions that make everyday workflows better.",
  email: "pamellafernandes117@gmail.com",
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/devpamellafernandes/",
    github: "https://github.com/pamellafernandes",
  },
};

export const aboutHighlights: AboutHighlight[] = [
  {
    id: "experience",
    symbol: "</>",
    title: "4+ Years",
    description: "building web and mobile applications",
  },
  {
    id: "platforms",
    symbol: "↔",
    title: "Web + Mobile",
    description: "React and React Native experiences",
  },
  {
    id: "product",
    symbol: "✦",
    title: "Product-minded",
    description: "thoughtful, maintainable user experiences",
  },
];

export const heroActions: ActionLink[] = [
  {
    label: "Connect on LinkedIn ↗",
    href: profile.socialLinks.linkedIn,
    variant: "primary",
  },
  {
    label: "View GitHub ↗",
    href: profile.socialLinks.github,
    variant: "secondary",
  },
];

export const experiences: Experience[] = [
  {
    id: "localiza",
    role: "Frontend Software Engineer",
    company: "Blite Tecnologia / Localiza",
    context: "Enterprise platforms · Current",
    highlights: [
      "Contributing frontend features to internal payment, contract, and procurement platforms.",
      "Translating business rules into maintainable interfaces.",
      "Collaborating on technical decisions in a Micro Frontend environment.",
    ],
  },
  {
    id: "wiipo",
    role: "Software Engineer",
    company: "Wiipo",
    context: "Financial products · Web & mobile",
    highlights: [
      "Contributed to financial products used by thousands of active users, including payslips, personal loans, and credit card information.",
      "Worked on benefits and cashback experiences across web and mobile applications.",
      "Supported integrations and product improvements.",
    ],
  },
  {
    id: "cpqi",
    role: "Software Engineer",
    company: "CPQi",
    context: "Internal systems · Legacy applications",
    highlights: [
      "Maintained and improved legacy internal systems.",
      "Worked on registration, consultation, and update workflows.",
      "Contributed to responsive interfaces and forms.",
    ],
  },
];

export const projectHighlights: ProjectHighlight[] = [
  {
    id: "enterprise-platforms",
    title: "Enterprise workflow platforms",
    context: "Blite Tecnologia / Localiza",
    description:
      "Frontend contributions to internal payments, contracts, and procurement platforms, translating business rules into maintainable interfaces.",
    skills: ["React", "TypeScript", "Micro Frontends", "Design Systems"],
  },
  {
    id: "financial-products",
    title: "Digital financial products",
    context: "Wiipo · Web & mobile",
    description:
      "Experiences for payslips, personal loans, credit cards, benefits, and cashback, supporting integrations and product improvements.",
    skills: ["React Native", "React", "TypeScript", "REST APIs"],
  },
  {
    id: "internal-systems",
    title: "Internal systems",
    context: "CPQi",
    description:
      "Maintenance and improvements to internal applications, including responsive interfaces and registration, consultation, and update flows.",
    skills: ["C#", "Blazor", "Git", "Azure DevOps"],
  },
];

export const techAreas: SkillArea[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & UI",
    skills: [
      { name: "Design Systems", level: 85 },
      { name: "Micro Frontends", level: 80 },
      { name: "SOLID", level: 80 },
      { name: "Responsive UI", level: 85 },
    ],
  },
  {
    id: "quality",
    title: "Quality",
    skills: [
      { name: "Jest", level: 80 },
      { name: "React Testing Library", level: 80 },
    ],
  },
  {
    id: "platforms",
    title: "Platforms",
    skills: [
      { name: "REST APIs", level: 85 },
      { name: "Node.js", level: 60 },
      { name: "AWS", level: 70 },
      { name: "C# · Blazor", level: 60 },
    ],
  },
];

export const tools: Tool[] = [
  { id: "git", icon: "git", name: "Git", category: "Version control" },
  {
    id: "github",
    icon: "github",
    name: "GitHub",
    category: "Code collaboration",
  },
  {
    id: "azure-devops",
    icon: "azure",
    name: "Azure DevOps",
    category: "Project delivery",
  },
  { id: "jest", icon: "jest", name: "Jest", category: "Testing" },
  {
    id: "testing-library",
    icon: "testing",
    name: "React Testing Library",
    category: "UI testing",
  },
  { id: "aws", icon: "aws", name: "AWS", category: "Cloud services" },
  { id: "terminal", icon: "terminal", name: "Terminal", category: "Command line" },
  { id: "linux", icon: "linux", name: "Linux", category: "Operating system" },
  { id: "vscode", icon: "vscode", name: "VS Code", category: "Code editor" },
  { id: "cursor", icon: "cursor", name: "Cursor", category: "AI code editor" },
  { id: "react", icon: "react", name: "React", category: "UI library" },
  {
    id: "react-native",
    icon: "react-native",
    name: "React Native",
    category: "Mobile framework",
  },
];

export const mindsetPrinciples: MindsetPrinciple[] = [
  {
    id: "understand-first",
    title: "Understand the problem first",
    description:
      "I start by learning the workflow and business needs behind a feature, so the interface solves the right problem.",
  },
  {
    id: "build-with-care",
    title: "Build with ownership",
    description:
      "I turn complex requirements into clear, reliable experiences and contribute to technical decisions along the way.",
  },
  {
    id: "quality-is-ux",
    title: "Quality is part of the experience",
    description:
      "Maintainable code, thoughtful testing, and responsive interfaces help make products dependable for the people who use them.",
  },
  {
    id: "learn-together",
    title: "Improve together",
    description:
      "I value collaboration, clear communication, and continuous learning as part of delivering better products.",
  },
];
