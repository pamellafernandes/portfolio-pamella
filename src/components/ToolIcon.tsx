import type { ReactNode } from "react";
import type { Tool } from "../types/portfolio";

type ToolIconName = Tool["icon"];

const iconPaths: Record<ToolIconName, ReactNode> = {
  git: (
    <>
      <path d="M7 6v12" />
      <path d="M7 10h8a3 3 0 0 0 3-3V5" />
      <path d="M7 14h6a3 3 0 0 1 3 3v2" />
      <circle cx="7" cy="5" r="2" />
      <circle cx="18" cy="4" r="2" />
      <circle cx="16" cy="20" r="2" />
    </>
  ),
  github: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  azure: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 6h6a4 4 0 0 1 4 4v6" />
      <path d="M6 8v10" />
    </>
  ),
  jest: (
    <>
      <path d="m13 2-3 8h6l-5 12 1-9H6l7-11Z" />
    </>
  ),
  testing: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  aws: (
    <>
      <path d="M20 16.2A4.8 4.8 0 0 0 18 7h-1.1A7 7 0 0 0 3 9a5 5 0 0 0 1 9h15a3 3 0 0 0 1-1.8Z" />
    </>
  ),
  terminal: (
    <>
      <path d="m5 7 5 5-5 5" />
      <path d="M13 17h6" />
    </>
  ),
  linux: (
    <>
      <path d="M12 2.5c-3.1 0-5 2.7-5 6.2v2.1c-1.8 1.8-3 4.7-3 7.4 0 2.2 1.7 3.8 4 3.8h8c2.3 0 4-1.6 4-3.8 0-2.7-1.2-5.6-3-7.4V8.7c0-3.5-1.9-6.2-5-6.2Z" />
      <path d="M8 11c-1.5 1.9-2.3 4.5-2.3 6.6M16 11c1.5 1.9 2.3 4.5 2.3 6.6" />
      <path d="M9 14c.6-1.1 1.6-1.7 3-1.7s2.4.6 3 1.7v6H9v-6Z" />
      <circle cx="10" cy="8" r=".7" fill="currentColor" stroke="none" />
      <circle cx="14" cy="8" r=".7" fill="currentColor" stroke="none" />
      <path d="m11 10 1 1 1-1" />
      <path d="m9 22-1.5.8M15 22l1.5.8" />
    </>
  ),
  vscode: (
    <>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m14 4-4 16" />
    </>
  ),
  cursor: (
    <>
      <path d="M5 3v17l5-5 3 6 3-1.5-3-6h7L5 3Z" />
      <path d="m15 4 1.5-2M19 8l3-.5M17 13l2 2" />
    </>
  ),
  react: (
    <>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  "react-native": (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M10 5h4M11 18.5h2" />
      <circle cx="12" cy="11.5" r="3" />
      <path d="m10.5 11.5 1 1 2-2" />
    </>
  ),
};

interface ToolIconProps {
  name: ToolIconName;
}

export function ToolIcon({ name }: ToolIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="tool-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  );
}
