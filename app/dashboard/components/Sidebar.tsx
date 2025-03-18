"use client"; // This ensures the code runs only on the client-side

import React, { useState } from "react";
import Link from "next/link"; // Use Next.js Link component
import { Home, BarChart2, User, Menu, X, UsersIcon, Settings, LucideChartColumnIncreasing } from "lucide-react";
import { usePathname } from "next/navigation"; // Use usePathname for active link logic

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname(); // Get the current pathname using Next.js's hook

  const navItems = [
    { path: "/dashboard", label: "Home", icon: <Home size={20} /> },
    { path: "/dashboard/accounts-insight", label: "Accounts Insight", icon: <LucideChartColumnIncreasing size={20} /> },
    { path: "/dashboard/workshop", label: "Workshop", icon: <Settings size={20} /> },
    { path: "/dashboard/analytics", label: "Analytics", icon: <BarChart2 size={20} /> },
    { path: "/dashboard/users", label: "All Users", icon: <UsersIcon size={20} /> },
    { path: "/dashboard/UserProfile", label: "User Profile", icon: <User size={20} /> },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="lg:hidden absolute right-4 top-4 bg-[#5A2E8D] text-white p-2 rounded-full z-10 hover:bg-[#6A4E9A] transition-all duration-200"
      >
        {collapsed ? <Menu size={20} /> : <X size={20} />}
      </button>

      <aside
        className={`h-full transition-all duration-300 ease-in-out bg-gradient-to-b from-[#1A102D] via-[#2E1A47] to-[#3D2462] ${
          collapsed ? "w-20" : "w-64"
        } shadow-xl`}
      >
        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center ${
                    collapsed ? "justify-center" : "justify-start"
                  } p-2 rounded-xl transition-all duration-200 ${
                    pathname === item.path
                      ? "bg-[#4A2E70]/15 text-white shadow-lg transform scale-105"
                      : "text-[#C4B5FD] hover:bg-[#5A2E8D] hover:text-white"
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User profile area at bottom */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 border-t border-[#4A2E70] ${
            collapsed ? "hidden" : "block"
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A] flex items-center justify-center text-white font-bold">
              U
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">User Name</p>
              <p className="text-xs text-[#C4B5FD]">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
