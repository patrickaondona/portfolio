import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFileDownload,
} from "react-icons/fa";
import resumePDF from "../docs/Deabaver_Aondona_Patrick_Resume.pdf";

const IntroSection = () => {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(180deg, #a177b4 -49.22%, #f9f0fe 21.43%)",
        }}
        className="flex flex-col gap-5 items-center justify-center text-center h-fit md:h-screen mt-[15vh] py-[14%] md:py-[7%] px-4 text-text shadow-lg -z-20"
      >
        <span
          className="bg-brand text-white font-medium px-4 py-2 w-fit text-sm md:text-base rounded-full animate-bounce lg:px-5 lg:py-3"
          data-aos="my-custom-fade-up"
          data-aos-delay="250"
        >
          Hello 👋
        </span>
        <div className="flex flex-col items-center gap-y-5">
          <h1 className="text-2xl lg:text-3xl xl:text-5xl flex flex-wrap justify-center gap-x-1 max-w-[70%] font-bold md:max-w-full">
            <span
              className="text-text"
              data-aos="my-custom-fade-up"
              data-aos-delay="300"
            >
              Deabaver
            </span>
            <span
              className="text-brand"
              data-aos="my-custom-fade-up"
              data-aos-delay="500"
            >
              Aondona Patrick
            </span>
          </h1>
          <p
            className="text-lg lg:text-2xl max-w-lg text-text md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
            data-aos="my-custom-fade-up"
            data-aos-delay="700"
          >
            Frontend Developer with a passion for creating responsive,
            user-friendly websites and web applications.
          </p>
          <div className="flex flex-col gap-y-5 items-center md:gap-y-8">
            <div
              className="flex gap-x-3 md:gap-5"
              data-aos="my-custom-fade-up"
              data-aos-delay="900"
            >
              <a
                href="https://www.linkedin.com/in/patrick-aondona-deabaver"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text text-brand text-3xl lg:text-4xl transition-all hover:-translate-y-3 hover:duration-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/patrick.aondona?igsh=MWhzcjhxODlleWZrcg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text text-brand text-3xl lg:text-4xl transition-all hover:-translate-y-3 hover:duration-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/patrickaondona"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text text-brand text-3xl lg:text-4xl transition-all hover:-translate-y-3 hover:duration-500"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.link/xgtc4u"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text text-brand text-3xl lg:text-4xl transition-all hover:-translate-y-3 hover:duration-500"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com/patrick_aondona"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text text-brand text-3xl lg:text-4xl transition-all hover:-translate-y-3 hover:duration-500"
              >
                <FaTwitter />
              </a>
            </div>
            <a
              href={resumePDF}
              target="_blank"
              download="Deabaver_Aondona_Patrick_Resume.pdf"
              className="flex items-center gap-2 bg-white border border-solid border-brand text-brand px-4 py-2 rounded-md text-base lg:text-xl font-bold hover:bg-brand hover:text-white transition-all hover:-translate-y-3 hover:duration-500"
              data-aos="my-custom-fade-up"
              data-aos-delay="1100"
              rel="noopener noreferrer"
            >
              <FaFileDownload />
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
