import { FaGithub, FaChrome } from "react-icons/fa";
import type { Project as ProjectType } from "../data/projects";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="border-b border-gray-300 dark:border-brand-border flex flex-col gap-y-6 md:px-10 lg:px-0 py-6 lg:py-14 xl:py-20 lg:flex-row lg:items-center lg:gap-x-6">
      <img
        className="rounded-xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] lg:w-1/2 lg:h-full"
        src={project.image}
        alt={`Screenshot of ${project.title} project`}
        data-aos="fade-up"
        data-aos-delay="200"
      />
      <div
        className="flex flex-col gap-y-4 py-6 text-left 2xl:gap-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="text-text dark:text-text-light text-xl lg:text-2xl font-semibold">
          {project.title}
        </h2>
        <p className="text-text-dark text-lg lg:text-xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt={`Technology ${index + 1}`}
              className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"
            />
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand flex gap-x-2 justify-center items-center font-semibold px-3 py-3 rounded-xl text-sm lg:text-lg text-white hover:bg-brand-dark hover:scale-105 hover:transition-all hover:duration-500"
            >
              {link.label}{" "}
              {link.icon === "github" ? <FaGithub /> : <FaChrome />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
