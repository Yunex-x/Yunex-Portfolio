import type { SkillCategory } from "./skills.types";

export const skillsData: SkillCategory[] = [
  {
    title: "FRONT-END",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    description:
      "Building responsive, accessible, and component-based user interfaces.",
  },
  {
    title: "UI / UX",
    skills: [
      "Responsive Design",
      "Accessibility (ARIA)",
      "Component Architecture",
      "Design-to-Code",
      "Conversion Layouts",
      "Visual Hierarchy",
    ],
    description: "Focused on clarity, usability, and real user interaction.",
  },
  {
    title: "STATE & LOGIC",
    skills: [
      "Controlled Forms",
      "Async UI States",
      "API Integration",
      "Client-Side Data",
      "UI Animations",
    ],
    description: "Handling real-world front-end logic beyond static layouts.",
  },
  {
    title: "TOOLS",
    skills: ["Git & GitHub", "Vercel", "ESLint", "Figma", "Chrome DevTools"],
  },
  {
    title: "QUALITY",
    skills: ["Component Testing", "UI Flow Validation", "Code Readability"],
  },
  {
    title: "LEARNING",
    skills: ["Advanced React", "Performance", "Accessibility"],
  },
];
