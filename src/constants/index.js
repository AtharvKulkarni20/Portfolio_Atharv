import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  SA,
  EcoStart,
  shopify,
  threejs,
  Portfolio,
  Resume_Ai,
  Shridhar,
  Feature,
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
    title: "Software Tester",
    icon: mobile,
  },
  {
    title: "Java Programmer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
];

const experiences = [
  {
    title: "HTML Developer",
    company_name: "SoftAim Solutions",
    icon: SA,
    iconBg: "#383E56",
    date: "July 2022 - Sept 2022",
    points: [
      "Designed and developed user interfaces for a banking website using HTML and CSS.",
      "Ensured pixel-perfect designs while maintaining responsiveness across devices.",
      "Collaborated with the team to understand and implement client requirements effectively.",
      "Optimized web pages for performance and cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Dec 2023",
    points: [
      "Developed a dynamic and responsive website for an educational institute using HTML, CSS, and JavaScript.",
      "Implemented interactive features and ensured a smooth user experience.",
      "Collaborated with clients to gather requirements and deliver customized solutions.",
      "Optimized website performance and ensured compatibility across different browsers and devices.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "EcoStart Inc.",
    icon: EcoStart,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and optimizing scalable web applications using React.js and modern JavaScript libraries.",
      "Creating dynamic, reusable components to enhance user experience and improve development efficiency.",
      "Improving application performance and resolving critical bugs to ensure smooth user interactions.",
      "Implementing responsive and accessible designs to ensure cross-platform and cross-browser compatibility.",
    ],
  },
  {
    title: "Software Tester",
    company_name: "EcoStart Inc.",
    icon: EcoStart,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Conducting functional, regression, and performance testing to ensure high-quality software deliverables.",
      "Developing and executing test cases based on system requirements and user stories.",
      "Identifying, documenting, and tracking software defects using bug-tracking tools.",
      "Collaborating with the development team to reproduce, diagnose, and resolve reported issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Atharv did an excellent job on the project for Nk Traders. The website exceeded our expectations.",
    name: "Shubham Mali",
    designation: "CEO",
    company: "Nk Traders",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Atharv's work for Ecostart was outstanding. His attention to detail and dedication made the project a success.",
    name: "Shridhar Awate",
    designation: "CEO",
    company: "Ecostart",
    image: Shridhar,
  },
  {
    testimonial:
      "Parth's website project was a game-changer for our business. Atharv's expertise made all the difference.",
    name: "Parth K",
    designation: "SDE",
    company: "Zensar ",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];


const projects = [
  {
    name: "AI Resume Builder",
    description:
      "An AI-powered platform designed to help users create professional resumes quickly and efficiently by providing tailored templates and suggestions based on user input.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Resume_Ai,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and achievements, designed to create a strong online presence for job opportunities and networking using React Js, Three Js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/AtharvKulkarni20/Portfolio_Atharv",
  },
  {
    name: "Feature Page",
    description:
      "A feature page for ClimaChampions, highlighting its sustainable solutions and platform functionalities. Built for user engagement, it offers an interactive way to explore sustainability initiatives.",
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
    image: Feature,
    source_code_link: "https://github.com/AtharvKulkarni20/Featurepage",
  }
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
