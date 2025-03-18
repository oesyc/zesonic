"use client";
import React, { JSX, useState } from "react";
import {
  Search,
  Key,
  Video,
  VideoOff,
  Scissors,
  Tag,
  Share2,
  Upload,
  Download,
  Settings,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

const AIToolsDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  interface Tool {
    id: string;
    name: string;
    icon: JSX.Element;
    description: string;
  }
  
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleToolClick = (tool: any) => {
    setSelectedTool(tool);
  };

  const toolsList = [
    {
      id: "extract",
      name: "Keyword Extraction",
      icon: <Key size={20} />,
      description: "Extract key phrases and topics from content",
    },
    {
      id: "suggest",
      name: "Keyword Suggestion",
      icon: <Tag size={20} />,
      description: "Generate relevant keywords for content",
    },
    {
      id: "video-extract",
      name: "Video Data Extraction",
      icon: <Video size={20} />,
      description: "Extract data from video content efficiently",
    },
    {
      id: "shorten",
      name: "Video Shortening",
      icon: <Scissors size={20} />,
      description: "Create concise video versions seamlessly",
    },
    {
      id: "data-suggest",
      name: "Data-based Keywords",
      icon: <Search size={20} />,
      description: "Generate keywords from provided data",
    },
    {
      id: "share",
      name: "Social Media Sharing",
      icon: <Share2 size={20} />,
      description: "Share content across social platforms",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1A102D] via-[#2E1A47] to-[#3D2462] text-white rounded-none">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-[#4A2E70]/40 bg-[#1A102D]/50 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-[#5A2E8D] to-[#6A4E9A] p-2 rounded-lg mr-3">
              <Settings size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C4B5FD] to-[#5A2E8D]">
              AI Tools Dashboard
            </h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 bg-[#5A2E8D] rounded-full hover:bg-[#6A4E9A] transition-all duration-200"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Panel */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold mb-3 text-white">
              AI-Powered Tools
            </h2>
            <p className="text-lg text-[#C4B5FD] font-light">
              Elevate your content strategy with cutting-edge AI solutions
            </p>
          </div>

          {/* Tool Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsList.map((tool) => (
              <div
                key={tool.id}
                className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-5 border border-[#4A2E70] hover:border-[#5A2E8D] hover:shadow-lg hover:shadow-[#5A2E8D]/30 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                onClick={() => handleToolClick(tool)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5A2E8D] to-[#6A4E9A] flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#5EEAD4] transition-colors duration-300">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-[#C4B5FD] text-base leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#5A2E8D] hover:bg-[#6A4E9A] py-2 px-4 rounded-full text-sm font-medium transition duration-200 text-white flex items-center shadow-md shadow-[#5A2E8D]/20 hover:shadow-lg hover:shadow-[#6A4E9A]/30">
                    Launch <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upload/Download Section */}
          <div className="mt-10 bg-[#3D2462] bg-opacity-40 backdrop-blur-md rounded-xl p-6 border border-[#4A2E70] shadow-inner">
            <h3 className="text-2xl font-semibold mb-5 text-white">
              Media Processing Hub
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#3D2462] bg-opacity-30 rounded-xl p-6 border border-dashed border-[#4A2E70] flex flex-col items-center justify-center hover:border-[#5A2E8D] transition-all duration-300">
                <Upload size={40} className="text-[#5EEAD4] mb-4" />
                <p className="text-center text-[#C4B5FD] text-lg">
                  Drag & drop or click to upload files
                </p>
                <button className="mt-4 bg-[#5A2E8D] hover:bg-[#6A4E9A] py-2 px-6 rounded-full text-sm font-medium transition duration-200 text-white shadow-md shadow-[#5A2E8D]/20 hover:shadow-lg hover:shadow-[#6A4E9A]/30">
                  Upload
                </button>
              </div>

              <div className="bg-[#3D2462] bg-opacity-30 rounded-xl p-6 border border-[#4A2E70] flex flex-col items-center justify-center hover:border-[#5A2E8D] transition-all duration-300">
                <input
                  type="text"
                  placeholder="Enter video URL..."
                  className="w-full bg-[#2E1A47] border border-[#4A2E70] rounded-xl p-3 text-white placeholder-[#C4B5FD] text-base mb-5 focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50"
                />
                <div className="flex space-x-4">
                  <button className="bg-[#5A2E8D] hover:bg-[#6A4E9A] py-2 px-6 rounded-full text-sm font-medium transition duration-200 flex items-center text-white shadow-md shadow-[#5A2E8D]/20 hover:shadow-lg hover:shadow-[#6A4E9A]/30">
                    <Download size={16} className="mr-2" /> Download
                  </button>
                  <button className="bg-[#5A2E8D] hover:bg-[#6A4E9A] py-2 px-6 rounded-full text-sm font-medium transition duration-200 flex items-center text-white shadow-md shadow-[#5A2E8D]/20 hover:shadow-lg hover:shadow-[#6A4E9A]/30">
                    <Scissors size={16} className="mr-2" /> Shorten
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sharing Options */}
          <div className="mt-10 bg-[#3D2462] bg-opacity-40 backdrop-blur-md rounded-xl p-6 border border-[#4A2E70] shadow-inner">
            <h3 className="text-2xl font-semibold mb-5 text-white">
              Social Sharing Suite
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                (platform) => (
                  <button
                    key={platform}
                    className="bg-[#4A2E70] hover:bg-[#5A2E8D] py-3 px-6 rounded-xl text-sm font-medium transition duration-200 flex items-center justify-center text-white hover:shadow-md hover:shadow-[#5A2E8D]/30"
                  >
                    <Share2 size={16} className="mr-2" />
                    {platform}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Details Panel */}
        {selectedTool && (
          <div className="hidden lg:block w-80 bg-[#3D2462] bg-opacity-40 backdrop-blur-md p-6 border-l border-[#4A2E70] shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                {selectedTool.name}
              </h3>
              <button
                onClick={() => setSelectedTool(null)}
                className="text-[#C4B5FD] hover:text-white p-2 rounded-full hover:bg-[#4A2E70]/30 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-[#C4B5FD] text-base leading-relaxed">
                {selectedTool.description}
              </p>
            </div>

            <div className="border-t border-[#4A2E70] pt-4">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <h4 className="text-lg font-medium text-white flex items-center">
                  <Settings size={16} className="mr-2 text-[#5A2E8D]" />
                  Tool Settings
                </h4>
                {isSettingsOpen ? (
                  <ChevronUp size={16} className="text-[#C4B5FD]" />
                ) : (
                  <ChevronDown size={16} className="text-[#C4B5FD]" />
                )}
              </div>

              {isSettingsOpen && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="text-sm text-[#C4B5FD] block mb-2">
                      API Key
                    </label>
                    <input
                      type="password"
                      className="w-full bg-[#2E1A47] border border-[#4A2E70] rounded-xl p-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50"
                      value="••••••••••••••••"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#C4B5FD] block mb-2">
                      Model Selection
                    </label>
                    <select className="w-full bg-[#2E1A47] border border-[#4A2E70] rounded-xl p-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50">
                      <option>Default</option>
                      <option>Enhanced</option>
                      <option>Professional</option>
                    </select>
                  </div>
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A] hover:from-[#4A2E70] hover:to-[#5A2E8D] py-3 px-6 rounded-xl text-sm font-medium transition duration-200 text-white mt-6 shadow-md shadow-[#5A2E8D]/20 hover:shadow-lg hover:shadow-[#6A4E9A]/30">
                Launch Tool
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Add this for the animation (optional, using CSS keyframes)
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
`;

export default AIToolsDashboard;
