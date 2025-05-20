import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer blue ring (broken circle) */}
        <circle
          cx="100"
          cy="100"
          r="85"
          stroke="#002E6D"
          strokeWidth="20"
          fill="none"
          strokeDasharray="430"
          strokeDashoffset="60"
          transform="rotate(-45 100 100)"
        />

        {/* Green connector */}
        <line
          x1="100"
          y1="100"
          x2="140"
          y2="60"
          stroke="#00D061"
          strokeWidth="8"
        />

        {/* Main green circle */}
        <circle cx="100" cy="100" r="40" fill="#00D061" />

        {/* Small green orbiting circle */}
        <circle cx="140" cy="60" r="12" fill="#00D061" />
      </svg>
    </div>
  );
};

export default Logo;
