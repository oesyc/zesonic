import AnimatedSection from "./components/animatedHero";
import InfoStarter from "./components/InfoStarter"
import MultiSection from "./components/MultiSection"
import InfoSections from "./components/InfoSections"
import Intellegence from "./components/Intellegence"

import FareWellSection from "./components/FareWellSection"
import TerzoDemoPage from "./components/Demo"



const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-[#37014F] to-gray-900 pt-16">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <h1 className="text-xs md:text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-3 md:px-4">Finance</h1>
        <h1 className="text-xs md:text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-3 md:px-4">Procurement</h1>
        <h1 className="text-xs md:text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-3 md:px-4">Supply Chain</h1>
        <h1 className="text-xs md:text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-3 md:px-4">IT</h1>
      </div>
      
      {/* Heading Section - Smaller text on mobile */}
      <div className="pt-2 pb-6 md:pt-4 md:pb-8">
        <h1 className="text-white text-4xl md:text-6xl text-center font-bold leading-tight">
          AI-powered <br className="md:block" />Financial Intelligence
        </h1>
      </div>
      
      {/* Email Input Section - Full width on mobile, centered on desktop */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col sm:flex-row items-center w-full max-w-full sm:max-w-md bg-gradient-to-r from-gray-900 to-[#37014F] p-1 rounded-full border border-gray-700">
          <input
            type="email"
            placeholder="Your business email..."
            className="w-full sm:flex-grow bg-transparent outline-none text-white placeholder-gray-400 px-4 py-2 mb-2 sm:mb-0 text-center sm:text-left"
          />
          <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-black font-semibold px-6 py-2 rounded-full">
            Free Trial
          </button>
        </div>
      </div>
            <div className="flex w-[90%] items-center justify-center px-5">
                <div><AnimatedSection /></div>
            </div>
            <div>
                <InfoStarter/>
            </div>
            <div>
                <InfoSections/>
            </div>
            <div>
                <Intellegence/>
            </div>
            <div className="flex items-center justify-center">
                <MultiSection/>
            </div>
          
            <div className="w-full">
                <FareWellSection />
            </div>
            <div className="w-[90%]">
                <TerzoDemoPage/>
            </div>
        </div>
    );
};

export default HomePage;