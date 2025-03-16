import React from "react";

const InfoSections = () => {
  return (
    <div>
      <header className="relative text-center">
        <span className="group flex h-[10px] gap-[8px] lg:h-[8px] lg:gap-[6px] sm:h-[6px] sm:gap-[5px] mx-auto w-fit">
          <span className="bg-primary-1 w-[40px] rounded-xl lg:w-[32px] sm:w-[26px]"></span>
          <span className="bg-primary-1 w-[10px] rounded-full lg:w-[8px] sm:w-[6px]"></span>
        </span>
        <h2 className="mt-4 font-sans-titles text-5xl leading-extra-tight tracking-tight text-white drop-shadow-title lg:text-36 lg:leading-tight md:text-32 sm:mt-3 sm:text-28">
          Enterprises are quietly burning millions of&nbsp;dollars
        </h2>
        <p className="mt-6 text-20 font-light tracking-wider text-gray-80 text-white lg:mt-5 lg:text-18 md:mt-4 md:text-16 sm:mt-3">
          Some leaders will sit back and do nothing. Don't&nbsp;spend months
          searching for&nbsp;data.
        </p>
      </header>
      <div className="max-w-6xl mx-auto">
         <video playsInline autoPlay loop muted>
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
  );
};

export default InfoSections;
