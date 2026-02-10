import palindromeProjectImg from "../assets/images/projects/palindrome-project-img.png";
import drumpadProjectImg from "../assets/images/projects/drumpad-project-img.png";
import shareamProjectImg from "../assets/images/projects/shaream-project-img.png";
import shilohProjectImg from "../assets/images/projects/shiloh-project-img.png";
import dlawProjectImg from "../assets/images/projects/dlaw-project-img.png";
import figmaLogo from "../assets/svgs/figma-logo.svg";
import tailwindcssLogo from "../assets/svgs/tailwindcss-logo.svg";
import nextjsLogo from "../assets/svgs/nextjs-logo.svg";
import typescriptLogo from "../assets/svgs/typescript-logo.svg";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    label: string;
    url: string;
    icon: "github" | "chrome";
  }[];
};

export const projects: Project[] = [
  {
    id: "dlaw",
    title: "Dlaw Chauffeur Services",
    description:
      "Dlaw Chauffeur Services - A modern, responsive website built for a chauffeur service company to serve as their official online presence. The platform showcases the company's services, fleet, pricing, and contact information while providing an accessible way for customers to book rides and stay informed. The design emphasizes clarity, usability, and a professional digital experience aligned with the company's brand and customer service goals.",
    image: dlawProjectImg,
    technologies: [
      nextjsLogo,
      "https://img.icons8.com/officel/80/react.png",
      tailwindcssLogo,
      typescriptLogo,
      "https://img.icons8.com/color/48/nodejs.png",
      "https://img.icons8.com/color/48/git.png",
    ],
    links: [
      {
        label: "Online project",
        url: "https://dlawchauffeurservices.vercel.app",
        icon: "chrome",
      },
      {
        label: "Repository",
        url: "https://github.com/patrickaondona/dlawchauffeurservices.git",
        icon: "github",
      },
    ],
  },
  {
    id: "shiloh",
    title: "Shiloh World Chapel",
    description:
      "Shiloh Word Chapel - Church Website. A modern, responsive website built for an interdenominational Christian ministry to serve as their official online presence. The platform showcases the church's mission, services, events, outreach programs, and media resources while providing an accessible way for visitors to connect, partner, and stay informed. The design emphasizes clarity, usability, and a welcoming digital experience aligned with the ministry's message and community impact.",
    image: shilohProjectImg,
    technologies: [
      "https://img.icons8.com/officel/80/react.png",
      typescriptLogo,
      tailwindcssLogo,
      "https://img.icons8.com/color/48/nodejs.png",
      "https://img.icons8.com/color/48/git.png",
      figmaLogo,
    ],
    links: [
      {
        label: "Online project",
        url: "https://www.shilohwordchapel.org",
        icon: "chrome",
      },
      {
        label: "Repository",
        url: "https://github.com/MUJTEKNIFY-LIMITED/shiloh-world-chapel",
        icon: "github",
      },
    ],
  },
  {
    id: "shaream",
    title: "ShareAm",
    description:
      "ShareAm is an open-source app with real-time messaging, voice, and video call features. It is a calling and messaging app designed to foster strong connections among users from various walks of life. ShareAm users can choose to record sessions and collaborate on projects with one easy-to-use platform. ShareAm offers quality video and audio, and a wireless screen-sharing performance.",
    image: shareamProjectImg,
    technologies: [
      "https://img.icons8.com/color/48/html-5--v1.png",
      "https://img.icons8.com/color/48/css3.png",
      "https://img.icons8.com/color/48/javascript--v1.png",
      "https://img.icons8.com/color/48/nodejs.png",
      "https://img.icons8.com/color/48/git.png",
      figmaLogo,
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/NaijaCodePadi/ShareAm.git",
        icon: "github",
      },
    ],
  },
  {
    id: "drum-pad",
    title: "Drum Pad",
    description:
      "Drum pad is a web page with stunning visual backgrounds that contains keys \"ASDFGHJKL\" which are each responsible for playing a sound when the key is pressed.",
    image: drumpadProjectImg,
    technologies: [
      "https://img.icons8.com/color/48/html-5--v1.png",
      "https://img.icons8.com/color/48/css3.png",
      "https://img.icons8.com/color/48/javascript--v1.png",
    ],
    links: [
      {
        label: "Online project",
        url: "https://drum-pad-alpha.vercel.app",
        icon: "chrome",
      },
      {
        label: "Repository",
        url: "https://github.com/patrickaondona/DrumPad.git",
        icon: "github",
      },
    ],
  },
  {
    id: "palindrome-checker",
    title: "Palindrome Checker",
    description:
      "A simple web page that has an input to check if a word, phrase or number is a palindrome or not and returns the result.",
    image: palindromeProjectImg,
    technologies: [
      "https://img.icons8.com/color/48/html-5--v1.png",
      "https://img.icons8.com/color/48/css3.png",
      "https://img.icons8.com/color/48/javascript--v1.png",
    ],
    links: [
      {
        label: "Online project",
        url: "https://palindrome-checker-five-ruddy.vercel.app",
        icon: "chrome",
      },
      {
        label: "Repository",
        url: "https://github.com/patrickaondona/PalindromeChecker.git",
        icon: "github",
      },
    ],
  },
];

