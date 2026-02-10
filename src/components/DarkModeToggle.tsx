import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";
import { UseDarkMode } from "./UseDarkMode";

export default function DarkModeToggle() {
  const { mode, setMode } = UseDarkMode();

  return (
    <div
      role="group"
      aria-label="Theme mode"
      className="
        relative h-7 w-20 rounded-full md:h-8 md:w-24
        bg-background dark:bg-brand shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)]
        transition-colors duration-300 grid grid-cols-3 place-items-center
      "
    >
      <button
        type="button"
        onClick={() => setMode("light")}
        aria-label="Set light mode"
        className="relative z-10 h-5 w-5 flex items-center justify-center md:h-6 md:w-6"
      >
        <FaSun
          className="h-3.5 w-3.5 text-brand dark:text-white md:h-4 md:w-4"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        onClick={() => setMode("dark")}
        aria-label="Set dark mode"
        className="relative z-10 h-5 w-5 flex items-center justify-center md:h-6 md:w-6"
      >
        <FaMoon
          className="h-3.5 w-3.5 text-brand dark:text-white md:h-4 md:w-4"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        onClick={() => setMode("system")}
        aria-label="Set system mode"
        className="relative z-10 h-5 w-5 flex items-center justify-center md:h-6 md:w-6"
      >
        <FaDesktop
          className="h-3.5 w-3.5 text-brand dark:text-white md:h-4 md:w-4"
          aria-hidden="true"
        />
      </button>
      <span
        className={`pointer-events-none absolute top-1 left-1 h-5 w-5 rounded-full bg-white dark:bg-background-dark transition-all duration-300 md:top-1 md:left-1 md:h-6 md:w-6 ${
          mode === "light"
            ? "translate-x-0"
            : mode === "dark"
              ? "translate-x-[26px] md:translate-x-8"
              : "translate-x-[52px] md:translate-x-16"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
