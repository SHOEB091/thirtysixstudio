import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function StudioSection() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl">
        {/* Empty Left Side (Only visible on larger screens) */}
        <div className="hidden md:block" />

        {/* Right Content Side */}
        <motion.div
          ref={textRef}
          className="flex flex-col justify-center text-black dark:text-white space-y-4 sm:space-y-6 text-left transition-colors duration-300"
        >
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
              Our studio represents <br className="hidden sm:block" />
              today's modern world: <br className="hidden sm:block" />
              <span className="font-semibold">
                progressive, inclusive, <br className="hidden sm:block" />
                and socially engaged.
              </span>
            </h1>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed dark:text-gray-300">
            Thirtysixstudio was founded by Gita Jagessar, a queer person of color
            and seasoned production director from Amsterdam. With over 13 years of
            experience in digital advertising, Gita has worked with renowned global
            brands such as Netflix, Converse, Travis Scott, Ben & Jerry's, Adidas,
            Cash App, and many more.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 border border-black dark:border-white rounded-full text-xs sm:text-sm font-medium transition-all self-start hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
