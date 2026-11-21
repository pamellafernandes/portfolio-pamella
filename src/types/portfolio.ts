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
  description: string;
  skills: string[];
}

export interface SkillArea {
  id: string;
  title: string;
  description: string;
}
