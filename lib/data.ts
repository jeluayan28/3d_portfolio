import {
  Headset,
  Wrench,
  Code2,
  type LucideIcon,
} from "lucide-react";

/**
 * All portfolio copy lives here so it can be edited without touching components.
 * Entries marked PLACEHOLDER should be replaced with real details before sharing.
 */

export const profile = {
  name: "Jelli Uayan",
  firstName: "Jelli",
  role: "Web Developer & Freelancer",
  headline: "I build modern websites and web applications that turn ideas into practical digital solutions.",
  tagline:
    "I'm an Information Technology graduate and freelance web developer specializing in responsive, functional, and modern web experiences. From business websites to custom web applications, I enjoy turning ideas into real, working products.",
  stack: ["React", "Next.js", "Laravel", "JavaScript", "PHP", "Tailwind CSS"],
  email: "uayanjelli@gmail.com",
  github: "", // PLACEHOLDER: e.g. "https://github.com/your-handle"
  linkedin: "", // PLACEHOLDER: e.g. "https://linkedin.com/in/your-handle"
  resume: "", // PLACEHOLDER: drop a PDF in /public and use "/resume.pdf"
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume", href: profile.resume || "#contact", external: Boolean(profile.resume) },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm an Information Technology graduate with experience in IT support and web development. I enjoy troubleshooting technical challenges, learning new technologies, and creating practical, user-friendly digital solutions.",
    "With a background in React, Next.js, Laravel, and modern web technologies, I combine technical problem-solving with a strong focus on functionality and usability. I'm always eager to learn, collaborate, and turn ideas into solutions that make a meaningful impact.",
  ],
  highlights: [
    { value: "IT", label: "Graduate" },
    { value: "Support", label: "First focus" },
    { value: "Web", label: "Dev on the side" },
  ],
};

export type Pillar = { title: string; description: string; icon: LucideIcon };

export const pillars: Pillar[] = [
  {
    title: "Helpdesk & Support",
    description: "Triage, resolve and document user issues with patience and a clear paper trail.",
    icon: Headset,
  },
  {
    title: "Hardware & Software",
    description: "Diagnosing devices, installing and configuring systems, keeping them running.",
    icon: Wrench,
  },
  {
    title: "Web Development",
    description: "Building clean, usable web apps with React, Next.js and Laravel.",
    icon: Code2,
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "IT Support",
    items: [
      "Troubleshooting",
      "Ticketing & Documentation",
      "Windows",
      "Microsoft Office",
      "Hardware Repair",
      "Remote Support",
      "Customer Service",
    ],
  },
  {
    title: "Web Development",
    items: ["React", "Next.js", "TypeScript", "Laravel", "PHP", "Tailwind CSS", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Three.js", "Vercel", "MySQL"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  image?: string;
  /** "contain" shows the whole screenshot (letterboxed on imageBg); default crops to fill. */
  imageFit?: "cover" | "contain";
  imageBg?: string;
  status?: string;
};

// PLACEHOLDER: replace each entry with a real project (title, summary, stack, links).
export const projects: Project[] = [
  {
    title: "Matchelli",
    description:
      "A website for Matchelli, a small matcha business that's just getting started. I built the storefront with React.js and Tailwind CSS and used Supabase for the backend, so the owner has a clean, modern online home for the brand.",
    tags: ["React.js", "Supabase", "Tailwind CSS"],
    href: "https://matchelli.vercel.app",
    image: "/projects/matchelli.png",
    status: "In progress · finishing touches",
  },
  {
    title: "Jobbie",
    description:
      "A job search tracker that keeps every application, interview, offer and job link in one place. Each role moves through stages (Applied, Shortlisted, Interviewing, Offered or Rejected), with interview dates, priorities and notes, so nothing slips through while you're job hunting.",
    tags: ["Next.js", "Supabase", "shadcn/ui"],
    href: "https://jobbie-track.vercel.app",
    image: "/projects/jobbie.png",
  },
  {
    title: "Laravel Web Application",
    description:
      "Describe a Laravel project here: the users it serves, the features you owned, and the stack.",
    tags: ["Laravel", "PHP", "MySQL"],
  },
];

export type Experience = { role: string; org: string; period: string; points: string[] };

// PLACEHOLDER: replace with your real roles, internships and education.
export const experience: Experience[] = [
  {
    role: "IT Support Role / Internship",
    org: "Organisation name",
    period: "Month Year - Month Year",
    points: [
      "Resolved hardware, software and account issues for end users, escalating when needed.",
      "Documented fixes so recurring problems were faster to solve.",
    ],
  },
  {
    role: "Bachelor of Science in Information Technology",
    org: "University name",
    period: "Year - Year",
    points: ["Coursework in networking, systems administration and web development."],
  },
];
