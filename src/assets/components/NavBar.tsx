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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-[15%] fixed z-10 top-0 bg-white">
      <nav className="w-full h-full flex justify-center items-center relative shadow-md">
        <div className="w-full flex justify-between px-6">
          <span className="flex flex-wrap gap-1 text-xl lg:text-2xl font-bold">
            <p className="text-text">Deabaver</p>
            <p className="text-brand">Aondona Patrick</p>
          </span>

          {/* Desktop Menu */}
          <ul className="font-bold gap-10 hidden lg:flex text-base lg:text-lg lg:gap-8">
            <li className="text-text hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
              <a href="#about-section" className="scroll-smooth">
                About
              </a>
            </li>
            <li className="text-text hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
              <a href="#project-section" className="scroll-smooth">
                Projects
              </a>
            </li>
            <li className="text-text hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
              <a href="#education-section" className="scroll-smooth">
                Education
              </a>
            </li>
            <li className="text-text hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
              <a href="#skills-section" className="scroll-smooth">
                Skills
              </a>
            </li>
            <li className="text-text hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500">
              <a href="#contact-section" className="scroll-smooth">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex justify-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white flex flex-col absolute left-0 right-0 top-full z-20 w-full h-screen transition-all duration-500 ease-in-out">
            <ul className="border border-y-gray-300 flex flex-col items-center md:items-start md:pl-4 justify-around font-bold text-lg text-center h-[60vh] md:h-[55vh]">
              <li
                className="text-text text-xl w-fit hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500"
                onClick={() => setIsOpen(false)}
              >
                <a href="#about-section" className="scroll-smooth">
                  About
                </a>
              </li>
              <li
                className="text-text text-xl w-fit hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#project-section" className="scroll-smooth">
                  Projects
                </a>
              </li>
              <li
                className="text-text text-xl w-fit hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#education-section" className="scroll-smooth">
                  Education
                </a>
              </li>
              <li
                className="text-text text-xl w-fit hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#skills-section" className="scroll-smooth">
                  Skills
                </a>
              </li>
              <li
                className="text-text text-xl w-fit hover:text-brand hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <a href="#contact-section" className="scroll-smooth">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex flex-col items-center justify-around h-[25vh]">
              <div className="flex flex-col items-center gap-1">
                <p className="text-text font-semi-bold text-base">
                  Contact for more information
                </p>
                <a
                  href="tel:+2348167316226"
                  className="text-brand text-[1rem] font-bold hover:text-brand-dark"
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
                  <FaLinkedin className="hover:text-text text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://www.instagram.com/patrick.aondona?igsh=MWhzcjhxODlleWZrcg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-text text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://github.com/patrickaondona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-text text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://wa.link/xgtc4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="hover:text-text text-brand text-2xl transition-all hover:-translate-y-3" />
                </a>
                <a
                  href="https://x.com/patrick_aondona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-text text-brand text-2xl transition-all hover:-translate-y-3" />
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
