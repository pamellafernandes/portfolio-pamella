export interface NavigationLink {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  context: string;
  highlights: string[];
}

export interface SkillLevel {
  name: string;
  level: number;
}

export interface SkillArea {
  id: string;
  title: string;
  skills: SkillLevel[];
}

export interface ProjectHighlight {
  id: string;
  title: string;
  context: string;
  description: string;
  skills: string[];
}

export interface Tool {
  id: string;
  icon:
    | "git"
    | "github"
    | "azure"
    | "jest"
    | "testing"
    | "aws"
    | "terminal"
    | "linux"
    | "vscode"
    | "cursor"
    | "react"
    | "react-native";
  name: string;
  category: string;
}

export interface MindsetPrinciple {
  id: string;
  title: string;
  description: string;
}

export interface AboutHighlight {
  id: string;
  symbol: string;
  title: string;
  description: string;
}

export interface PortfolioProfile {
  name: string;
  role: string;
  headline: string;
  introduction: string;
  about: string;
  email: string;
  socialLinks: {
    linkedIn: string;
    github: string;
  };
}
