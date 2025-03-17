import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-darkBg border-b border-gray-200 dark:border-gray-700 transition-all duration-300 z-50">
      <audio ref={audioRef} src="/public/music.mp3" loop preload="auto" />

      <h1 className="text-lg font-semibold text-black dark:text-darkText">Thirtysixstudio</h1>

      <button onClick={() => setDarkMode(!darkMode)} className="flex items-center bg-gray-300 dark:bg-gray-800 p-1 rounded-full transition-all duration-300">
        <Sun className={`h-4 w-4 text-yellow-500 ${darkMode ? "opacity-30" : "opacity-100"}`} />
        <Moon className={`h-4 w-4 ml-1 text-gray-900 dark:text-white ${darkMode ? "opacity-100" : "opacity-30"}`} />
      </button>

      <div className="hidden md:flex items-center space-x-8 text-black dark:text-darkText text-sm font-medium">
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">What we do</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Who we are</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">How we give back</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Talk to us</a>

        <button onClick={toggleMusic} className="p-1 transition-all duration-300 text-black dark:text-white cursor-pointer" aria-label="Toggle music">
          <div className={`w-6 h-6 flex items-end space-x-1 ${isPlaying ? 'opacity-100' : 'opacity-70'}`}>
            <div className={`w-1 bg-current ${isPlaying ? 'h-4 animate-pulse' : 'h-3'}`}></div>
            <div className={`w-1 bg-current ${isPlaying ? 'h-6 animate-pulse' : 'h-5'}`}></div>
            <div className={`w-1 bg-current ${isPlaying ? 'h-3 animate-pulse' : 'h-2'}`}></div>
            <div className={`w-1 bg-current ${isPlaying ? 'h-5 animate-pulse' : 'h-4'}`}></div>
          </div>
        </button>
      </div>

      <button className="md:hidden p-2 text-black dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-darkBg shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">What we do</a>
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">Who we are</a>
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">How we give back</a>
          <a href="#" className="text-black dark:text-darkText text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">Talk to us</a>

          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="flex items-center bg-gray-300 dark:bg-gray-800 p-2 rounded-full transition-all duration-300">
              <Sun className={`h-5 w-5 text-yellow-500 ${darkMode ? "opacity-30" : "opacity-100"}`} />
              <Moon className={`h-5 w-5 ml-2 text-gray-900 dark:text-white ${darkMode ? "opacity-100" : "opacity-30"}`} />
            </button>

            <button onClick={toggleMusic} className="p-2 transition-all duration-300 text-black dark:text-white cursor-pointer" aria-label="Toggle music">
              <div className={`w-6 h-6 flex items-end space-x-1 ${isPlaying ? 'opacity-100' : 'opacity-70'}`}>
                <div className={`w-1 bg-current ${isPlaying ? 'h-4 animate-pulse' : 'h-3'}`}></div>
                <div className={`w-1 bg-current ${isPlaying ? 'h-6 animate-pulse' : 'h-5'}`}></div>
                <div className={`w-1 bg-current ${isPlaying ? 'h-3 animate-pulse' : 'h-2'}`}></div>
                <div className={`w-1 bg-current ${isPlaying ? 'h-5 animate-pulse' : 'h-4'}`}></div>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;