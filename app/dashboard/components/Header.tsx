"use client";
import React, { useState } from "react";
import { Bell, Search, Settings, LogOut, Menu } from "lucide-react";

function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-[#1A102D] text-white p-4 md:p-6 flex justify-between items-center shadow-lg border-b border-[#4A2E70]/40 backdrop-blur-md">
      {/* Left side - Brand/Title section */}
      <div className="flex items-center">
        <button className="lg:hidden mr-4 text-white p-2 rounded-full hover:bg-[#4A2E70] transition-all duration-200">
          <Menu size={20} />
        </button>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C4B5FD] to-[#5A2E8D]">
          Dashboard
        </h1>
      </div>

      {/* Middle - Search section */}
      <div className="hidden md:flex flex-1 max-w-xl mx-6">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-[#C4B5FD]" />
          </div>
          <input
            type="text"
            className="bg-[#3D2462] bg-opacity-30 border border-[#4A2E70] text-white w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50 placeholder-[#C4B5FD] text-base transition-all duration-200 shadow-md"
            placeholder="Search dashboard..."
          />
        </div>
      </div>

      {/* Right side - User section */}
      <div className="flex items-center space-x-4">
        {/* Notification bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-[#4A2E70] transition-all duration-200 relative"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
          </button>

          {/* Notification dropdown */}
          {showNotifications && (
            <div className="absolute z-[999] right-0 mt-2 w-72 bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg py-3  text-white border border-[#4A2E70]">
              <div className="px-4 py-2 border-b border-[#4A2E70]">
                <p className="font-medium text-lg">Notifications</p>
              </div>
              <div className="px-4 py-3 text-base">
                <p className="text-[#C4B5FD]">No new notifications</p>
              </div>
            </div>
          )}
        </div>

        {/* Settings button */}
        <button className="p-2 rounded-full hover:bg-[#4A2E70] transition-all duration-200">
          <Settings size={20} className="text-[#C4B5FD]" />
        </button>

        {/* User profile */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-base font-medium text-white">User Name</span>
            <span className="text-sm text-[#C4B5FD]">Administrator</span>
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5A2E8D] to-[#6A4E9A] flex items-center justify-center text-white font-bold shadow-md border-2 border-[#4A2E70]">
            <span className="text-base">UN</span>
          </div>

          <button className="hidden md:flex items-center space-x-2 bg-[#4A2E70] hover:bg-[#5A2E8D] px-4 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
            <LogOut size={18} />
            <span className="text-base text-white font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
