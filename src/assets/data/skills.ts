import electronLogo from "../images/electron-logo.png";
import tailwindcssLogo from "../svgs/tailwindcss-logo.svg";
import figmaLogo from "../svgs/figma-logo.svg";
import clickupLogo from "../images/clickup-logo.png";

export type Skill = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export const skills: Skill[] = [
  {
    id: "electron-js",
    title: "Electron JS",
    icon: electronLogo,
    description: "Proficient in using Electron JS for desktop applications.",
  },
  {
    id: "react-js",
    title: "React.Js",
    icon: "https://img.icons8.com/officel/80/react.png",
    description:
      "Proficient in developing SPAs using React.Js, Redux, and Ant Design.",
  },
  {
    id: "tailwind-css",
    title: "Tailwind CSS",
    icon: tailwindcssLogo,
    description: "Proficient in the features of Tailwind CSS.",
  },
  {
    id: "javascript",
    title: "Javascript",
    icon: "https://img.icons8.com/color/48/javascript--v1.png",
    description: "Proficient in ES6 features of Javascript and TypeScript.",
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: "https://img.icons8.com/color/48/nodejs.png",
    description: "Proficient in developing APIs using Node.js.",
  },
  {
    id: "html5",
    title: "HTML5",
    icon: "https://img.icons8.com/color/48/html-5--v1.png",
    description: "Proficient in the features of HTML5.",
  },
  {
    id: "css3",
    title: "CSS3",
    icon: "https://img.icons8.com/color/48/css3.png",
    description: "Proficient in the features of CSS3.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaLogo,
    description: "Proficient in importing designs from Figma.",
  },
  {
    id: "git",
    title: "Git",
    icon: "https://img.icons8.com/color/48/git.png",
    description: "Proficient in using version control tools like Git.",
  },
  {
    id: "clickup",
    title: "ClickUp",
    icon: clickupLogo,
    description: "Proficient in working with ClickUp application.",
  },
];
