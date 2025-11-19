import phoneImg from "../images/phone-img.png";
import laptopImg from "../images/laptop-img.png";
import electronLogo from "../images/electron-logo.png";
import tailwindcssLogo from "../images/tailwindcss-logo.png";
import figmaLogo from "../svgs/figma-logo.svg";
import clickupLogo from "../images/clickup-logo.png";

const SkillsSection = () => {
  return (
    <>
      <section
        id="skills-section"
        className="bg-background-dark h-fit py-[14%] md:py-[7%] shadow-lg scroll-mt-[15vh]"
      >
        <div className="relative w-[82vw] xl:w-[70vw] mx-auto">
          {/* Phone Image */}
          <img
            src={phoneImg}
            alt="Phone"
            className="block md:hidden w-full drop-shadow-[5px_5px_20px_#a5a5a5]"
          />
          {/*Laptop Image */}
          <img
            src={laptopImg}
            alt="Laptop"
            className="hidden md:block w-[80%] mx-auto drop-shadow-[5px_5px_20px_#a5a5a5]"
          />
          <div className="flex flex-col absolute top-[6.5%] md:top-[7%] left-[11.5%] md:left-[20%]">
            <h1 className="text-text text-lg lg:text-xl font-bold">
              My Skills
            </h1>
            <span className="w-4 h-1 bg-brand rounded-full"></span>
          </div>
          <div className="absolute top-[12.5%] md:top-[18%] left-[11.5%] md:left-[20%] w-[77%] md:w-[60%] h-[84%] md:h-[71%] overflow-y-auto scroll-smooth">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src={electronLogo}
                  alt="Electron Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    Electron JS
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in using <b>Electron JS</b> for desktop
                    applications.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src="https://img.icons8.com/officel/80/react.png"
                  alt="React.js Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    React.Js
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in developing SPAs using <b>React.Js</b>, Redux,
                    and Ant Design.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src={tailwindcssLogo}
                  alt="Tailwind CSS Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    Tailwind CSS
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in the features of <b>Tailwind CSS</b>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src="https://img.icons8.com/color/48/javascript--v1.png"
                  alt="JavaScript Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    Javascript
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in ES6 features of <b>Javascript</b> and{" "}
                    <b>TypeScript</b>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src="https://img.icons8.com/color/48/nodejs.png"
                  alt="Node.js Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    Node.js
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in developing APIs using <b>Node.js</b>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src="https://img.icons8.com/color/48/html-5--v1.png"
                  alt="Html5 Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    HTML5
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in the features of <b>HTML5</b>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src="https://img.icons8.com/color/48/css3.png"
                  alt="CSS3 Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    CSS3
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in the features of <b>CSS3</b>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src={figmaLogo}
                  alt="Figma Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />

                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    Figma
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in importing designs from <b>Figma</b>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src="https://img.icons8.com/color/48/git.png"
                  alt="Git Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    Git
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in using version control tools like <b>Git</b>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6">
                <img
                  src={clickupLogo}
                  alt="ClickUp Icon"
                  className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
                />
                <div className="flex flex-col">
                  <h2 className="text-text text-base lg:text-lg font-bold">
                    ClickUp
                  </h2>
                  <p className="text-text-light text-sm lg:text-base">
                    Proficient in working with <b>ClickUp</b> application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
