"use client";
import React from "react";
import StatsSection from "./Stats";
import IntegrationHub from "./IntegrationHub";

const MultiSection = () => {
  return (
    <div className="overflow-hidden w-[90%]">
      {/* Value section */}
      <div className="flex flex-col md:flex-row-reverse w-full text-white mt-20">
        {/* Left dashboard preview section */}
        <div className="w-full md:w-[55%] p-4 flex items-center justify-center rounded-lg">
          <img
            src="https://terzo.ai/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fidentify.7a8090c8.jpg&w=1920&q=100"
            className="rounded-lg"
            alt=""
          />
        </div>
        {/* Right content section */}
        <div className="w-full flex flex-col justify-center p-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Identify duplicate and redundant supplier spend
          </h2>
          <p className="text-gray-300 mb-6">
            Eliminate blind spots and take control of supplier contracts. Keep a
            pulse on your financial data and know exactly where your money is
            going.
          </p>
          <div className="flex items-center">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Renewl section */}
      <div className="flex flex-col md:flex-row-reverse w-full text-white mt-20">
        {/* Right content section */}
        <div className="w-full md:w-[45%] p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Maximize value on every negotiation
          </h2>
          <p className="text-gray-300 mb-6">
            Go into your supplier renewals prepared. Upgrade contracts where you
            need more resources and cut the fat where you don't.
          </p>
          <div className="flex items-center">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Left dashboard preview section */}
        <div className="w-full md:w-[55%] p-4 flex items-center justify-center rounded-lg">
          <img
            src="https://terzo.ai/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmaximize.84858bf3.jpg&w=1920&q=100"
            className="rounded-lg"
            alt=""
          />
        </div>
      </div>
      {/* Insights  section */}
      <div className="flex flex-col md:flex-row-reverse w-full text-white mt-20">
        {/* Left dashboard preview section */}
        <div className="w-full md:w-[55%] p-4 flex items-center justify-center rounded-lg">
          <img
            src="https://terzo.ai/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Finsights.819ad776.jpg&w=1920&q=100"
            className="rounded-lg"
            alt=""
          />
        </div>
        {/* Right content section */}
        <div className="w-full md:w-[45%] p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Identify duplicate and redundant supplier spend
          </h2>
          <p className="text-gray-300 mb-6">
            Eliminate blind spots and take control of supplier contracts. Keep a
            pulse on your financial data and know exactly where your money is
            going.
          </p>
          <div className="flex items-center">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <StatsSection />
      <IntegrationHub />
    </div>
  );
};

export default MultiSection;
