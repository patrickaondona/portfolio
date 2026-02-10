import { FaMoon, FaSun } from "react-icons/fa";
import { UseDarkMode } from "./UseDarkMode";

export default function DarkModeToggle() {
  const [, setIsDark] = UseDarkMode();

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-label="Toggle dark mode"
      className="
        relative h-8 w-14 rounded-full
        bg-background dark:bg-brand shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)]
        transition-colors duration-300 flex items-center
      "
    >
      <span
        className="
          absolute top-1 left-1 h-6 w-6 rounded-full
          bg-white
          transition-all duration-300
          dark:translate-x-6
        "
        aria-hidden="true"
      >
        <FaSun className="h-full w-full p-1 text-brand" />
      </span>

      <span
        className="
          absolute top-1 left-1 h-6 w-6 rounded-full
          bg-white dark:bg-background-dark
          transition-all duration-300
          translate-x-1 scale-0
          dark:translate-x-5 dark:scale-100
        "
        aria-hidden="true"
      >
        <FaMoon className="h-full w-full p-1 text-brand" />
      </span>
    </button>
  );
}

