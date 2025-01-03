import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const MobileCounter = () => {
  const [isInViewMobile, setIsInViewMobile] = useState(false);
  const sectionRefMobile = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewMobile(true);
        } else {
          setIsInViewMobile(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRefMobile.current) {
      observer.observe(sectionRefMobile.current);
    }

    return () => {
      if (sectionRefMobile.current) {
        observer.unobserve(sectionRefMobile.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRefMobile}
      className="md:hidden place-items-center gap-4 md:gap-8 relative z-40 w-full md:w-[25rem] md:right-0 mt-8"
    >
      {/* Retention Rates */}
      <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-t-md flex items-center justify-center">
        <span className="relative text-lg md:text-5xl text-cyan-600 font-extrabold">
          <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
          <span className="z-10 relative">
            {isInViewMobile && (
              <CountUp start={0} end={89} duration={5} suffix="%" />
            )}
          </span>
        </span>
        <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
          Clients & employees retention rates
        </span>
      </div>

      {/* Campaigns Managed */}
      <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-t-md flex items-center justify-center">
        <span className="relative text-5xl text-cyan-600 font-extrabold">
          <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
          <span className="z-10 relative">
            {isInViewMobile && (
              <CountUp start={0} end={8} duration={5} suffix="+" />
            )}
          </span>
        </span>
        <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
          Countries where we manage campaigns
        </span>
      </div>

      {/* Registered Businesses */}
      <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-t-md flex items-center justify-center">
        <span className="relative text-5xl text-cyan-600 font-extrabold">
          <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
          <span className="z-10 relative">
            {isInViewMobile && (
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
  );
};

export default MobileCounter;
