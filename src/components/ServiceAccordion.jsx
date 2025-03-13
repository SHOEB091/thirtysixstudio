import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plus, Minus } from "lucide-react";

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
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="min-h-[50vh] bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="w-full max-w-3xl mx-auto py-10">
        {services.map((service, index) => (
          <div key={index} className="border-b border-black dark:border-white transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center py-4 px-6 text-lg font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {service.title}
              <div
                className={`w-8 h-8 flex items-center justify-center border rounded-full transition-colors duration-300 ${
                  openIndex === index ? "bg-black text-white dark:bg-white dark:text-black" : "border-black dark:border-white"
                }`}
              >
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "h-auto" : "h-0"}`}>
              {service.subcategories.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="relative group py-3 text-gray-700 dark:text-gray-300 transition-colors duration-300 border-b border-gray-400 dark:border-gray-600"
                >
                  <span className="relative z-10 block text-lg font-medium transition-all duration-300 group-hover:translate-y-[-5px] group-hover:text-white dark:group-hover:text-black">
                    {sub}
                  </span>
                  <span className="absolute left-0 bottom-0 h-full w-full bg-black dark:bg-white transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccordion;
