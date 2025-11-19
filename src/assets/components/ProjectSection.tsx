import { FaGithub, FaChrome } from "react-icons/fa";
import screenshot309 from "../images/projects/Screenshot (309).png";
import screenshot310 from "../images/projects/Screenshot (310).png";
import screenshot311 from "../images/projects/Screenshot (311).png";
import figmaLogo from "../svgs/figma-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <section
      className="bg-background-dark flex flex-col items-center justify-center px-4 lg:px-8 gap-y-12 text-center h-fit py-[10vh] shadow-lg scroll-mt-[12vh] lg:scroll-mt-[15vh] -z-20 text-text"
      id="project-section"
    >
      <div className="flex flex-col gap-y-1 items-center">
        <h1
          className="text-text text-2xl lg:text-3xl font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Projects
        </h1>
        <span
          className="w-4 lg:w-6 h-1 lg:h-1.5 bg-brand rounded-full"
          data-aos="fade-up"
          data-aos-delay="250"
        ></span>
      </div>
      <div className="flex flex-col w-full gap-y-6 md:gap-y-0">
        <div className="border-b-2 border-b-gray-400 flex flex-col gap-y-6 py-6 lg:py-14 xl:py-20 md:flex-row md:items-center md:gap-x-6">
          <img
            className="rounded-xl shadow-2xl md:w-1/2"
            src={screenshot311}
            alt="Screenshot of ShareAm project"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <div
            className="flex flex-col gap-y-4 py-6 text-left 2xl:gap-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-text text-xl lg:text-2xl font-semibold">
              ShareAm
            </h2>
            <p className="text-text-light text-lg lg:text-xl">
              ShareAm is an open-source app with real-time messaging, voice, and
              video call features. It is a calling and messaging app designed to
              foster strong connections among users from various walks of life.
              ShareAm users can choose to record sessions, collaborate on
              projects all with one easy-to-use platform. ShareAm offers quality
              video and audio, and a wireless screen-sharing performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <img
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="HTML5"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                alt="CSS3"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="JavaScript"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/nodejs.png"
                alt="Node.js"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/git.png"
                alt="Git"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src={figmaLogo}
                alt="Figma"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/NaijaCodePadi/ShareAm.git"
                target="_blank"
                className="bg-brand flex gap-x-2 justify-center items-center font-semibold px-3 py-3 rounded-xl text-sm lg:text-lg text-white hover:bg-brand-dark hover:-translate-y-1 hover:transition-all hover:duration-500 "
              >
                Respository <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-b-gray-400 flex flex-col gap-y-6 py-6 lg:py-14 xl:py-20 md:flex-row md:items-center md:gap-x-6">
          <img
            className="rounded-xl shadow-2xl md:w-1/2 md:h-full"
            src={screenshot310}
            alt="Screenshot of drum pad project"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <div
            className="flex flex-col gap-y-4 py-6 text-left 2xl:gap-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-text text-xl lg:text-2xl font-semibold">
              Drum Pad
            </h2>
            <p className="text-text-light text-lg lg:text-xl">
              Drum pad is a web page with stunning visual backgrounds that
              contains keys "ASDFGHJKL" which are each responsible for playing a
              sound when the key is pressed.
            </p>
            <div className="flex flex-wrap gap-3">
              <img
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="HTML5"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                alt="CSS3"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="JavaScript"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
            </div>
            <div className="flex gap-3">
              <a
                href="https://drum-pad-alpha.vercel.app"
                target="_blank"
                className="bg-brand flex gap-x-2 justify-center items-center font-semibold px-3 py-3 rounded-xl text-sm lg:text-lg text-white hover:bg-brand-dark hover:-translate-y-1 hover:transition-all hover:duration-500 "
              >
                Online project <FaChrome />
              </a>
              <a
                href="https://github.com/patrickaondona/DrumPad.git"
                target="_blank"
                className="bg-brand flex gap-x-2 justify-center items-center font-semibold px-3 py-3 rounded-xl text-sm lg:text-lg text-white hover:bg-brand-dark hover:-translate-y-1 hover:transition-all hover:duration-500 "
              >
                Respository <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-b-gray-400 flex flex-col gap-y-6 py-6 lg:py-14 xl:py-20 md:flex-row md:items-center md:gap-x-6">
          <img
            className="rounded-xl shadow-2xl md:w-1/2 md:h-full"
            src={screenshot309}
            alt="Screenshot of palindrome project"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <div
            className="flex flex-col gap-y-4 py-6 text-left 2xl:gap-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-text text-xl lg:text-2xl font-semibold">
              Palindrome Checker
            </h2>
            <p className="text-text-light text-lg lg:text-xl">
              A simple web page that has an input to check if a word, phrase or
              number is a palindrome or not and returns the result.
            </p>
            <div className="flex flex-wrap gap-x-3">
              <img
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="HTML5"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                alt="CSS3"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="JavaScript"
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
            </div>
            <div className="flex gap-3">
              <a
                href="https://palindrome-checker-five-ruddy.vercel.app"
                target="_blank"
                className="bg-brand flex gap-x-2 justify-center items-center font-semibold px-3 py-3 rounded-xl text-sm lg:text-lg text-white hover:bg-brand-dark hover:-translate-y-1 hover:transition-all hover:duration-500 "
              >
                Online project <FaChrome />
              </a>
              <a
                href="https://github.com/patrickaondona/PalindromeChecker.git"
                target="_blank"
                className="bg-brand flex gap-x-2 justify-center items-center font-semibold px-3 py-3 rounded-xl text-sm lg:text-lg text-white hover:bg-brand-dark hover:-translate-y-1 hover:transition-all hover:duration-500 "
              >
                Respository <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
