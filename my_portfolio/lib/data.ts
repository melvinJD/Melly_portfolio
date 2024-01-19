import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#intro",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    description:
      "School of Code.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
];

export const projectsData = [
  {
    title: "Bootcamper Events Booking App",
    description:
      "As part of our midterm project, our group of six, named ourselves the 'Byte Stripes' and built our first full stack app.The app was designed to help bootcampers book and find events, for networking and socialising.`",
    tags: ["HTML", "JavaScript", "Vercel", "Elephant SQL", "Node Js", "Express"],
    imageUrl: "/placefiller.png"
  },
  {
    title: "The Reading Room",
    description:
      "End of bootcamp full stack project .",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Chakra",
  "MongoDB",
  "Elephant SQL",
  "Express",
  "PostgreSQL",,
  "Framer Motion",
] as const;