import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  return (
    <div className="min-h-[50vh] bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Accordion Section */}
      <div className="w-full max-w-3xl mx-auto py-10">
        {services.map((service, index) => (
          <div key={index} className="border-b border-black dark:border-white transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center py-4 px-6 text-lg font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {service.title}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                className={`w-8 h-8 flex items-center justify-center border rounded-full transition-colors duration-300 ${
                  openIndex === index
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "border-black dark:border-white"
                }`}
              >
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </motion.div>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden px-6"
            >
              {service.subcategories.map((sub, subIndex) => (
                <motion.div
                  key={subIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: subIndex * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, opacity: 0.9 }}
                  className="py-3 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                >
                  {sub}
                  {subIndex !== service.subcategories.length - 1 && (
                    <div className="w-full border-b border-gray-400 dark:border-gray-600 my-2"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesOpen;
