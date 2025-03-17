import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Light/Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:flex items-center bg-gray-300 dark:bg-gray-800 p-2 rounded-full transition-all duration-300"
      >
        <Sun className={`h-5 w-5 text-yellow-500 ${darkMode ? "opacity-30" : "opacity-100"}`} />
        <Moon className={`h-5 w-5 ml-2 text-gray-900 dark:text-white ${darkMode ? "opacity-100" : "opacity-30"}`} />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-black dark:text-darkText text-sm font-medium">
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">What we do</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Who we are</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">How we give back</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Talk to us</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-black dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-darkBg shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">What we do</a>
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">Who we are</a>
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">How we give back</a>
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">Talk to us</a>
          
          {/* Light/Dark Mode Toggle in Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center bg-gray-300 dark:bg-gray-800 p-2 rounded-full transition-all duration-300"
          >
            <Sun className={`h-5 w-5 text-yellow-500 ${darkMode ? "opacity-30" : "opacity-100"}`} />
            <Moon className={`h-5 w-5 ml-2 text-gray-900 dark:text-white ${darkMode ? "opacity-100" : "opacity-30"}`} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
