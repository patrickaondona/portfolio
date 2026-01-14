import palindromeProjectImg from "../images/projects/palindrome-project-img.png";
import drumpadProjectImg from "../images/projects/drumpad-project-img.png";
import shareamProjectImg from "../images/projects/shaream-project-img.png";
import shilohProjectImg from "../images/projects/shiloh-project-img.png";
import figmaLogo from "../svgs/figma-logo.svg";
import tailwindcssLogo from "../svgs/tailwindcss-logo.svg";

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
    id: "shiloh",
    title: "Shiloh World Chapel",
    description:
      "Shiloh Word Chapel — Church Website. A modern, responsive website built for an interdenominational Christian ministry to serve as their official online presence. The platform showcases the church’s mission, services, events, outreach programs, and media resources while providing an accessible way for visitors to connect, partner, and stay informed. The design emphasizes clarity, usability, and a welcoming digital experience aligned with the ministry’s message and community impact.",
    image: shilohProjectImg,
    technologies: [
      "https://img.icons8.com/officel/80/react.png",
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
        label: "Respository",
        url: "https://github.com/MUJTEKNIFY-LIMITED/shiloh-world-chapel",
        icon: "github",
      },
    ],
  },
  {
    id: "shaream",
    title: "ShareAm",
    description:
      "ShareAm is an open-source app with real-time messaging, voice, and video call features. It is a calling and messaging app designed to foster strong connections among users from various walks of life. ShareAm users can choose to record sessions, collaborate on projects all with one easy-to-use platform. ShareAm offers quality video and audio, and a wireless screen-sharing performance.",
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
        label: "Respository",
        url: "https://github.com/NaijaCodePadi/ShareAm.git",
        icon: "github",
      },
    ],
  },
  {
    id: "drum-pad",
    title: "Drum Pad",
    description:
      'Drum pad is a web page with stunning visual backgrounds that contains keys "ASDFGHJKL" which are each responsible for playing a sound when the key is pressed.',
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
        label: "Respository",
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
        label: "Respository",
        url: "https://github.com/patrickaondona/PalindromeChecker.git",
        icon: "github",
      },
    ],
  },
];
