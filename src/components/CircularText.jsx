// src/components/CircularText.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CircularText = () => {
  const circleRef = useRef(null);
  
  useEffect(() => {
    const circle = circleRef.current;
    
    gsap.to(circle, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });
    
    return () => {
      gsap.killTweensOf(circle);
    };
  }, []);
  
  return (
    <div className="absolute right-0 md:right-10 top-20 md:top-40 w-32 h-32 md:w-40 md:h-40">
      <div ref={circleRef} className="w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-xs md:text-sm fill-black dark:fill-white">
            <textPath href="#circlePath">
              THIRTYSIXSTUDIO — DIGITAL PRODUCTION — FOR ALL THINGS DIGITAL —
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CircularText;