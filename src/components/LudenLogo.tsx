import React from "react";

interface LudenLogoProps {
  className?: string;
  size?: number;
}

export default function LudenLogo({ className = "", size = 48 }: LudenLogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(232,198,116,0.25)] transition-transform duration-500 hover:scale-105"
      >
        <defs>
          {/* Circular Text Path - Clockwise starting from bottom-left */}
          <path
            id="ludenLogoTextPath"
            d="M 18,50 A 32,32 0 1,0 82,50 A 32,32 0 1,0 18,50"
            fill="none"
            stroke="none"
          />
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Black circle fill matching the real image logo */}
        <circle cx="50" cy="50" r="48" fill="#08080a" />

        {/* Inner Gold Circular line matching the yellow circular band in real logo */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#ffd97d"
          strokeWidth="1.75"
          className="opacity-95"
        />

        {/* Circular text "LUDEN Co., Ltd." in white styled with clean font */}
        <text className="fill-white font-sans text-[7.5px] font-semibold tracking-[0.16em]" filter="url(#subtleGlow)">
          <textPath href="#ludenLogoTextPath" startOffset="18%">
            LUDEN Co., Ltd.
          </textPath>
        </text>

        {/* Elegant Handwritten Cursive white 'L' matching the real uploaded logo */}
        <path
          d="M 40 43 
             C 38 38, 44 36, 44 40 
             C 44 44, 38 44, 40 41 
             C 43 35, 52 22, 59 22 
             C 65 22, 59 33, 51 46 
             C 44 57, 35 66, 31 64 
             C 28 62, 28 55, 33 56 
             C 38 57, 48 65, 60 63"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#subtleGlow)"
        />
      </svg>
    </div>
  );
}
