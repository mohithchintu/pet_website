import React from "react";

const PawLoader = ({
  size = 50,
  color = "#d31145",
  direction = "right",
  pawCount = 6,
  speed = 2050,
}) => {
  const rotation = {
    right: "rotate-90",
    left: "-rotate-90",
    up: "rotate-0",
    down: "rotate-180",
  }[direction];

  return (
    <div
      className={`absolute top-[25%] left-1/2 transform ${rotation} -translate-x-1/2`}
      style={{
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size * 3}px`,
        color,
      }}
    >
      {[...Array(pawCount)].map((_, i) => (
        <div
          key={i}
          className={`w-[1em] h-[1em] opacity-0 
                      ${
                        i % 2 === 0
                          ? "rotate-[10deg] translate-x-[125%]"
                          : "-rotate-[10deg]"
                      }
                      animate-[pawAnimation_${speed}ms_ease-in-out_infinite]`}
          style={{
            animationDelay: `${(i + 1) * -0.25 + 1.5}s`,
          }}
        >
          <svg className="w-full h-full fill-current">
            <use xlinkHref="#paw" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default PawLoader;
