import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const LaptopCounter = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="col-span-3 w-full mt-24">
      <div className="hidden md:grid gap-4 md:gap-8 relative z-40 w-full md:w-[25rem] md:right-0">
        {/* Retention Rates */}
        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex">
          <span className="relative text-lg md:text-5xl text-blue-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">
              {isInView && (
                <CountUp start={0} end={89} duration={5} suffix="%" />
              )}
            </span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Clients & employees retention rates
          </span>
        </div>

        {/* Campaigns Managed */}
        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-5xl text-blue-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">
              {isInView && (
                <CountUp start={0} end={8} duration={5} suffix="+" />
              )}
            </span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Countries where we manage campaigns
          </span>
        </div>

        {/* Registered Businesses */}
        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-5xl text-blue-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">
              {isInView && (
                <CountUp
                  start={0}
                  end={2000}
                  duration={5}
                  separator=","
                  suffix="+"
                />
              )}
            </span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Businesses | SCUML | TIN Registered
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaptopCounter;
