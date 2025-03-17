import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const descriptionLines = [
  "We provide you with captivating design, interactive animations,",
  "reliable code, and immaculate project coordination.",
  "Whether you need a campaign built from scratch",
  "or assistance at a specific phase, we've got you covered."
];

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1, // Stagger effect for each word
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const OurServices = () => {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const textRefs = useRef([]);
  const isInView = useInView(ref, { margin: "-50px", triggerOnce: false });

  useEffect(() => {
    const headingElement = headingRef.current;
    if (headingElement) {
      gsap.fromTo(
        headingElement,
        { opacity: 0.1, y: 20, rotate: 2, transformOrigin: "0% 50%" },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingElement,
            start: "top bottom-=10%",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }

    textRefs.current.forEach((textElement) => {
      if (textElement) {
        const words = textElement.querySelectorAll(".word-reveal");
        if (words.length > 0) {
          gsap.fromTo(
            words,
            { opacity: 0.2, y: 15, filter: "blur(4px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              stagger: 0.05,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: textElement,
                start: "top bottom-=10%",
                end: "bottom center",
                scrub: true,
              },
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#faf7f5] dark:bg-black px-4 sm:px-6 md:px-10 py-10">
      <div className="w-full max-w-4xl flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="text-left">
          <h4
            ref={headingRef}
            className="text-xs sm:text-sm font-semibold text-black dark:text-white tracking-wide uppercase"
          >
            Our Services
          </h4>
        </div>

        <div ref={ref} className="w-full mt-6 flex flex-col gap-4">
          {descriptionLines.map((line, index) => (
            <motion.p
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="text-[20px] sm:text-[24px] md:text-[32px] leading-[1.4] font-normal text-black dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            >
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-1 sm:mr-2 word-reveal"
                  custom={wordIndex}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={wordVariants}
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;