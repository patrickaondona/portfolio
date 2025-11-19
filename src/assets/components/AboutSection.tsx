import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myPic from "../images/my-pic.jpg";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <section
        className="flex flex-col md:flex-row items-center w-full h-fit md:h-screen py-[10vh] px-4 scroll-mt-[12vh] lg:scroll-mt-[15vh] gap-y-4 -z-20 lg:px-8 md:gap-x-6 lg:gap-x-10 xl:gap-x-20"
        id="about-section"
      >
        <img
          className="h-60 object-contain shadow-2xl mx-auto md:h-52 lg:h-60 lg:mx-0 xl:h-80"
          data-aos="fade-up"
          src={myPic}
          alt="Deabaver Aondona Patrick's Photo"
        />
        <div className="flex flex-col w-full text-center max-w-xl gap-3 md:max-w-4xl md:text-left lg:gap-5">
          <div
            className="flex flex-col gap-y-1 items-center md:items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-text-light text-xl lg:text-2xl font-medium">
              About Me
            </h1>
            <span className="w-4 2xl:w-6 h-1 2xl:h-1.5 bg-brand rounded-full"></span>
          </div>
          <p
            className="flex flex-wrap justify-center md:justify-normal gap-x-1 text-2xl lg:text-3xl text-text font-semibold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>Deabaver</span> Aondona Patrick
          </p>
          <p
            className="text-text-light text-lg lg:text-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hey! I'm Deabaver Aondona Patrick. I've been close to a computer
            since an early age, and been passionate about it ever since. I'm a
            self-taught developer, and I've been learning and building projects
            for the past 3 years. I'm currently working as a freelance
            developer.
          </p>
          <p
            className="text-text-light text-lg lg:text-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            I'm a Dynamic Front End Developer with a proven track record at
            NaijaCodePadi, specializing in HTML5, CSS3, and JavaScript. Adept at
            optimizing web performance and fostering team collaboration, I
            consistently deliver innovative solutions that enhance user
            experience and drive project success. Committed to maintaining
            high-quality standards and staying ahead of industry trends.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
