import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const scrollRef = useRef(null);
  const circleTextRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    if (circleTextRef.current) {
      gsap.to(circleTextRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section
      ref={scrollRef}
      data-scroll-container
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-lightBg dark:bg-darkBg transition-all duration-300 px-4 sm:px-8 lg:px-[200px] gap-4 sm:gap-6 lg:gap-12"
    >
      {/* Left Section - Text */}
      <div
        data-scroll
        data-scroll-speed="1"
        className="max-w-2xl text-center lg:text-left lg:w-1/2"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-snug">
          At Bridge Group, we build digital assets and immersive experiences for purposeful brands.
        </h1>
        <p className="mt-2 sm:mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-lg">
          We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
        </p>
      </div>

      {/* Right Section - Rotating Circle */}
      <div
        data-scroll
        data-scroll-speed="3"
        className="flex items-center justify-center w-full lg:w-1/2"
      >
        <div className="relative flex items-center justify-center w-[120px] sm:w-[150px] lg:w-[180px] h-[120px] sm:h-[150px] lg:h-[180px]">
          <div ref={circleTextRef} className="absolute w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
              <text className="text-xs sm:text-sm">
                <textPath href="#circlePath" className="fill-gray-700 dark:fill-white transition-colors duration-300">
                  — Bridge Group Solutions — FOR ALL THINGS DIGITAL PRODUCTION —
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
