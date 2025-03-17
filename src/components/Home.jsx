import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const scrollRef = useRef(null);
  const circleTextRef = useRef(null);

  // Initialize Locomotive Scroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // Adjust smoothness
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  // Rotating animation effect
  useEffect(() => {
    let angle = 0;
    const interval = setInterval(() => {
      angle += 2;
      if (circleTextRef.current) {
        circleTextRef.current.style.transform = `rotate(${angle}deg)`;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={scrollRef}
      data-scroll-container
      className="min-h-screen flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg transition-all duration-300 px-6 relative text-center md:text-left"
    >
      <div data-scroll data-scroll-speed="1" className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight">
          At Bridge Group, we build digital assets and immersive experiences for purposeful brands.
        </h1>
        <p
          data-scroll
          data-scroll-speed="2"
          className="mt-4 text-gray-700 dark:text-gray-300 text-base md:text-lg"
        >
          We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
        </p>
      </div>

      {/* Rotating Circular Text */}
      <div
        data-scroll
        data-scroll-speed="3"
        className="absolute md:right-20 bottom-20 md:bottom-auto flex items-center mt-6 md:mt-0"
      >
        <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
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
      <div
        data-scroll
        data-scroll-speed="2"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">Scroll</p>
      </div>
    </section>
  );
};

export default Home;
