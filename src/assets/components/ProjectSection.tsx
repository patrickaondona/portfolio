import { FaGithub, FaChrome } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section
      className="bg-background-dark flex flex-col items-center px-4 lg:px-8 gap-y-12 text-center h-fit py-[27%] md:py-[15%] xl:py-[12%] shadow-lg scroll-mt-[15%] -z-20 text-text"
      id="project-section"
    >
      <div className="flex flex-col gap-y-1 items-center">
        <h1 className="text-text text-2xl lg:text-3xl font-bold">Projects</h1>
        <span className="w-4 lg:w-6 h-1 lg:h-1.5 bg-brand rounded-full"></span>
      </div>
      <div className="flex flex-col w-full gap-y-6 md:gap-y-0">
        <div className="border-b-2 border-b-gray-400 flex flex-col gap-y-6 py-6 lg:py-14 xl:py-20 md:flex-row md:items-center md:gap-x-6">
          <img
            className="rounded-xl shadow-2xl md:w-1/2"
            src="./src/assets/images/projects/Screenshot (311).png"
            alt="Screenshot of ShareAm project"
          />
          <div className="flex flex-col gap-y-4 py-6 text-left 2xl:gap-10">
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
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/nodejs.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/git.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="./src/assets/svgs/figma-logo.svg"
                alt=""
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
            src="./src/assets/images/projects/Screenshot (310).png"
            alt="Screenshot of drum pad project"
          />
          <div className="flex flex-col gap-y-4 py-6 text-left 2xl:gap-10">
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
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt=""
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
            src="./src/assets/images/projects/Screenshot (309).png"
            alt="Screenshot of palindrome project"
          />
          <div className="flex flex-col gap-y-4 py-6 text-left 2xl:gap-10">
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
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
              />
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt=""
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
