import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  // Check localStorage for theme preference
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme on load & when toggled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-darkBg border-b border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 z-50">
      
      {/* Logo */}
      <h1 className="text-lg font-semibold text-black dark:text-darkText">
        Bridge Group Solutions
      </h1>

      {/* Light/Dark Mode Toggle (Centered) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center bg-gray-300 dark:bg-gray-800 p-2 rounded-full transition-all duration-300"
      >
        <Sun className={`h-5 w-5 text-yellow-500 ${darkMode ? "opacity-30" : "opacity-100"}`} />
        <Moon className={`h-5 w-5 ml-2 text-gray-900 dark:text-white ${darkMode ? "opacity-100" : "opacity-30"}`} />
      </button>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-black dark:text-darkText text-sm font-medium">
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">What we do</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Who we are</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">How we give back</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Talk to us</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
