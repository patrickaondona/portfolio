const AboutSection = () => {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center w-full h-fit md:h-screen py-[25%] px-4 scroll-mt-[15%] gap-y-4 -z-20 md:flex-row lg:px-8 md:gap-x-6 lg:gap-x-10 xl:gap-x-20"
        id="about-section"
      >
        <img
          className="h-60 object-contain shadow-2xl mx-auto md:h-52 lg:h-60 lg:mx-0 xl:h-80"
          src="/src/assets/images/my-pic.jpg"
          alt="Deabaver Aondona Patrick's Photo"
        />
        <div className="flex flex-col w-full text-center max-w-xl gap-3 md:max-w-4xl md:text-left lg:gap-5">
          <div className="flex flex-col gap-y-1 items-center md:items-start">
            <h1 className="text-text-light text-xl lg:text-2xl font-medium">
              About Me
            </h1>
            <span className="w-4 2xl:w-6 h-1 2xl:h-1.5 bg-brand rounded-full"></span>
          </div>
          <p className="flex flex-wrap justify-center md:justify-normal gap-x-1 text-2xl lg:text-3xl text-text font-semibold">
            <span>Deabaver</span> Aondona Patrick
          </p>
          <p className="text-text-light text-lg lg:text-xl">
            Hey! I'm Deabaver Aondona Patrick. I've been close to a computer
            since an early age, and been passionate about it ever since. I'm a
            self-taught developer, and I've been learning and building projects
            for the past 3 years. I'm currently working as a freelance
            developer.
          </p>
          <p className="text-text-light text-lg lg:text-xl">
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
