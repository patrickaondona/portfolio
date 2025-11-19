import { FaGraduationCap } from "react-icons/fa";
const EducationSection = () => {
  return (
    <>
      <section
        className="flex flex-col gap-y-20 lg:gap-y-32 items-center justify-center px-2 lg:px-4 py-[14%] md:py-[7%] scroll-mt-[15vh] w-full h-fit -z-20"
        id="education-section"
      >
        <div className="flex flex-col gap-y-1 items-center">
          <h1 className="text-text text-2xl lg:text-3xl font-bold">
            Education
          </h1>
          <span className="w-4 lg:w-6 h-1 lg:h-1.5 bg-brand rounded-full"></span>
        </div>
        <div className="flex flex-col w-full text-center gap-y-8 md:flex-row md:justify-center lg:gap-x-6">
          <div className="flex flex-col items-center gap-y-3 md:w-1/3">
            <FaGraduationCap size={30} className="text-brand" />
            <h2 className="text-text-light font-bold text-xl lg:text-2xl">
              St. Peter's College, Garaku
            </h2>
            <p className="text-text text-lg lg:text-xl">
              Junior Secondary School Certificate
            </p>
            <p className="text-text text-lg lg:text-xl">2012 - 2015</p>
          </div>
          <span className="bg-background-light w-2 h-24 mx-auto rounded-lg md:w-24 md:h-2 md:my-auto lg:h-3 lg:w-28"></span>
          <div className="flex flex-col items-center gap-3 md:w-1/3">
            <FaGraduationCap size={30} className="text-brand" />
            <h2 className="text-text-light font-bold text-xl lg:text-2xl">
              Government Science And Technical College, Area 3, Garki
            </h2>
            <p className="text-text text-lg lg:text-xl">
              Senior Secondary School Certificate
            </p>
            <p className="text-text text-lg lg:text-xl">2015 - 2018</p>
          </div>
          <span className="bg-background-light w-2 h-24 mx-auto rounded-lg md:w-24 md:h-2 md:my-auto lg:h-3 lg:w-28"></span>
          <div className="flex flex-col items-center gap-3 md:w-1/3">
            <FaGraduationCap size={30} className="text-brand" />
            <h2 className="text-text-light font-bold text-xl lg:text-2xl">
              Federal University Of Technology, Minna
            </h2>
            <p className="text-text text-lg lg:text-xl">Bachelor's Degree</p>
            <p className="text-text text-lg lg:text-xl">2018 - 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;
