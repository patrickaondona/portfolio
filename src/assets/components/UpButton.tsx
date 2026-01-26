import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const UpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 p-3 md:p-4 rounded-full bg-brand text-white dark:text-black shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)]dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:bg-brand-dark transition-transform duration-300 transform ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      title="Back to top"
    >
      <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
};

export default UpButton;
