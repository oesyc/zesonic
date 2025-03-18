"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  TrendingUp,
  DollarSign,
  Eye,
  Play,
  MessageSquare,
  Users,
  Globe,
  BarChart2,
  Zap,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedCard, setExpandedCard] = useState("");

  const toggleCard = (id:any) => {
    if (expandedCard === id) {
      setExpandedCard("");
    } else {
      setExpandedCard(id);
    }
  };

  // Sample data
  const accounts = [
    {
      id: 1,
      platform: "twitter",
      name: "CompanyX",
      followers: "24.5K",
      growth: "+5.2%",
    },
    {
      id: 2,
      platform: "instagram",
      name: "CompanyX",
      followers: "42.3K",
      growth: "+3.8%",
    },
    {
      id: 3,
      platform: "facebook",
      name: "Company X",
      followers: "38.7K",
      growth: "+1.2%",
    },
    {
      id: 4,
      platform: "youtube",
      name: "Company X",
      followers: "12.1K",
      growth: "+8.9%",
    },
  ];

  const overviewData = {
    views: "3.2M",
    likes: "245K",
    comments: "42K",
    shares: "18K",
    impressions: "5.1M",
    revenue: "$24,580",
  };

  const trendingVideos = [
    { id: 1, title: "Product Launch 2025", views: "428K", engagement: "8.7%" },
    { id: 2, title: "Behind the Scenes", views: "312K", engagement: "7.2%" },
    { id: 3, title: "Tutorial Series Ep.5", views: "284K", engagement: "9.1%" },
  ];

  const topCountries = [
    { country: "United States", listeners: "1.2M", growth: "+4.8%" },
    { country: "United Kingdom", listeners: "623K", growth: "+6.2%" },
    { country: "Germany", listeners: "518K", growth: "+3.5%" },
    { country: "Japan", listeners: "412K", growth: "+9.7%" },
  ];

  // Platform Icons
  const getPlatformIcon = (platform:any) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="w-5 h-5 text-blue-400" />;
      case "instagram":
        return <Instagram className="w-5 h-5 text-pink-500" />;
      case "facebook":
        return <Facebook className="w-5 h-5 text-blue-600" />;
      case "youtube":
        return <Youtube className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A102D] via-[#2E1A47] to-[#3D2462] text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
          <p className="text-purple-300">
            Manage all your social accounts in one place
          </p>
        </div>
        <button className="px-4 py-2 bg-purple-600 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition">
          <Plus className="w-4 h-4" /> Link New Account
        </button>
      </header>

      {/* Connected Accounts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-[#2A1741] p-4 rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30 hover:border-purple-600/70 transition"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                {getPlatformIcon(account.platform)}
                <h3 className="font-semibold">{account.name}</h3>
              </div>
              <span className="text-xs px-2 py-1 bg-purple-900/50 rounded-full">
                {account.platform}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-purple-300">Followers</p>
                <p className="text-xl font-bold">{account.followers}</p>
              </div>
              <div className="flex items-center text-green-400">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm">{account.growth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-purple-700/40 mb-6">
        <button
          className={`px-4 py-2 ${
            activeTab === "overview"
              ? "border-b-2 border-purple-500 text-purple-300"
              : "text-purple-400/80"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "content"
              ? "border-b-2 border-purple-500 text-purple-300"
              : "text-purple-400/80"
          }`}
          onClick={() => setActiveTab("content")}
        >
          Content
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "analytics"
              ? "border-b-2 border-purple-500 text-purple-300"
              : "text-purple-400/80"
          }`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "revenue"
              ? "border-b-2 border-purple-500 text-purple-300"
              : "text-purple-400/80"
          }`}
          onClick={() => setActiveTab("revenue")}
        >
          Revenue
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-[#2A1741] p-4 rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-purple-400" />
            <p className="text-sm text-purple-300">Views</p>
          </div>
          <p className="text-xl font-bold">{overviewData.views}</p>
        </div>
        <div className="bg-[#2A1741] p-4 rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <p className="text-sm text-purple-300">Impressions</p>
          </div>
          <p className="text-xl font-bold">{overviewData.impressions}</p>
        </div>
        <div className="bg-[#2A1741] p-4 rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <p className="text-sm text-purple-300">Comments</p>
          </div>
          <p className="text-xl font-bold">{overviewData.comments}</p>
        </div>
        <div className="bg-[#2A1741] p-4 rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-purple-400" />
            <p className="text-sm text-purple-300">Subscribers</p>
          </div>
          <p className="text-xl font-bold">117.6K</p>
        </div>
        <div className="bg-[#2A1741] p-4 rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <p className="text-sm text-purple-300">Growth</p>
          </div>
          <p className="text-xl font-bold text-green-400">+5.7%</p>
        </div>
        <div className="bg-[#2A1741] p-4 rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-purple-400" />
            <p className="text-sm text-purple-300">Revenue</p>
          </div>
          <p className="text-xl font-bold">{overviewData.revenue}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trending Videos */}
        <div className="bg-[#2A1741] rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30 overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <Play className="w-4 h-4 text-red-400" /> Trending Videos
            </h3>
            <button
              onClick={() => toggleCard("videos")}
              className="text-purple-300 hover:text-purple-200"
            >
              {expandedCard === "videos" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
          <div
            className={`${
              expandedCard === "videos" ? "block" : "hidden"
            } p-4 pt-0`}
          >
            {trendingVideos.map((video) => (
              <div
                key={video.id}
                className="flex items-center justify-between py-3 border-b border-purple-700/20 last:border-0"
              >
                <div>
                  <h4 className="font-medium">{video.title}</h4>
                  <p className="text-sm text-purple-300">{video.views} views</p>
                </div>
                <div className="bg-purple-800/50 px-2 py-1 rounded-lg text-xs">
                  {video.engagement} engagement
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Countries */}
        <div className="bg-[#2A1741] rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30 overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" /> Top Countries
            </h3>
            <button
              onClick={() => toggleCard("countries")}
              className="text-purple-300 hover:text-purple-200"
            >
              {expandedCard === "countries" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
          <div
            className={`${
              expandedCard === "countries" ? "block" : "hidden"
            } p-4 pt-0`}
          >
            {topCountries.map((country, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-purple-700/20 last:border-0"
              >
                <div>
                  <h4 className="font-medium">{country.country}</h4>
                  <p className="text-sm text-purple-300">
                    {country.listeners} listeners
                  </p>
                </div>
                <div className="text-green-400 text-sm">{country.growth}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Generated */}
        <div className="bg-[#2A1741] rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30 overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-400" /> Revenue
              Breakdown
            </h3>
            <button
              onClick={() => toggleCard("revenue")}
              className="text-purple-300 hover:text-purple-200"
            >
              {expandedCard === "revenue" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
          <div
            className={`${
              expandedCard === "revenue" ? "block" : "hidden"
            } p-4 pt-0`}
          >
            <div className="flex items-center justify-between py-3 border-b border-purple-700/20">
              <div>
                <h4 className="font-medium">Ad Revenue</h4>
                <p className="text-sm text-purple-300">From all platforms</p>
              </div>
              <div className="text-xl font-bold">$14,580</div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-purple-700/20">
              <div>
                <h4 className="font-medium">Sponsorships</h4>
                <p className="text-sm text-purple-300">Brand deals</p>
              </div>
              <div className="text-xl font-bold">$8,200</div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <h4 className="font-medium">Merchandise</h4>
                <p className="text-sm text-purple-300">Store sales</p>
              </div>
              <div className="text-xl font-bold">$1,800</div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Insights */}
      <div className="mt-6 bg-[#2A1741] rounded-xl backdrop-blur-sm bg-opacity-60 border border-purple-700/30 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-purple-400" /> Growth Insights
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#341D54] p-4 rounded-lg">
            <p className="text-sm text-purple-300">
              Cross-Platform Performance
            </p>
            <p className="text-2xl font-bold mt-2">+24.6%</p>
            <p className="text-xs text-purple-400 mt-1">vs last quarter</p>
          </div>
          <div className="bg-[#341D54] p-4 rounded-lg">
            <p className="text-sm text-purple-300">Audience Growth</p>
            <p className="text-2xl font-bold mt-2">+15.8%</p>
            <p className="text-xs text-purple-400 mt-1">vs last quarter</p>
          </div>
          <div className="bg-[#341D54] p-4 rounded-lg">
            <p className="text-sm text-purple-300">Revenue Growth</p>
            <p className="text-2xl font-bold mt-2">+32.4%</p>
            <p className="text-xs text-purple-400 mt-1">vs last quarter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
