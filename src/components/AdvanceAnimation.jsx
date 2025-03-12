import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdvanceAnimation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate titles
    const titles = section.querySelectorAll('.title');
    titles.forEach((title) => {
      gsap.fromTo(title,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: title,
            start: 'top center+=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate paragraphs
    const paragraphs = section.querySelectorAll('.paragraph');
    paragraphs.forEach((paragraph) => {
      gsap.fromTo(paragraph,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: paragraph,
            start: 'top center+=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="home__presentation relative min-h-screen bg-white dark:bg-black py-20">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '-8s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '-12s' }}></div>

      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {[
            { title: "Agile", text: "We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly." },
            { title: "Innovative", text: "We use carefully crafted digital processes and new technology to ensure our initiatives run smoothly, allowing our lean and international team to focus on what matters and maximize momentum and opportunity." },
            { title: "Cultured", text: "We are progressive and community-focused and don't believe in maintaining the status quo or sticking to outdated ways. Our people reflect today's realities and stay connected to culture." }
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <h2 className="title text-6xl md:text-8xl font-bold text-black dark:text-white">{item.title}</h2>
              </div>
              <div className="md:col-span-5">
                <p className="paragraph text-lg md:text-xl text-gray-600 dark:text-gray-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvanceAnimation;