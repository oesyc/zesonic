import React from "react";

const InfoSections = () => {
  return (
    <div className="px-4 md:px-6 py-8 md:py-12">
      <header className="relative text-center max-w-4xl mx-auto">
        <span className="group flex h-[6px] sm:h-[6px] md:h-[8px] lg:h-[10px] gap-[5px] sm:gap-[5px] md:gap-[6px] lg:gap-[8px] mx-auto w-fit">
          <span className="bg-primary-1 w-[26px] sm:w-[26px] md:w-[32px] lg:w-[40px] rounded-xl"></span>
          <span className="bg-primary-1 w-[6px] sm:w-[6px] md:w-[8px] lg:w-[10px] rounded-full"></span>
        </span>
        
        <h2 className="mt-3 sm:mt-3 md:mt-4 lg:mt-4 font-sans-titles text-2xl sm:text-2xl md:text-32 lg:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-extra-tight tracking-tight text-white drop-shadow-title px-2 sm:p-4 md:px-6 lg:px-8">
          Enterprises are quietly burning millions of&nbsp;dollars
        </h2>
        
        <p className="mt-3 sm:mt-3 md:mt-4 lg:mt-6 text-base sm:text-16 md:text-18 lg:text-20 font-light tracking-wider text-gray-80 text-white px-2 sm:px-4 md:px-0">
          Some leaders will sit back and do nothing. Don't&nbsp;spend months
          searching for&nbsp;data.
        </p>
      </header>
      
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-6xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg md:rounded-xl">
          <video 
            className="w-full h-auto object-cover"
            playsInline 
            autoPlay 
            loop 
            muted
          >
            <source
              type="video/webm"
              src="https://terzo.ai/videos/dashboard.webm"
            />
            <source
              type="video/mp4"
              src="https://terzo.ai/videos/dashboard.MP4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default InfoSections;