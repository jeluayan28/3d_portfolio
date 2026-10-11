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
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm an Information Technology graduate with a passion for web development, technical problem-solving, and creating practical digital solutions. I have experience in IT support and building web applications, combining technical knowledge with a problem-solving mindset to develop reliable, functional, and user-friendly systems.",
    "With experience in React, Next.js, Laravel, and other modern web technologies, I enjoy transforming ideas into meaningful digital experiences. As an aspiring professional and freelance web developer, I'm continuously exploring new technologies, refining my skills, and embracing opportunities to build solutions that make a difference.",
  ],
};

export const services = [
  { title: "Web Developer", icon: "/services/web.png" },
  { title: "Backend Developer", icon: "/services/backend.png" },
  { title: "Frontend Developer", icon: "/services/creator.png" },
];

export const education = {
  name: "Jelli C. Uayan",
  photo: "/pic_grad.jpg",
  degree: "Bachelor of Science in Information Technology",
  school: "Caraga State University – Main Campus",
  college: "College of Computing and Information Sciences",
  graduated: "2026",
  honor: "Cum Laude",
};

export type Skill = { name: string; icon: string };
export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    items: [
      { name: "React.js", icon: "/tech/reactjs.png" },
      { name: "Next.js", icon: "/tech/nextdotjs.svg" },
      { name: "JavaScript", icon: "/tech/javascript.png" },
      { name: "TypeScript", icon: "/tech/typescript.png" },
      { name: "HTML5", icon: "/tech/html.png" },
      { name: "CSS3", icon: "/tech/css.png" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
      { name: "Bootstrap", icon: "/tech/bootstrap.svg" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Laravel", icon: "/tech/laravel.svg" },
      { name: "PHP", icon: "/tech/php.svg" },
      { name: "Node.js", icon: "/tech/nodedotjs.svg" },
      { name: "FastAPI", icon: "/tech/fastapi.svg" },
      { name: "REST APIs", icon: "/tech/restapi.svg" },
    ],
  },
  {
    title: "Database Management",
    items: [
      { name: "Supabase", icon: "/tech/supabase.svg" },
      { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
      { name: "Convex", icon: "/tech/convex.svg" },
    ],
  },
  {
    title: "Tools and Platforms",
    items: [
      { name: "Git", icon: "/tech/git.svg" },
      { name: "GitHub", icon: "/tech/github.svg" },
      { name: "VS Code", icon: "/tech/visualstudiocode.svg" },
      { name: "Cursor", icon: "/tech/cursor.svg" },
      { name: "Claude", icon: "/tech/claude.svg" },
      { name: "Vercel", icon: "/tech/vercel.svg" },
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
    role: "Freelance Web Developer",
    org: "Self-Employed | Freelance",
    period: "Jul 2025 – Jun 2026",
    points: [
      "Designed and developed websites for personal projects and freelance work, focusing on responsive layouts, functionality, and user-friendly experiences.",
      "Built web applications using React.js, Next.js, Laravel, and modern web technologies to create practical solutions for different website requirements.",
      "Implemented frontend interfaces, integrated backend functionality, and managed database connections to deliver functional and responsive websites.",
      "Managed the website development process, from planning and designing layouts to coding, testing, debugging, and deployment.",
      "Continuously improved website performance, usability, and responsiveness across desktop and mobile devices.",
    ],
  },
];
