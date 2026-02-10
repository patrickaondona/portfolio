import electronLogo from "../assets/images/electron-logo.png";
import tailwindcssLogo from "../assets/svgs/tailwindcss-logo.svg";
import figmaLogo from "../assets/svgs/figma-logo.svg";
import clickupLogo from "../assets/images/clickup-logo.png";
import typescriptLogo from "../assets/svgs/typescript-logo.svg";
import nextjsLogo from "../assets/svgs/nextjs-logo.svg";
export type Skill = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export const skills: Skill[] = [
  {
    id: "next-js",
    title: "Next.js",
    icon: nextjsLogo,
    description: "Proficient in using Next.js for building scalable web applications.",
  },
  {
    id: "electron-js",
    title: "Electron JS",
    icon: electronLogo,
    description: "Proficient in using Electron JS for desktop applications.",
  },
  {
    id: "react-js",
    title: "React.js",
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
    title: "JavaScript",
    icon: "https://img.icons8.com/color/48/javascript--v1.png",
    description: "Proficient in ES6 features of JavaScript.",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: typescriptLogo,
    description: "Proficient in using TypeScript for scalable web applications.",
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

