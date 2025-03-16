"use client";

import React, { useState, useEffect } from "react";

const InfoStarter =() => {
  const ClientLogos = () => {
    const logos = [
      { name: "Wally's", logo: "wally's" },
      { name: "BlueCross BlueShield", logo: "BlueCross BlueShield" },
      { name: "FullSteam", logo: "FULLSTEAM" },
      { name: "Evolent", logo: "evolent" },
      { name: "IT Savvy", logo: "savvy" },
      { name: "Livingstone", logo: "livingstone" },
      { name: "Park National Bank", logo: "Park" },
    ];

    // State for animation
    const [offset, setOffset] = useState(0);
    
    // Animation settings
    const speed = 50; // pixels per second (lower number = slower)
    const logoWidth = 150; // approximate width per logo in pixels

    useEffect(() => {
      const animationFrame = () => {
        setOffset((prev) => {
          // Reset when we've scrolled through all logos
          const totalWidth = logos.length * logoWidth;
          return prev <= -totalWidth ? 0 : prev - 1;
        });
        
        requestAnimationFrame(animationFrame);
      };

      const animationId = requestAnimationFrame(animationFrame);
      return () => cancelAnimationFrame(animationId);
    }, [logos.length]);

    return (
      <div className="w-full py-12 overflow-hidden">
        <div 
          className="flex whitespace-nowrap"
          style={{
            transform: `translateX(${offset}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {/* Render logos twice for seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-4 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              style={{ width: `${logoWidth}px` }}
            >
              <span className="text-gray-300 text-xl font-light">
                {logo.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Rest of your component remains the same
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 overflow-hidden w-full max-w-screen">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
          We've helped the world's largest companies gain access and insights to
          the data they need, fast.
        </h2>
      </div>

      <ClientLogos />

      <div className="mt-24 w-full max-w-6xl bg-gradient-to-r from-gray-900/90 via-purple-900/80 to-gray-900/90 p-10 rounded-xl backdrop-blur shadow-lg">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
              <div className="h-2 w-8 rounded-full bg-purple-400"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-6">
              Bad financial data <br />
              is a leadership issue
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-normal mb-10">
              Enterprises are quietly burning millions of dollars.
            </h3>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="mr-6 text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <p className="text-lg text-gray-300">
                  Wasting on duplicate and redundant supplier spend
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-6 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="22" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="12" x2="2" y2="12" />
                    <line x1="12" y1="6" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="18" />
                  </svg>
                </div>
                <p className="text-lg text-gray-300">
                  Increasing operational risk due to blind spots
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-6 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <p className="text-lg text-gray-300">
                  Missing forecasts and going over budgets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoStarter;