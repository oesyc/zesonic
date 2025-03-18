import React from 'react';

function Intelligence() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 md:p-6">
      {/* Header section with purple accent and main title */}
      <div className="text-center mb-8 md:mb-12 max-w-4xl px-4">
        {/* Purple dot and line similar to the first component */}
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div className="h-2 w-6 md:w-8 rounded-full bg-purple-500 mr-2"></div>
          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 md:mb-6">
          The Terzo Financial Intelligence Platform
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mt-2 md:mt-4">
          Modernize the way you manage, forecast, and understand your Enterprise spend.
        </p>
      </div>
      
      {/* Three feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl mb-8 md:mb-16 px-4">
        {/* Card 1 - Centralize contracts */}
        <div className="bg-purple-900/40 rounded-lg p-6 md:p-10 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-6 md:mb-8 relative">
            {/* Dollar sign circle */}
            <div className="h-16 md:h-20 w-16 md:w-20 rounded-full bg-purple-300/20 flex items-center justify-center">
              <span className="text-xl md:text-2xl text-purple-300">$</span>
            </div>
            {/* Gears around the circle */}
            <div className="absolute -top-2 -left-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#9F7AEA" strokeWidth="2"/>
                <path d="M19.4 15C19.3 15.1 19.2 15.3 19.2 15.5C19.2 15.7 19.2 15.9 19.3 16.1C19.4 16.3 19.4 16.5 19.4 16.7C19.3 17.1 19.1 17.5 18.9 17.8C18.6 18.2 18.3 18.5 17.9 18.7C17.6 18.9 17.3 19 16.9 19C16.7 19 16.5 19 16.3 18.9C16.1 18.8 15.9 18.8 15.7 18.8C15.5 18.8 15.3 18.9 15.2 19C15 19.2 14.9 19.3 14.8 19.5L14.7 19.9C14.5 20.4 14.3 20.7 14 21C13.7 21.3 13.3 21.5 12.9 21.5H11.1C10.7 21.5 10.3 21.3 10 21C9.7 20.7 9.5 20.3 9.3 19.9L9.2 19.5C9.1 19.3 9 19.1 8.8 19C8.7 18.9 8.5 18.8 8.3 18.8C8.1 18.8 7.9 18.8 7.7 18.9C7.5 19 7.3 19 7.1 19C6.7 19 6.4 18.9 6.1 18.7C5.7 18.5 5.4 18.2 5.1 17.8C4.9 17.5 4.7 17.1 4.6 16.7C4.6 16.5 4.6 16.3 4.7 16.1C4.8 15.9 4.8 15.7 4.8 15.5C4.8 15.3 4.7 15.1 4.6 15C4.5 14.9 4.4 14.7 4.3 14.6L3.9 14.5C3.4 14.3 3.1 14.1 2.8 13.8C2.5 13.5 2.5 13 2.5 12.7V10.9C2.5 10.5 2.7 10.1 3 9.8C3.3 9.5 3.7 9.3 4.1 9.1L4.5 9C4.7 8.9 4.9 8.8 5 8.6C5.1 8.5 5.2 8.3 5.2 8.1C5.2 7.9 5.2 7.7 5.1 7.5C5 7.3 5 7.1 5 6.9C5.1 6.5 5.3 6.1 5.5 5.8C5.8 5.4 6.1 5.1 6.5 4.9C6.8 4.7 7.1 4.6 7.5 4.6C7.7 4.6 7.9 4.6 8.1 4.7C8.3 4.8 8.5 4.8 8.7 4.8C8.9 4.8 9.1 4.7 9.2 4.6C9.3 4.5 9.4 4.3 9.5 4.1L9.6 3.7C9.8 3.2 10 2.9 10.3 2.6C10.6 2.3 11 2.1 11.4 2.1H13.2C13.6 2.1 14 2.3 14.3 2.6C14.6 2.9 14.8 3.3 15 3.7L15.1 4.1C15.2 4.3 15.3 4.5 15.5 4.6C15.6 4.7 15.8 4.8 16 4.8C16.2 4.8 16.4 4.8 16.6 4.7C16.8 4.6 17 4.6 17.2 4.6C17.6 4.6 18 4.7 18.3 4.9C18.7 5.1 19 5.4 19.3 5.8C19.5 6.1 19.7 6.5 19.8 6.9C19.8 7.1 19.8 7.3 19.7 7.5C19.6 7.7 19.6 7.9 19.6 8.1C19.6 8.3 19.7 8.5 19.8 8.6C19.9 8.7 20 8.9 20.1 9L20.5 9.1C21 9.3 21.3 9.5 21.6 9.8C21.9 10.1 22 10.5 22 10.9V12.7C22 13.1 21.8 13.5 21.5 13.8C21.2 14.1 20.8 14.3 20.4 14.5L20 14.6C19.8 14.7 19.6 14.8 19.4 15Z" stroke="#9F7AEA" strokeWidth="2"/>
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#9F7AEA" strokeWidth="2"/>
                <path d="M19.4 15C19.3 15.1 19.2 15.3 19.2 15.5C19.2 15.7 19.2 15.9 19.3 16.1C19.4 16.3 19.4 16.5 19.4 16.7C19.3 17.1 19.1 17.5 18.9 17.8C18.6 18.2 18.3 18.5 17.9 18.7C17.6 18.9 17.3 19 16.9 19C16.7 19 16.5 19 16.3 18.9C16.1 18.8 15.9 18.8 15.7 18.8C15.5 18.8 15.3 18.9 15.2 19C15 19.2 14.9 19.3 14.8 19.5L14.7 19.9C14.5 20.4 14.3 20.7 14 21C13.7 21.3 13.3 21.5 12.9 21.5H11.1C10.7 21.5 10.3 21.3 10 21C9.7 20.7 9.5 20.3 9.3 19.9L9.2 19.5C9.1 19.3 9 19.1 8.8 19C8.7 18.9 8.5 18.8 8.3 18.8C8.1 18.8 7.9 18.8 7.7 18.9C7.5 19 7.3 19 7.1 19C6.7 19 6.4 18.9 6.1 18.7C5.7 18.5 5.4 18.2 5.1 17.8C4.9 17.5 4.7 17.1 4.6 16.7C4.6 16.5 4.6 16.3 4.7 16.1C4.8 15.9 4.8 15.7 4.8 15.5C4.8 15.3 4.7 15.1 4.6 15C4.5 14.9 4.4 14.7 4.3 14.6L3.9 14.5C3.4 14.3 3.1 14.1 2.8 13.8C2.5 13.5 2.5 13 2.5 12.7V10.9C2.5 10.5 2.7 10.1 3 9.8C3.3 9.5 3.7 9.3 4.1 9.1L4.5 9C4.7 8.9 4.9 8.8 5 8.6C5.1 8.5 5.2 8.3 5.2 8.1C5.2 7.9 5.2 7.7 5.1 7.5C5 7.3 5 7.1 5 6.9C5.1 6.5 5.3 6.1 5.5 5.8C5.8 5.4 6.1 5.1 6.5 4.9C6.8 4.7 7.1 4.6 7.5 4.6C7.7 4.6 7.9 4.6 8.1 4.7C8.3 4.8 8.5 4.8 8.7 4.8C8.9 4.8 9.1 4.7 9.2 4.6C9.3 4.5 9.4 4.3 9.5 4.1L9.6 3.7C9.8 3.2 10 2.9 10.3 2.6C10.6 2.3 11 2.1 11.4 2.1H13.2C13.6 2.1 14 2.3 14.3 2.6C14.6 2.9 14.8 3.3 15 3.7L15.1 4.1C15.2 4.3 15.3 4.5 15.5 4.6C15.6 4.7 15.8 4.8 16 4.8C16.2 4.8 16.4 4.8 16.6 4.7C16.8 4.6 17 4.6 17.2 4.6C17.6 4.6 18 4.7 18.3 4.9C18.7 5.1 19 5.4 19.3 5.8C19.5 6.1 19.7 6.5 19.8 6.9C19.8 7.1 19.8 7.3 19.7 7.5C19.6 7.7 19.6 7.9 19.6 8.1C19.6 8.3 19.7 8.5 19.8 8.6C19.9 8.7 20 8.9 20.1 9L20.5 9.1C21 9.3 21.3 9.5 21.6 9.8C21.9 10.1 22 10.5 22 10.9V12.7C22 13.1 21.8 13.5 21.5 13.8C21.2 14.1 20.8 14.3 20.4 14.5L20 14.6C19.8 14.7 19.6 14.8 19.4 15Z" stroke="#9F7AEA" strokeWidth="2"/>
              </svg>
            </div>
            {/* Curved arrow */}
            <svg className="absolute -top-4 -right-4 w-8 h-8 md:w-10 md:h-10" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4C4.93464 4.93464 5.74038 5.74038 6.5 6.5C10.2843 10.2843 13.5 12 20 12" stroke="#9F7AEA" strokeWidth="1"/>
              <path d="M20 7V12H15" stroke="#9F7AEA" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-3">Centralize contracts</h2>
          
          {/* Description */}
          <p className="text-gray-400">Aggregate financial data</p>
        </div>
        
        {/* Card 2 - Link invoices */}
        <div className="bg-blue-900/40 rounded-lg p-6 md:p-10 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-6 md:mb-8 relative">
            {/* Search and slider */}
            <div className="h-16 md:h-20 w-16 md:w-20 flex items-center justify-center">
              <svg width="36" height="36" className="md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10H3" stroke="#90CDF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 6H3" stroke="#90CDF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 14H3" stroke="#90CDF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 18H3" stroke="#90CDF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17" cy="16" r="5" stroke="#90CDF4" strokeWidth="2"/>
                <path d="M19 18L21 20" stroke="#90CDF4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Gear */}
            <div className="absolute -top-1 -right-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#90CDF4" strokeWidth="2"/>
                <path d="M19.4 15C19.3 15.1 19.2 15.3 19.2 15.5C19.2 15.7 19.2 15.9 19.3 16.1C19.4 16.3 19.4 16.5 19.4 16.7C19.3 17.1 19.1 17.5 18.9 17.8C18.6 18.2 18.3 18.5 17.9 18.7C17.6 18.9 17.3 19 16.9 19C16.7 19 16.5 19 16.3 18.9C16.1 18.8 15.9 18.8 15.7 18.8C15.5 18.8 15.3 18.9 15.2 19C15 19.2 14.9 19.3 14.8 19.5L14.7 19.9C14.5 20.4 14.3 20.7 14 21C13.7 21.3 13.3 21.5 12.9 21.5H11.1C10.7 21.5 10.3 21.3 10 21C9.7 20.7 9.5 20.3 9.3 19.9L9.2 19.5C9.1 19.3 9 19.1 8.8 19C8.7 18.9 8.5 18.8 8.3 18.8C8.1 18.8 7.9 18.8 7.7 18.9C7.5 19 7.3 19 7.1 19C6.7 19 6.4 18.9 6.1 18.7C5.7 18.5 5.4 18.2 5.1 17.8C4.9 17.5 4.7 17.1 4.6 16.7C4.6 16.5 4.6 16.3 4.7 16.1C4.8 15.9 4.8 15.7 4.8 15.5C4.8 15.3 4.7 15.1 4.6 15C4.5 14.9 4.4 14.7 4.3 14.6L3.9 14.5C3.4 14.3 3.1 14.1 2.8 13.8C2.5 13.5 2.5 13 2.5 12.7V10.9C2.5 10.5 2.7 10.1 3 9.8C3.3 9.5 3.7 9.3 4.1 9.1L4.5 9C4.7 8.9 4.9 8.8 5 8.6C5.1 8.5 5.2 8.3 5.2 8.1C5.2 7.9 5.2 7.7 5.1 7.5C5 7.3 5 7.1 5 6.9C5.1 6.5 5.3 6.1 5.5 5.8C5.8 5.4 6.1 5.1 6.5 4.9C6.8 4.7 7.1 4.6 7.5 4.6C7.7 4.6 7.9 4.6 8.1 4.7C8.3 4.8 8.5 4.8 8.7 4.8C8.9 4.8 9.1 4.7 9.2 4.6C9.3 4.5 9.4 4.3 9.5 4.1L9.6 3.7C9.8 3.2 10 2.9 10.3 2.6C10.6 2.3 11 2.1 11.4 2.1H13.2C13.6 2.1 14 2.3 14.3 2.6C14.6 2.9 14.8 3.3 15 3.7L15.1 4.1C15.2 4.3 15.3 4.5 15.5 4.6C15.6 4.7 15.8 4.8 16 4.8C16.2 4.8 16.4 4.8 16.6 4.7C16.8 4.6 17 4.6 17.2 4.6C17.6 4.6 18 4.7 18.3 4.9C18.7 5.1 19 5.4 19.3 5.8C19.5 6.1 19.7 6.5 19.8 6.9C19.8 7.1 19.8 7.3 19.7 7.5C19.6 7.7 19.6 7.9 19.6 8.1C19.6 8.3 19.7 8.5 19.8 8.6C19.9 8.7 20 8.9 20.1 9L20.5 9.1C21 9.3 21.3 9.5 21.6 9.8C21.9 10.1 22 10.5 22 10.9V12.7C22 13.1 21.8 13.5 21.5 13.8C21.2 14.1 20.8 14.3 20.4 14.5L20 14.6C19.8 14.7 19.6 14.8 19.4 15Z" stroke="#90CDF4" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-3">Link invoices</h2>
          
          {/* Description */}
          <p className="text-gray-400">Extract critical data automatically<br className="hidden sm:block" /> and accurately</p>
        </div>
        
        {/* Card 3 - Extract metadata */}
        <div className="bg-yellow-900/30 rounded-lg p-6 md:p-10 flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
          {/* Icon */}
          <div className="mb-6 md:mb-8 relative">
            <div className="h-16 md:h-20 w-16 md:w-20 flex items-center justify-center">
              {/* Gauge and chart */}
              <svg width="36" height="36" className="md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="#D6BCFA" strokeWidth="2"/>
                <path d="M12 8V12L15 15" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 18L20 22" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 3V6" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 9V12" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 3V6" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 9V12" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-3">Extract metadata</h2>
          
          {/* Description */}
          <p className="text-gray-400">Search, sort and report with analytics<br className="hidden sm:block" /> on top of your data</p>
        </div>
      </div>
      
      {/* Bottom call to action */}
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2">Don't just track your expenses.</h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-purple-400">Understand your expenses.</h2>
      </div>
    </div>
  );
}

export default Intelligence;