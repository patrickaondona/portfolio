import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFileDownload,
} from "react-icons/fa";


const IntroSection = () => {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(180deg, #a177b4 -49.22%, #f9f0fe 21.43%)",
        }}
        className="flex flex-col items-center text-center justify-around h-screen px-4 pt-[15vh] text-text shadow-lg -z-20"
      >
        <span className="bg-brand text-white font-medium px-4 py-2 text-sm md:text-base rounded-full animate-bounce lg:px-5 lg:py-3">
          Hello 👋
        </span>
        <div className="flex flex-col items-center gap-y-1.5 md:gap-y-3.5">
          <h1 className="text-2xl lg:text-3xl xl:text-5xl flex flex-wrap justify-center md:gap-x-1 lg:gap-x-2 xl:gap-x-3 max-w-[70%] font-bold md:max-w-full">
            <span className="text-text transition duration-500 ease-in-out">Deabaver</span>
            <span className="text-brand">Aondona Patrick</span>
          </h1>
          <p className="text-lg lg:text-2xl max-w-lg text-text md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            Frontend Developer with a passion for creating responsive,
            user-friendly websites and web applications.
          </p>
        </div>
        <div className="flex flex-col gap-y-5 items-center md:gap-y-8">
          <div className="flex gap-x-3 md:gap-5">
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
            href="/src/assets/docs/Deabaver_Aondona_Patrick_Resume.pdf"
            target="_blank"
            download="Deabaver_Aondona_Patrick_Resume.pdf"
            className="flex items-center gap-2 bg-white border border-solid border-brand text-brand px-4 py-2 rounded-md text-base lg:text-xl font-bold hover:bg-brand hover:text-white transition-all hover:-translate-y-3 hover:duration-500"
            rel="noopener noreferrer"
          >
            <FaFileDownload />
            Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
