import phoneImg from "../images/phone-img.png";
import laptopImg from "../images/laptop-img.png";
import Skill from "./Skill";
import { skills } from "../data/skills";

const SkillsSection = () => {
  return (
    <>
      <section
        id="skills-section"
        className="bg-background-dark h-fit py-[18%] md:py-[12%] lg:py-[10%] shadow-lg scroll-mt-0"
      >
        <div className="relative w-[90%] xl:w-[70vw] mx-auto">
          {/* Phone Image */}
          <img
            src={phoneImg}
            alt="Phone"
            className="block md:hidden drop-shadow-[5px_5px_20px_#a5a5a5]"
          />

          {/*Laptop Image */}
          <img
            src={laptopImg}
            alt="Laptop"
            className="hidden md:block mx-auto drop-shadow-[5px_5px_20px_#a5a5a5]"
          />
          <div className="flex flex-col absolute top-[6.5%] md:top-[8%] left-[11.5%] md:left-[13%]">
            <h1 className="text-text text-lg lg:text-xl font-bold">
              My Skills
            </h1>
            <span className="w-4 h-1 bg-brand rounded-full"></span>
          </div>
          <div className="absolute top-[12.5%] md:top-[18%] left-[11.5%] md:left-[13%] w-[77%] md:w-[75%] h-[84%] md:h-[71%] overflow-y-auto scroll-smooth">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <Skill key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
