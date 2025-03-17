import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowAnimation(window.scrollY > 50); // Triggers after slight scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[50vh] w-full bg-[#faf7f5] dark:bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={showAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black dark:text-white whitespace-nowrap">
          Bridge Group Solutions!
        </h1>
      </motion.div>
    </div>
  );
}
