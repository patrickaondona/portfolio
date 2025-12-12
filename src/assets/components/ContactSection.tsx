import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <section
        className="flex flex-col gap-y-16 w-full h-fit md:h-screen md:justify-between px-4 pt-[10vh] lg:pt-[10vh] shadow-lg scroll-mt-[12vh] lg:scroll-mt-[15vh] -z-20"
        id="contact-section"
      >
        <div className="flex flex-col items-center gap-20 md:items-center">
          <div className="flex flex-col gap-y-1 items-center">
            <h1
              className="text-text text-2xl lg:text-3xl font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact
            </h1>
            <span
              className="w-4 lg:w-6 h-1 lg:h-1.5 bg-brand rounded-full"
              data-aos="fade-up"
              data-aos-delay="250"
            ></span>
          </div>
          <p
            className="text-text-light text-lg lg:text-xl text-center md:max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I'm always open to new job opportunities or collaborating on some
            amazing new projects. Just send me a text on WhatsApp or Email me
            and I'll get back to you 💪.
          </p>
          <div className="flex flex-col gap-5 md:flex-row">
            <div
              className="bg-background-dark border border-solid border-brand flex flex-col items-center rounded-[5px] gap-2 px-[6vw] py-[2vh]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex gap-3 items-center text-brand text-lg lg:text-xl">
                <FaWhatsapp />
                <p>WhatsApp</p>
              </div>
              <a
                href="https://wa.link/xgtc4u"
                aria-label="WhatsApp link"
                className="text-text text-base lg:text-lg hover:text-brand"
              >
                +234 816 731 6226
              </a>
            </div>
            <div
              className="bg-background-dark border border-solid border-brand flex flex-col items-center rounded-[5px] gap-2 px-[6vw] py-[2vh]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex gap-3 items-center text-brand text-lg lg:text-xl">
                <FaEnvelope />
                <p>Email</p>
              </div>
              <a
                href="mailto: aondopat@gmail.com"
                aria-label="Email link"
                className="text-text text-base lg:text-lg hover:text-brand"
              >
                aondopat@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p className="text-text-light text-base self-start lg:text-lg mb-2">
          © 2025 Deabaver Aondona Patrick
        </p>
      </section>
    </>
  );
};

export default ContactSection;
