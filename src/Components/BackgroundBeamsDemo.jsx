"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams.tsx";
import './background.css'

export function BackgroundBeamsDemo() {
  return (
    <div className="background">
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
      </div>
      <BackgroundBeams />
    </div>
    <svg
        className="background-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 800"
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "#222", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#000", stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
      </svg>
    </div>
  );
}
