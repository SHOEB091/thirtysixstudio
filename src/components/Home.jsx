import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const scrollRef = useRef(null);
  const circleTextRef = useRef(null);

  // Initialize Locomotive Scroll
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

  // GSAP Rotation Animation
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
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-lightBg dark:bg-darkBg transition-all duration-300 px-6 sm:px-12 lg:px-[200px]"
    >
      {/* Left Section - Description */}
      <div
        data-scroll
        data-scroll-speed="1"
        className="max-w-2xl px-4 text-center lg:text-left lg:w-1/2"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-snug">
          At Bridge Group, we build digital assets and immersive experiences for purposeful brands.
        </h1>
        <p
          data-scroll
          data-scroll-speed="2"
          className="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-lg"
        >
          We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
        </p>
      </div>

      {/* Right Section - Rotating Circular Text */}
      <div
        data-scroll
        data-scroll-speed="3"
        className="mt-6 sm:mt-8 flex items-center justify-center w-full lg:w-1/2 lg:justify-end relative"
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "clamp(80px, 15vw, 180px)", // Dynamic size
            height: "clamp(80px, 15vw, 180px)",
          }}
        >
          <div ref={circleTextRef} className="absolute w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
              <text className="text-xs sm:text-sm">
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
    </section>
  );
};

export default Home;
