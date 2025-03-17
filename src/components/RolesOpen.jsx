import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    title: "Roles Open",
    subcategories: [
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
    ],
  },
];

const RolesOpen = () => {
  const [openIndex, setOpenIndex] = useState(null);
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-[50vh] bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-4 sm:px-6">
      {/* Accordion Section */}
      <div className="w-full max-w-3xl mx-auto py-8 sm:py-10">
        {services.map((service, index) => (
          <div key={index} className="border-b border-black dark:border-white transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 text-lg sm:text-xl font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {service.title}
              <div
                className={`w-8 h-8 flex items-center justify-center border rounded-full transition-colors duration-300 ${
                  openIndex === index
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "border-black dark:border-white"
                }`}
              >
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {service.subcategories.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="relative group py-2 sm:py-3 text-gray-700 dark:text-gray-300 transition-colors duration-300 border-b border-gray-400 dark:border-gray-600"
                >
                  <span className="relative z-10 block text-base sm:text-lg font-medium transition-all duration-300 sm:group-hover:translate-y-[-5px] sm:group-hover:text-white dark:sm:group-hover:text-black">
                    {sub}
                  </span>
                  <span className="absolute left-0 bottom-0 h-full w-full bg-black dark:bg-white transform scale-y-0 sm:group-hover:scale-y-100 origin-bottom transition-transform duration-300"></span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesOpen;
