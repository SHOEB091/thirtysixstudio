import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plus, Minus } from "lucide-react";

const roles = [
  "Project Managers",
  "Digital Producers",
  "Designers",
  "Illustrators",
  "Animators",
  "3D Artists",
  "Motion Designers",
  "Developers and Coders",
  "Creative Technologists",
  "Sound Engineers",
];

const hoverSound = "/public/hover1.mp3"; // Correct path for Vite public folder

const RolesOpen = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const containerRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  const playHoverSound = () => {
    const audio = new Audio(hoverSound);
    audio.play();
  };

  return (
    <section
      ref={containerRef}
      className="bg-white dark:bg-black text-black dark:text-white px-8 py-16 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header + Toggle button */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Roles Open</h3>
          <button
            onClick={toggleAccordion}
            className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm hover:bg-gray-900 dark:hover:bg-gray-100 transition"
          >
            {open ? <Minus size={16} /> : <Plus size={16} />} {open ? "Close" : "Add Role"}
          </button>
        </div>

        {/* Roles List Accordion */}
        <div
          className={`overflow-hidden transition-all duration-500 border-t border-b border-black dark:border-white ${
            open ? "max-h-[1000px] py-4" : "max-h-0"
          }`}
        >
          {roles.map((role, index) => (
            <div
              key={index}
              onMouseEnter={playHoverSound}
              className="relative group py-3 text-gray-700 dark:text-gray-300 transition-colors duration-300 border-b border-gray-400 dark:border-gray-600 px-4"
            >
              <span className="relative z-10 block text-md font-medium transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white dark:group-hover:text-black">
                {role}
              </span>
              <span className="absolute left-0 bottom-0 h-full w-full bg-black dark:bg-white transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesOpen;