import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-[calc(100%-85vh)] fixed z-10 top-0 bg-white dark:bg-background-dark">
      <nav className="w-full h-full flex justify-center items-center relative shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
        <div className="w-full flex justify-between px-6">
          <span className="flex flex-wrap gap-1 text-xl lg:text-2xl font-bold">
            <p className="text-text dark:text-text-light">Deabaver</p>
            <p className="text-brand">Aondona Patrick</p>
          </span>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-4 lg:items-center">
            <ul className="font-bold gap-10 hidden lg:flex text-base lg:text-lg lg:gap-8">
              <li className="text-text dark:text-text-light hover:text-brand dark:hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
                <a href="#about-section" className="scroll-smooth">
                  About
                </a>
              </li>
              <li className="text-text dark:text-text-light hover:text-brand dark:hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
                <a href="#project-section" className="scroll-smooth">
                  Projects
                </a>
              </li>
              <li className="text-text dark:text-text-light hover:text-brand dark:hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
                <a href="#education-section" className="scroll-smooth">
                  Education
                </a>
              </li>
              <li className="text-text dark:text-text-light hover:text-brand dark:hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
                <a href="#skills-section" className="scroll-smooth">
                  Skills
                </a>
              </li>
              <li className="text-text dark:text-text-light hover:text-brand dark:hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
                <a href="#contact-section" className="scroll-smooth">
                  Contact
                </a>
              </li>
            </ul>
            <DarkModeToggle />
          </div>
          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center justify-center gap-4 dark:text-text-light">
            <DarkModeToggle />
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden flex flex-col absolute left-0 right-0 top-full z-20 w-full h-screen transition-all duration-500 ease-in-out">
            <ul
              className="bg-white dark:bg-background-dark border-b border-t border-gray-300 dark:border-brand-border flex flex-col items-center md:items-start md:pl-4 justify-around font-bold text-lg text-center h-[60vh] md:h-[55vh]"
              data-aos="my-custom-fade-down"
              data-aos-delay="200"
            >
              <li
                className="text-text dark:text-text-light text-xl w-fit hover:text-brand dark:hover:text-brand hover:scale-110 hover:transition-all hover:duration-500"
                onClick={() => setIsOpen(false)}
              >
                <a href="#about-section" className="scroll-smooth">
                  About
                </a>
              </li>
              <li
                className="text-text dark:text-text-light text-xl w-fit hover:text-brand dark:hover:text-brand hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#project-section" className="scroll-smooth">
                  Projects
                </a>
              </li>
              <li
                className="text-text dark:text-text-light text-xl w-fit hover:text-brand dark:hover:text-brand hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#education-section" className="scroll-smooth">
                  Education
                </a>
              </li>
              <li
                className="text-text dark:text-text-light text-xl w-fit hover:text-brand dark:hover:text-brand hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#skills-section" className="scroll-smooth">
                  Skills
                </a>
              </li>
              <li
                className="text-text dark:text-text-light text-xl w-fit hover:text-brand dark:hover:text-brand hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#contact-section" className="scroll-smooth">
                  Contact
                </a>
              </li>
            </ul>
            <div
              className="bg-white dark:bg-background-dark flex flex-col items-center justify-around h-[28vh] md:h-[33vh]"
              data-aos="my-custom-fade-down"
              data-aos-delay="600"
            >
              <div className="flex flex-col items-center gap-1">
                <p className="text-text dark:text-text-light font-semibold text-base">
                  Contact for more information
                </p>
                <a
                  href="tel:+2348167316226"
                  className="text-brand text-[1rem] font-bold hover:text-text-dark dark:hover:text-text-light"
                >
                  +234 816 731 6226
                </a>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/patrick-aondona-deabaver"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-text dark:hover:text-text-light text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://www.instagram.com/patrick.aondona?igsh=MWhzcjhxODlleWZrcg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-text dark:hover:text-text-light text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://github.com/patrickaondona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-text dark:hover:text-text-light text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://wa.link/xgtc4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="hover:text-text dark:hover:text-text-light text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://x.com/patrick_aondona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-text dark:hover:text-text-light text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

