import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Project from "./Project";
import { projects } from "../data/projects";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      className="bg-background-dark flex flex-col items-center px-4 lg:px-8 gap-y-12 text-center h-fit py-[18%] md:py-[7%] shadow-lg scroll-mt-[15vh] -z-20 text-text"
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
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
