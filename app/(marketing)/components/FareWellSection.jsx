"use client";
import React, { useEffect, useRef, useState } from "react";

const FareWellSection = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (!imageRef.current || !containerRef.current) return;
      const scrollPosition = window.scrollY;
      const containerPosition =
        containerRef.current.getBoundingClientRect().top + scrollPosition;
      const offset = (scrollPosition - containerPosition) * 0.1;

      if (offset > 0) {
        imageRef.current.style.transform = `translateY(${Math.min(
          offset,
          20
        )}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const investors = [
    { name: "Align Ventures", logo: "ALIGN VENTURES" },
    { name: "J.A.S Ventures", logo: "J.A.S Ventures" },
    { name: "Engage", logo: "ENGAGE" },
    { name: "Innovation Global", logo: "INNOVATION" },
    { name: "PIP", logo: "PIP" },
    { name: "TYH Ventures", logo: "TYH Ventures" },
    { name: "NE", logo: "NE" },
    { name: "NJF Capital", logo: "NJFCAPITAL" },
    { name: "Great Oaks", logo: "GREAT OAKS" },
  ];

  // Generate random dots for animation
  const randomDots = Array(12).fill().map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${5 + Math.random() * 5}s`,
    delay: `${Math.random() * 5}s`,
  }));

  // Generate random background dots
  const backgroundDots = Array(20).fill().map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${2 + Math.random() * 3}s`,
  }));

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-[#37014F] to-gray-900 overflow-hidden" ref={containerRef}>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 relative">
          {/* Animated dots in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {isMounted && randomDots.map((dot) => (
              <div
                key={dot.id}
                className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-30"
                style={{
                  top: dot.top,
                  left: dot.left,
                  animationDuration: dot.duration,
                  animationDelay: dot.delay,
                  animationIterationCount: "infinite",
                  animationName: "float",
                  animationTimingFunction: "ease-in-out",
                  animationDirection: "alternate",
                }}
              />
            ))}
          </div>

          {/* Purple dots indicator */}
          <div className="flex justify-center items-center mb-10">
            <div className="h-2 w-8 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
            <div
              className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          {/* Heading */}
          <h2 className="mx-auto text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-12 max-w-4xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Zsonic helps you find the right answers
            </span>
            <span className="text-purple-400"> faster</span>
          </h2>

          {/* Dashboard image with glow effect */}
          <div className="relative mt-16 rounded-xl">
            {/* Glow effect behind image */}
            <div className="absolute transform -translate-y-1/2"></div>

            {/* Dashboard image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-purple-900/20">
              <img
                ref={imageRef}
                src="https://terzo.ai/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard.5b5a90bf.png&w=3840&q=75"
                className="w-full object-contain transform transition-transform duration-700 ease-out hover:scale-105"
                alt="Terzo dashboard interface"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating features highlight */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-900 to-purple-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-purple-900/50 flex items-center space-x-2 whitespace-nowrap">
              <span className="animate-pulse bg-purple-400 h-3 w-3 rounded-full"></span>
              <span className="font-medium text-sm sm:text-base">
                AI-powered insights at your fingertips
              </span>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) scale(1);
            }
            100% {
              transform: translateY(-20px) scale(1.2);
            }
          }
        `}</style>
      </div>

      {/* Highlights */}
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-[#37014F] to-gray-900 flex items-center justify-center p-4 sm:p-8 md:p-12 mx-auto">
        <div className="relative max-w-full w-full md:w-auto">
          <div className="space-y-6 md:space-y-8">
            {/* Main Heading Section */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Zsonic gives you the power of{" "}
              <span className="relative inline-block mt-2 sm:mt-3 md:mt-5">
                <span className="relative z-10 px-2 sm:px-4 py-1 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 text-black font-bold">
                  Artificial Intelligence
                </span>
              </span>
            </h1>

            {/* Highlights Section */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-100 leading-relaxed space-y-4 md:space-y-6">
              {/* Highlight 1: AI-as-a-Service Model */}
              <p>
                through a unique AI-as-a-Service model. This allows you to{" "}
                <span className="relative inline-block mt-2 sm:mt-3 md:mt-5">
                  <span className="relative z-10 px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 text-black font-bold">
                    focus on strategic work
                  </span>
                </span>
              </p>

              {/* Highlight 2: Operational Efficiency */}
              <p>
                instead of the operational burden and cost of reviewing
                contracts manually. Quickly{" "}
                <span className="relative inline-block mt-2 sm:mt-3 md:mt-5">
                  <span className="relative z-10 px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 text-black font-bold">
                    identify data
                  </span>
                </span>
              </p>

              {/* Highlight 3: Dynamic Analytics Dashboards */}
              <p>
                that matters to your organization with dynamic analytics
                dashboards. Gain{" "}
                <span className="relative inline-block mt-2 sm:mt-3 md:mt-5">
                  <span className="relative z-10 px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 text-black font-bold">
                    full confidence
                  </span>
                </span>
              </p>

              {/* Highlight 4: Data Quality Assurance */}
              <p>
                in data quality with humans in the loop performing QA on every
                contract.
              </p>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {isMounted && backgroundDots.map((dot) => (
                <div
                  key={dot.id}
                  className="absolute w-1 h-1 rounded-full bg-purple-400 opacity-40"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    animation: `pulse ${dot.duration} infinite alternate`,
                    boxShadow: "0 0 8px rgba(168, 85, 247, 0.8)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes pulse {
            0% {
              transform: scale(0.8);
              opacity: 0.4;
            }
            100% {
              transform: scale(1.2);
              opacity: 0.7;
            }
          }
        `}</style>
      </div>

      {/* Investor Showcase */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-gray-900 via-[#37014F] to-gray-900 text-white p-4 sm:p-6">
        {/* Top section with investor logos */}
        <div className="w-full max-w-6xl mx-auto mb-16 sm:mb-24 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-8 sm:mb-12 md:mb-16">
            We're proud to be backed by the best
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="text-base sm:text-lg font-light text-gray-300">
                  {investor.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section with logo and CTA */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-center mb-2">
            Arm yourself with
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-center mb-8 sm:mb-12 md:mb-16">
            the answers
          </h1>

          {/* CTA Button */}
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-300 flex items-center">
            See a Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default FareWellSection;