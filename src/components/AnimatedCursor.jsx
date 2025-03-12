import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    const cursorText = cursorTextRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 1 });

    const updateCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", updateCursor);

    document.querySelectorAll("[data-follower-text]").forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        cursorText.innerHTML = item.dataset.followerText || "Click!";
        gsap.to(cursor, { width: "250px", height: "250px", opacity: 1, duration: 0.5 });
        gsap.to(cursorInner, { width: "250px", height: "250px", opacity: 1, duration: 0.4 });
        gsap.to(cursorText, { opacity: 1, duration: 0.3 });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(cursor, { width: "20px", height: "20px", duration: 0.2 });
        gsap.to(cursorInner, { width: 0, height: 0, opacity: 0, duration: 0.2 });
        gsap.to(cursorText, { opacity: 0, duration: 0.2 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999]">
      <div ref={cursorRef} className="w-5 h-5 bg-red-500 rounded-full opacity-1">
        <div ref={cursorInnerRef} className="absolute bg-white rounded-full opacity-0"></div>
        <span ref={cursorTextRef} className="absolute text-white text-sm font-medium opacity-0"></span>
      </div>
    </div>
  );
};

export default AnimatedCursor;
