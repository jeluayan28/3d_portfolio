import {
    mobile,
    backend,
    creator,
    web,
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
    skin,
    car,
    furniture,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
        "Thanks to Jelli's expertise, we hired her to revamp our outdated website, and the results were incredible.",
      name: "Jeseca Ruelan",
      designation: "CFO",
      company: "Apple Inc.",
      image: "/p1.jpg",
    },
    {
      testimonial:
        "I’ve collaborated with several developers, but Jelli stands out for her professionalism and technical expertise.",
      name: "Drandreb Reyes",
      designation: "COO",
      company: "Meta Platforms Inc.",
      image: "/p3.jpg",
    },
    {
      testimonial:
        "Jelli transformed our website with stunning design and seamless functionality, exceeding all our expectations.",
      name: "Djeah Tabada",
      designation: "CTO",
      company: "456 Enterprises",
      image: "/p2.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shop IT",
      description:
        "A web-based platform where users can browse, compare, and purchase skincare products, offering a seamless shopping experience tailored to their skincare needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: skin,
      source_code_link: "https://github.com/jeluayan28",
    },
    {
      name: "Car Rent",
      description:
        "A web application that allows users to search for available car rentals, view pricing estimates, and find rental locations based on their current area.",
      tags: [
        {
          name: "view",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "skeleton",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/jeluayan28",
    },
    {
      name: "FurniFinds",
      description:
        "An online platform that enables users to browse a wide range of furniture styles, check prices, and locate nearby retailers or delivery services based on their current location.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: furniture,
      source_code_link: "https://github.com/jeluayan28",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  