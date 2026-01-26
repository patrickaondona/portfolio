import type { Skill as SkillType } from "../data/skills";

interface SkillProps {
  skill: SkillType;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className="flex items-center gap-3 lg:gap-6">
      <img
        src={skill.icon}
        alt={`${skill.title} Icon`}
        className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] bg-background rounded-md shadow-lg"
      />
      <div className="flex flex-col">
        <h2 className="text-text text-base lg:text-lg font-bold">
          {skill.title}
        </h2>
        <p className="text-text-dark text-sm lg:text-base">
          {skill.description}
        </p>
      </div>
    </div>
  );
};

export default Skill;
