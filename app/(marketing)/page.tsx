import AnimatedSection from "./components/animatedHero";
import InfoStarter from "./components/InfoStarter"
import MultiSection from "./components/MultiSection"
import InfoSections from "./components/InfoSections"
import Intellegence from "./components/Intellegence"


const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-[#37014F] to-gray-900 pt-16">
            <div className="flex items-center justify-center space-x-2">
                <h1 className="text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-4">Finance</h1>
                <h1 className="text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-4">Procurement</h1>
                <h1 className="text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-4">Supply Chain</h1>
                <h1 className="text-sm text-white font-light rounded-full bg-gray-900 border border-gray-900 py-1 px-4">IT</h1>
            </div>
            <div className=" pt-4 pb-4">
                <h1 className="text-white text-6xl text-center">AI-powered <br />Financial Intelligence</h1>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-gray-900 to-[#37014F] p-1 rounded-full w-full max-w-md border border-gray-700">
                <input
                    type="email"
                    placeholder="Your business email..."
                    className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 px-4 py-2"
                />
                <button className="bg-purple-500 hover:bg-purple-600 text-black font-semibold px-6 py-2 rounded-full">
                    Free Trial
                </button>
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
        </div>
    );
};

export default HomePage;