import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Sun, Moon } from "lucide-react";

const services = [
  { title: "CREATIVE", subcategories: ["Art direction", "Creative direction"] },
  { title: "DESIGN", subcategories: ["UX/UI Design", "Digital Design", "Web Design", "3D Design", "Interactive Design", "Illustration Design", "Graphic Design"] },
  { title: "ANIMATION", subcategories: ["2D Animation", "3D Animation"] },
  { title: "TECHNOLOGY", subcategories: ["Web Development", "App Development"] },
  { title: "PROJECT DELIVERY", subcategories: ["Agile Management", "Product Strategy"] },
  { title: "EXAMPLE PRODUCTS", subcategories: ["Prototypes", "Case Studies"] },
];

const ServiceAccordion = () => {
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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">

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
                <p key={subIndex} className="py-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {sub}
                </p>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccordion;
