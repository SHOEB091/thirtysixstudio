import { useEffect, useRef } from "react";

const Home = () => {
  const circleTextRef = useRef(null);

  // Rotate animation effect
  useEffect(() => {
    let angle = 0;
    const interval = setInterval(() => {
      angle += 2;
      if (circleTextRef.current) {
        circleTextRef.current.style.transform = `rotate(${angle}deg)`;
      }
    }, 50); // Adjust speed by changing interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-lightBg dark:bg-darkBg transition-all duration-300 px-6 relative">
      <div className="max-w-3xl text-left">
        <h1 className="text-5xl font-bold text-black dark:text-white leading-tight">
          At Bridge Group, we build digital assets and immersive experiences for purposeful brands.
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
        </p>
      </div>

      {/* Rotating Circular Text */}
<div className="absolute right-20 flex items-center">
  <div className="relative w-40 h-40 flex items-center justify-center">
    <div ref={circleTextRef} className="absolute w-full h-full animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="circlePath"
          d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          fill="none"
        />
        <text className="text-xs">
          <textPath 
            href="#circlePath" 
            className="fill-gray-700 dark:fill-white transition-colors duration-300"
          >
            — Bridge Group Solutions — FOR ALL THINGS DIGITAL PRODUCTION —
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-gray-500 dark:text-gray-400">Scroll</p>
      </div>
    </section>
  );
};

export default Home;
