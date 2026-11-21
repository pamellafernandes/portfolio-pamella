import type {
  ActionLink,
  Experience,
  NavigationLink,
  SkillArea,
} from "../types/portfolio";

export const navigationLinks: NavigationLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Pamella Fernandes",
  role: "Software Engineer · Frontend",
  headline: "Building thoughtful digital experiences through frontend engineering.",
  introduction:
    "I'm a Software Engineer with 4+ years of experience building web and mobile applications with React, React Native, and TypeScript. I turn complex business requirements into reliable, maintainable products, with a focus on collaboration, ownership, and continuous improvement.",
  about:
    "I enjoy working at the intersection of technology, product needs, and people — understanding the problem, contributing to technical decisions, and delivering solutions that make everyday workflows better.",
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/devpamellafernandes/",
    github: "https://github.com/pamellafernandes",
  },
};

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

export const contactActions: ActionLink[] = [
  {
    label: "Get in touch on LinkedIn ↗",
    href: profile.socialLinks.linkedIn,
    variant: "primary",
  },
  {
    label: "GitHub ↗",
    href: profile.socialLinks.github,
    variant: "secondary",
  },
];

export const experiences: Experience[] = [
  {
    id: "localiza",
    role: "Software Engineer",
    company: "Blite Tecnologia / Localiza",
    context: "Enterprise platforms · Current",
    description:
      "Contributing to Localiza's internal enterprise platforms across payments, contracts, and procurement workflows. Working primarily on frontend features, translating business rules into maintainable interfaces and collaborating on technical decisions within a Micro Frontend environment.",
    skills: [
      "React",
      "TypeScript",
      "Micro Frontends",
      "Design Systems",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    id: "wiipo",
    role: "Software Engineer",
    company: "Wiipo",
    context: "Financial products · Web & mobile",
    description:
      "Contributed to digital financial products used by thousands of active users, including experiences for payslips, personal loans, and credit card information. Also worked on benefits and cashback products, supporting integrations and product improvements across web and mobile applications.",
    skills: [
      "React Native",
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Jest",
      "REST APIs",
    ],
  },
  {
    id: "cpqi",
    role: "Software Developer",
    company: "CPQi",
    context: "Internal systems · Legacy applications",
    description:
      "Worked on internal legacy systems, contributing to maintenance and improvements across registration, consultation, and update workflows, as well as responsive interfaces and forms.",
    skills: ["C#", "Blazor", "Git", "Azure DevOps"],
  },
];

export const skillAreas: SkillArea[] = [
  {
    id: "frontend",
    title: "Frontend development",
    description:
      "React, React Native, TypeScript, JavaScript, responsive interfaces, component-driven development.",
  },
  {
    id: "architecture",
    title: "Architecture & quality",
    description:
      "Micro Frontends, Design Systems, maintainable code, Jest, React Testing Library, Storybook.",
  },
  {
    id: "integration",
    title: "Integration",
    description:
      "REST APIs, backend communication, business rules, and integration-focused feature development.",
  },
  {
    id: "collaboration",
    title: "Ways of working",
    description:
      "Ownership, collaboration, clear communication, adaptability, and continuous learning.",
  },
];
