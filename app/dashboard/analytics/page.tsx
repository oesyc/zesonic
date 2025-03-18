"use client";
import React, { useState } from "react";
import {
  Search,
  HelpCircle,
  Settings,
  ChevronDown,
  Filter,
  FileText,
} from "lucide-react";

// Dummy data for the chart
const chartData = [
  { name: "Jan '22", value: 1000000, color: "#9D7AF8" },
  { name: "Feb '22", value: 800000, color: "#9D7AF8" },
  { name: "Mar '22", value: 2500000, color: "#4E7DF7" },
  { name: "Apr '22", value: 6500000, color: "#9D7AF8" },
  { name: "May '22", value: 1200000, color: "#9D7AF8" },
  { name: "Jun '22", value: 4000000, color: "#4E7DF7" },
  { name: "Jul '22", value: 2200000, color: "#9D7AF8" },
  { name: "Aug '22", value: 900000, color: "#9D7AF8" },
  { name: "Sep '22", value: 2500000, color: "#4E7DF7" },
  { name: "Oct '22", value: 6500000, color: "#9D7AF8" },
  { name: "Nov '22", value: 5000000, color: "#9D7AF8" },
  { name: "Dec '22", value: 2600000, color: "#4E7DF7" },
];

const DashboardHeader = () => (
  <div className="flex items-center justify-between w-full px-6 py-4 bg-[#1A102D] border-b border-[#4A2E70]/40 backdrop-blur-md">
    <div className="flex items-center">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-[#C4B5FD] h-5 w-5" />
        <input
          type="text"
          placeholder="Search contracts..."
          className="bg-[#3D2462] border-0 text-[#C4B5FD] pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50 placeholder-[#C4B5FD] transition-all duration-200"
        />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center text-[#C4B5FD] hover:text-white transition-colors duration-200">
        <HelpCircle className="h-5 w-5" />
        <span className="ml-1">Help</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </div>
      <button className="p-2 rounded-full bg-[#4A2E70] hover:bg-[#5A2E8D] transition-all duration-200">
        <Settings className="h-5 w-5 text-[#C4B5FD]" />
      </button>
      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#5A2E8D] to-[#6A4E9A] flex items-center justify-center text-white font-bold shadow-md">
        <span className="text-sm">U</span>
      </div>
    </div>
  </div>
);

const NavigationBar = () => (
  <div className="flex items-center justify-between w-full px-6 py-4 bg-[#1A102D] border-b border-[#4A2E70]/40 backdrop-blur-md">
    <div className="flex items-center gap-4">
      <div className="flex items-center text-[#C4B5FD] hover:text-white transition-colors duration-200">
        <span className="font-medium">Dashboard</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </div>
      <span className="text-[#5EEAD4] font-semibold">Contract Dashboard</span>
    </div>
    <button className="flex items-center gap-2 text-[#C4B5FD] bg-[#4A2E70] py-2 px-4 rounded-lg hover:bg-[#5A2E8D] transition-all duration-200 shadow-md hover:shadow-lg">
      <FileText className="h-5 w-5" />
      <span className="font-medium">View All Contracts</span>
    </button>
  </div>
);

interface StatCardProps {
  color: string;
  title: string;
  value: string;
  count: string;
  tag?: string;
}

const StatCard: React.FC<StatCardProps> = ({ color, title, value, count, tag }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-1 bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-6 flex flex-col border border-[#4A2E70] hover:border-[#5A2E8D] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`h-3 w-3 rounded-full ${
              color === "blue" ? "bg-[#4E7DF7]" : "bg-[#9D7AF8]"
            }`}
          ></div>
          <span className="text-[#C4B5FD] font-medium">{title}</span>
        </div>
        {tag && (
          <div className="text-xs px-2 py-1 rounded bg-[#FBBF24]/80 text-[#78350F] font-semibold">
            {tag}
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-3xl font-bold text-[#5EEAD4] transition-all duration-300">
          {value}
        </span>
        <span className="text-[#C4B5FD] text-xl">/</span>
        <span className="text-2xl text-[#C4B5FD] font-medium">{count}</span>
      </div>
      {hovered && (
        <div className="mt-4 text-[#C4B5FD] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click for detailed insights
        </div>
      )}
    </div>
  );
};

const FilterBar = () => (
  <div className="flex justify-between items-center mt-8 px-6">
    <div className="flex flex-wrap gap-4">
      {["Business Unit Vendor", "Vendor", "Department", "Agreement Type"].map(
        (option) => (
          <div className="relative" key={option}>
            <select className="appearance-none bg-[#3D2462] text-[#C4B5FD] py-2 pl-4 pr-10 rounded-xl border border-[#4A2E70] focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50 transition-all duration-200">
              <option>{option}</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-[#C4B5FD]" />
          </div>
        )
      )}
    </div>
    <div className="flex gap-4">
      <div className="bg-[#5A2E8D] rounded-full h-10 w-10 flex items-center justify-center text-white font-bold shadow-md">
        0
      </div>
      <button className="flex items-center gap-2 text-[#C4B5FD] bg-[#4A2E70] py-2 px-5 rounded-xl hover:bg-[#5A2E8D] transition-all duration-200 shadow-md hover:shadow-lg">
        <Filter className="h-5 w-5" />
        <span className="font-medium">All Filters</span>
        <ChevronDown className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const ChartHeader = () => {
  const tabs = [
    "Current Yr",
    "Current Qtr",
    "Next 6 Mo",
    "Next 12 Mo",
    "Next Yr",
    "Last Yr",
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-[#3D2462] bg-opacity-40 backdrop-blur-md rounded-t-xl shadow-inner">
      <div className="relative">
        <select className="appearance-none bg-[#3D2462] text-[#C4B5FD] py-2 pl-4 pr-10 rounded-lg border border-[#4A2E70] focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50 transition-all duration-200">
          <option>Contracts Expiring</option>
        </select>
        <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-[#C4B5FD]" />
      </div>
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              index === activeTab
                ? "bg-[#5A2E8D] text-white shadow-md"
                : "bg-transparent text-[#C4B5FD] hover:bg-[#4A2E70]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-right">
        <div className="text-[#5EEAD4] font-bold text-xl">$45,200,045</div>
        <div className="text-xs text-[#C4B5FD]">Based on calendar year</div>
      </div>
    </div>
  );
};

const BarChart = () => {
  const maxValue = Math.max(...chartData.map((d) => d.value));
  const height = 230;

  return (
    <div className="px-6 py-4 bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-b-xl shadow-inner">
      <div className="flex justify-between h-full relative">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between text-right pr-3 text-sm text-[#C4B5FD] h-[230px]">
          <div>$7M</div>
          <div>$6M</div>
          <div>$5M</div>
          <div>$4M</div>
          <div>$3M</div>
          <div>$2M</div>
          <div>$1M</div>
          <div>$0</div>
        </div>

        {/* Bars */}
        <div className="flex-1 flex items-end justify-between space-x-2">
          {chartData.map((item, index) => {
            const barHeight = (item.value / maxValue) * height;
            return (
              <div key={index} className="flex flex-col items-center group">
                <div
                  style={{
                    height: `${barHeight}px`,
                    backgroundColor: item.color,
                    width: "28px",
                  }}
                  className="rounded-lg transition-all duration-300 group-hover:scale-110"
                  title={`$${item.value.toLocaleString()}`}
                ></div>
                <div className="mt-2 text-xs text-[#C4B5FD]">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ContractDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A102D] text-white rounded-none">
      <DashboardHeader />
      <NavigationBar />

      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            color="blue"
            title="Contracts Expiring"
            value="$52,396,301"
            count="14"
            tag="90 days"
          />
          <StatCard
            color="purple"
            title="Contracts Expiring"
            value="$15,359,000"
            count="6"
            tag="This year"
          />
          <StatCard
            color="purple"
            title="Total Active Contracts"
            value="$454,302,809"
            count="69"
          />
        </div>

        <FilterBar />

        <div className="mt-8">
          <ChartHeader />
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default ContractDashboard;
