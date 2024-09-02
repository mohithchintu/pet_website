import React from "react";

const HamsterWheel = () => {
  return (
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      className="relative w-[12em] h-[12em] text-[14px]"
    >
      <div className="absolute top-0 left-0 w-full h-full rounded-full z-20 bg-[radial-gradient(100%_100%_at_center,_rgba(96,96,96,0)_47.8%,_rgb(153,153,153)_48%)]"></div>
      <div className="absolute w-[7em] h-[3.75em] top-1/2 left-[calc(50%-3.5em)] transform rotate-[4deg] translate-x-[-0.8em] translate-y-[1.85em] origin-[50%_0] z-10 animate-hamster">
        <div className="absolute w-[4.5em] h-[3em] top-[0.25em] left-[2em] bg-[hsl(30,90%,90%)] rounded-[50%_30%_50%_30%_/_15%_60%_40%_40%] shadow-[0.1em_0.75em_0_hsl(30,90%,55%)_inset,_0.15em_-0.5em_0_hsl(30,90%,80%)_inset] origin-[17%_50%] animate-hamsterBody">
          <div className="absolute w-[2.75em] h-[2.5em] top-0 left-[-2em] bg-[hsl(30,90%,55%)] rounded-[70%_30%_0_100%/_40%_25%_25%_60%] shadow-[0_-0.25em_0_hsl(30,90%,80%)_inset,_0.75em_-1.55em_0_hsl(30,90%,90%)_inset] origin-[100%_50%] animate-hamsterHead">
            <div className="absolute w-[0.75em] h-[0.75em] top-[-0.25em] right-[-0.25em] bg-[hsl(0,90%,85%)] rounded-full shadow-[-0.25em_0_hsl(30,90%,55%)_inset] origin-[50%_75%] animate-hamsterEar"></div>
            <div className="absolute w-[0.5em] h-[0.5em] top-[0.375em] left-[1.25em] bg-black rounded-full animate-hamsterEye"></div>
            <div className="absolute w-[0.2em] h-[0.25em] top-[0.75em] left-0 bg-[hsl(0,90%,75%)] rounded-[35%_65%_85%_15%/_70%_50%_50%_30%]"></div>
          </div>
          <div className="absolute w-[1em] h-[1.5em] top-[2em] left-[0.5em] bg-gradient-to-b from-[hsl(30,90%,80%)] to-[hsl(0,90%,75%)] clip-path-[polygon(0_0,_100%_0,_70%_80%,_60%_100%,_0%_100%,_40%_80%)] origin-[50%_0] transform-[rotate(15deg)_translateZ(-1px)] animate-hamsterFRLimb"></div>
          <div className="absolute w-[1em] h-[1.5em] top-[2em] left-[0.5em] bg-gradient-to-b from-[hsl(30,90%,90%)] to-[hsl(0,90%,85%)] clip-path-[polygon(0_0,_100%_0,_70%_80%,_60%_100%,_0%_100%,_40%_80%)] origin-[50%_0] transform-[rotate(15deg)] animate-hamsterFLLimb"></div>
          <div className="absolute w-[1.5em] h-[2.5em] top-[1em] left-[2.8em] bg-gradient-to-b from-[hsl(30,90%,80%)] to-[hsl(0,90%,75%)] rounded-[0.75em_0.75em_0_0] clip-path-[polygon(0_0,_100%_0,_100%_30%,_70%_90%,_70%_100%,_30%_100%,_40%_90%,_0%_30%)] origin-[50%_30%] transform-[rotate(-25deg)_translateZ(-1px)] animate-hamsterBRLimb"></div>
          <div className="absolute w-[1.5em] h-[2.5em] top-[1em] left-[2.8em] bg-gradient-to-b from-[hsl(30,90%,90%)] to-[hsl(0,90%,85%)] rounded-[0.75em_0.75em_0_0] clip-path-[polygon(0_0,_100%_0,_100%_30%,_70%_90%,_70%_100%,_30%_100%,_40%_90%,_0%_30%)] origin-[50%_30%] transform-[rotate(-25deg)] animate-hamsterBLLimb"></div>
          <div className="absolute w-[1em] h-[0.5em] top-[1.5em] right-[-0.5em] bg-[hsl(0,90%,85%)] rounded-[0.25em_50%_50%_0.25em] shadow-[0_-0.2em_0_hsl(0,90%,75%)_inset] origin-[0.25em_0.25em] transform-[rotate(30deg)_translateZ(-1px)] animate-hamsterTail"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-full animate-spoke bg-[radial-gradient(100%_100%_at_center,_rgb(153,153,153)_4.8%,_rgba(153,153,153,0)_5%),_linear-gradient(rgba(140,140,140,0)_46.9%,_rgb(166,166,166)_47%_52.9%,_rgba(166,166,166,0)_53%)_50%_50%/_99%_99%_no-repeat]"></div>
    </div>
  );
};

export default HamsterWheel;
