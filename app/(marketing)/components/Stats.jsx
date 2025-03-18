import React, { useState, useEffect } from "react";

const StatCard = ({ value, label, text, startValue = 0, duration = 2000 }) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    const endValue = parseInt(value);
    const increment = endValue / (duration / 16);
    let currentCount = startValue;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, startValue, duration]);

  return (
    <div className="flex flex-col space-y-2 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-gray-900 bg-opacity-40 backdrop-blur-lg transform transition-transform hover:scale-105 border border-purple-500 border-opacity-20">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
        {count}%{value > 90 ? "+" : ""}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{label}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{text}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: "99",
      label: "Data Accuracy",
      text: "Our AI-as-a-Service offering provides the best data set in the market. Basic OCR technology only gets you half of the way there.",
    },
    {
      value: "70",
      label: "Cycle Time Reduction",
      text: "Stop wasting time with manual contract review and analysis. Access critical data across all contracts in just seconds.",
    },
    {
      value: "10",
      label: "Cost Savings",
      text: "Insights into both contract and spend data together enables smart, quick decisions for cost consolidation and rationalization.",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center py-10 sm:py-16 px-4">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="h-1.5 sm:h-2 w-6 sm:w-8 rounded-full bg-purple-500 mr-2"></div>
          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-purple-500"></div>
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white text-center mb-8 sm:mb-16 leading-tight">
            There's no excuse to waste weeks digging for
            <span className="block">data that you can find in seconds</span>
          </h2>

          <div className="relative">
            {/* Animated glow effect in background */}
            <div className="absolute inset-0 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  text={stat.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsSection;