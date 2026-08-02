import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,

} from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

export const profileImg = "/mpr.png";
import projectImg1 from "../assets/movieapp.png";
import projectImg2 from "../assets/fooddel.jpg";
import projectImg3 from "../assets/project3.jpg";
import projectImg4 from "../assets/portfolio.png";
import projectImg5 from "../assets/recipeapp.jpg";
import projectImg6 from "../assets/project6.avif";
import projectImg8 from "../assets/homee.jpg";
import profileImg7 from "../assets/home22.jpg";
import projectImg9 from "../assets/eventora.png";

export const assets = {
  profileImg,
  profileImg7,
  projectImg9,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Next-js", "Tailwindcss"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Building cross-platform mobile applications with modern tools.",
    tags: ["React Native"],
  },

  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Vs-code"],
  },
];

export const projects = [
  {
    title: "Eventora - Event Management Platform",
    description:
      "A full-stack event management platform where users can discover, create, and book events. Features secure authentication with OTP verification, event booking, user dashboard, and responsive design for a seamless experience.",
    image: projectImg9,
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Nodemailer",
    ],
    icons: [FaReact, FaNodeJs, SiExpress, SiMongodb, SiTailwindcss],
    demo: "https://your-demo-link.com",
    code: "https://github.com/abhaykumardev/Event_booking_app",
  },
  {
    title: "CineFlix-Movie App",
    description:
      "A movie discovery web application that fetches real-time movie data from an external API. Built with a clean and responsive UI using HTML, CSS, and JavaScript.",
    image: projectImg1,
    tech: ["HTML", "CSS", "JavaScript", "Movie API", "YouTube Integration"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://abhaykumardev.github.io/Movie_app/",
    code: "#",
  },
  {
    title: "Let's Order – Food Delivery App",
    description:
      "A modern food delivery web application that allows users to browse restaurants, add items to cart, and place orders with smooth animations and an intuitive user experience.",
    image: projectImg2,
    tech: ["React", "Framer Motion", "Tailwind CSS", "REST API"],
    icons: [FaReact, FaCss3Alt, FaServer],
    demo: "https://fooddelwebapp.netlify.app/",
    code: "#",
  },
  {
    title: "GroceryApp",
    description:
      "A web-based grocery shopping app that lets users browse products, add items to the cart, and place orders with a clean, responsive UI.",
    image: projectImg3,
    tech: ["React", "Tailwind CSS"],
    icons: [FaReact],
    demo: "https://lively-monstera-5f66b1.netlify.app/",
    code: "#",
  },

  {
    title: "Personal Portfolio",
    description:
      "A modern and responsive personal portfolio website built to showcase my projects, skills, and experience. Designed with a clean UI, smooth animations, and optimized for performance across all devices.",
    image: projectImg4,
    tech: ["React", "HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Recipe App",
    description:
      "A responsive recipe application that fetches real-time recipe data from an external API. Users can search recipes, view ingredients, and explore cooking instructions with a clean and user-friendly interface built using HTML, CSS, and JavaScript.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript", "API"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://abhaykumardev.github.io/recipe_app/",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered image generator application that uses an external API to create images from text prompts. Users can enter creative prompts and instantly generate unique AI images with a clean, responsive interface.",
    image: projectImg6,
    tech: ["Html", "css", "Javascript", "Api"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://abhaykumardev.github.io/Aiimagegenerator/",
    code: "#",
  },
  {
    title: "Image Search App",
    description:
      "A responsive image search application that fetches high-quality photos in real time using the Unsplash API. Users can search for images by keywords, explore visually rich results, and view images.",
    image: projectImg8,
    tech: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://abhaykumardev.github.io/image_search_app/",
    code: "#",
  },
];

export const resume = "../assets/resume.pdf";

export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];
