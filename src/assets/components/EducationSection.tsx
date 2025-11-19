import { FaGraduationCap } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <section
        className="flex flex-col gap-y-20 lg:gap-y-32 xl:gap-y-38 items-center px-2 py-[10vh] lg:px-4 shadow-lg scroll-mt-[12vh] lg:scroll-mt-[15vh] w-full h-fit md:h-screen -z-20"
        id="education-section"
      >
        <div className="flex flex-col gap-y-1 items-center">
          <h1
            className="text-text text-2xl lg:text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Education
          </h1>
          <span
            className="w-4 lg:w-6 h-1 lg:h-1.5 bg-brand rounded-full"
            data-aos="fade-up"
            data-aos-delay="250"
          ></span>
        </div>
        <div className="flex flex-col w-full text-center gap-y-8 md:flex-row md:justify-center lg:gap-x-6">
          <div className="flex flex-col items-center gap-y-3 md:w-1/3">
            <span data-aos="fade-up" data-aos-delay="300">
              <FaGraduationCap size={30} className="text-brand" />
            </span>
            <h2
              className="text-text-light font-bold text-xl lg:text-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              St. Peter's College, Garaku
            </h2>
            <p
              className="text-text text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Junior Secondary School Certificate
            </p>
            <p
              className="text-text text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              2012 - 2015
            </p>
          </div>
          <span
            className="bg-background-light w-2 h-24 mx-auto rounded-lg md:w-24 md:h-2 md:my-auto lg:h-3 lg:w-28"
            data-aos="fade-up"
            data-aos-delay="300"
          ></span>
          <div className="flex flex-col items-center gap-3 md:w-1/3">
            <span data-aos="fade-up" data-aos-delay="300">
              <FaGraduationCap size={30} className="text-brand" />
            </span>
            <h2
              className="text-text-light font-bold text-xl lg:text-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Government Science And Technical College, Area 3, Garki
            </h2>
            <p
              className="text-text text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Senior Secondary School Certificate
            </p>
            <p
              className="text-text text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              2015 - 2018
            </p>
          </div>
          <span
            className="bg-background-light w-2 h-24 mx-auto rounded-lg md:w-24 md:h-2 md:my-auto lg:h-3 lg:w-28"
            data-aos="fade-up"
            data-aos-delay="300"
          ></span>
          <div className="flex flex-col items-center gap-3 md:w-1/3">
            <span data-aos="fade-up" data-aos-delay="300">
              <FaGraduationCap size={30} className="text-brand" />
            </span>
            <h2
              className="text-text-light font-bold text-xl lg:text-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            > 
              Federal University Of Technology, Minna
            </h2>
            <p
              className="text-text text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Bachelor's Degree
            </p>
            <p
              className="text-text text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              2018 - 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;
