import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mcdo,
  tesla,
  toyota,
  amazon,
  threejs,
  brainload,
  car,
  seniorbridge,
  wanderlust,
  furniture,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fronend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "McDonald's",
    icon: mcdo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Regularly updated and optimized applications for performance improvements.",
      "Organized brainstorming sessions to gather diverse perspectives on product features.",
      "Employed media queries to enhance user experience on mobile and tablet devices.",
      "Provided actionable feedback to help team members improve their coding skills.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Integrated RESTful APIs to enable seamless data interaction.",
      "Worked closely with designers to translate UI/UX designs into functional code.",
      "Conducted extensive testing across major browsers (Chrome, Firefox, Safari) to identify compatibility issues.",
      "Championed the use of coding standards and documentation for better maintainability.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Utilized React.js to build dynamic user interfaces, enhancing user experience.",
      "Facilitated effective communication between teams to align on project goals and timelines.",
      "Developed layouts that adapt to various screen sizes using CSS frameworks like Tailwind CSS.",
      "Reviewed pull requests for code quality, readability, and adherence to best practices.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Toyota",
    icon: toyota,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Implemented state management with Redux to streamline data flow.",
      "Participated in agile ceremonies (sprints, stand-ups) to ensure team cohesion and productivity.",
      "Collaborated with designers to ensure design consistency across platforms.",
      "Encouraged knowledge sharing during review sessions to foster a collaborative environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Jelli was a great experience. She is a reliable and supportive partner who consistently helped us identify and fix bugs efficiently. Her problem-solving skills and willingness to assist made collaboration smooth, especially during complex development tasks.",
    name: "Jeseca Ruelan",
    image: "/p1.jpg",
  },
  {
    testimonial:
      "As a freelancer and collaborator, Jelli demonstrated strong commitment and strong technical skills. She consistently contributed to front-end development, creating clean, responsive, and user-friendly interfaces. Her collaborative attitude and reliability made a significant impact on the success of our work.",
    name: "Drandreb Reyes",
    image: "/p3.jpg",
  },
  {
    testimonial:
      "Jelli is an excellent team partner and freelancer who consistently delivers quality work. She played a key role in back-end development for the website, implementing core features and ensuring smooth data handling and functionality.",
    name: "Djeah Tabada",
    image: "/p2.jpg",
  },
];

const projects = [
  {
    name: "Brainload",
    description:
      "An AI-powered system developed as a thesis project to help instructors centralize and manage students' academic workloads. The system analyzes tasks, deadlines, and workload distribution, providing personalized recommendations to optimize productivity.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "convex",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "claude",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "huggingface",
        color: "blue-text-gradient",
      },
      {
        name: "ollama",
        color: "green-text-gradient",
      },
    ],
    image: brainload,
    source_code_link: "https://github.com/jeluayan28",
  },
  {
    name: "Senior Bridge",
    description:
      "A web-based application designed to connect senior citizens with essential community services and information through a centralized digital platform. The system provides easy access to announcements, programs, and support resources, helping improve communication between seniors and local organizations.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
    ],
    image: seniorbridge,
    source_code_link: "https://github.com/jeluayan28",
  },
  {
    name: "Wanderlust",
    description:
      "A travel-focused web application developed to promote and showcase tourist destinations in Agusan del Norte through a centralized and visually engaging platform. The website provides users with destination information, images, and travel highlights, aiming to support local tourism and raise awareness of regional attractions.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: wanderlust,
    source_code_link: "https://github.com/jeluayan28",
  },
];

export { services, technologies, experiences, testimonials, projects };
