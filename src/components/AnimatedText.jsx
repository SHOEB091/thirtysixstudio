import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowAnimation(currentScrollY > lastScrollY); // Show animation when scrolling down
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative h-1/2 w-full bg-[#faf7f5] dark:bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={showAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="text-center px-4"
      >
        <h1 className="text-[8vw] font-bold text-black dark:text-white whitespace-nowrap">
          Bridge Group Solutions!
        </h1>
      </motion.div>
    </div>
  );
}