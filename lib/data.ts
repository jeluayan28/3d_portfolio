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
  { id: "education", label: "Education" },
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

export const education = {
  name: "Jelli C. Uayan",
  photo: "/pic_grad.jpg",
  degree: "Bachelor of Science in Information Technology",
  school: "Caraga State University – Main Campus",
  college: "College of Computing and Information Sciences",
  graduated: "2026",
  honor: "Cum Laude",
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

export type Skill = { name: string; icon: string };
export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    items: [
      { name: "React", icon: "/tech/reactjs.png" },
      { name: "Next.js", icon: "/tech/nextdotjs.svg" },
      { name: "TypeScript", icon: "/tech/typescript.png" },
      { name: "Laravel", icon: "/tech/laravel.svg" },
      { name: "PHP", icon: "/tech/php.svg" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
      { name: "JavaScript", icon: "/tech/javascript.png" },
      { name: "HTML", icon: "/tech/html.png" },
      { name: "CSS", icon: "/tech/css.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git & GitHub", icon: "/tech/git.png" },
      { name: "VS Code", icon: "/tech/visualstudiocode.svg" },
      { name: "Three.js", icon: "/tech/threejs.svg" },
      { name: "Vercel", icon: "/tech/vercel.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
    ],
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
  /** Centers the cropped screenshot instead of anchoring it top-left. */
  imageCenter?: boolean;
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
    imageCenter: true,
    status: "In progress · finishing touches",
  },
  {
    title: "Jobbie",
    description:
      "A job search tracker that keeps every application, interview, offer and job link in one place. Each role moves through stages (Applied, Shortlisted, Interviewing, Offered or Rejected), with interview dates, priorities and notes, so nothing slips through while you're job hunting.",
    tags: ["Next.js", "Supabase", "shadcn/ui"],
    href: "https://jobbie-track.vercel.app",
    image: "/projects/jobbie.png",
    imageCenter: true,
  },
  {
    title: "Brainload",
    description:
      "BrainLoad is an AI-powered system that helps students and instructors manage academic workloads across multiple courses by assessing task difficulty, organizing deadlines, and identifying potential overload to promote better planning and student well-being.",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "Convex", "Clerk", "RAG"],
    image: "/projects/brainload.png",
    imageCenter: true,
  },
  {
    title: "Roamr",
    description:
      "Roamr is a car rental website that allows customers to browse available vehicles, compare options, and book cars for their trips. It streamlines the rental process by providing vehicle details, pricing, and reservation management in one platform.",
    tags: ["Laravel", "PostgreSQL","Tailwind CSS"],
    href: "https://roamr-red.vercel.app/",
    image: "/projects/car_rental.png",
    imageCenter: true,
  },
];

export type Experience = { role: string; org: string; period: string; points: string[] };

// PLACEHOLDER: replace with your real roles, internships and education.
export const experience: Experience[] = [
  {
    role: "Lead Developer – Document Tracking System | Trainee",
    org: "Department of Public Works and Highways (DPWH) Regional Office XIII",
    period: "Feb 2026 – May 2026",
    points: [
      "Led the development of a web-based document tracking system to streamline document processing, monitoring, and workflow management.",
      "Developed responsive interfaces using React.js, Tailwind CSS, and shadcn/ui, with Supabase for database integration and data management.",
      "Collaborated with the team to identify requirements, implement system features, and test functionality to ensure reliable document tracking.",
    ],
  },
  {
    role: "Bachelor of Science in Information Technology",
    org: "University name",
    period: "Year - Year",
    points: ["Coursework in networking, systems administration and web development."],
  },
];
