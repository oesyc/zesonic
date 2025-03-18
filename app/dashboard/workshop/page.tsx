"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  BarChart3,
  PenTool,
  MessageSquare,
  Upload,
  Clock,
  Sparkles,
  Image,
  Video,
  Edit,
  Search,
  TrendingUp,
  Menu,
  X,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import axios from "axios";

const WorkshopDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contentItems, setContentItems] = useState<
    {
      id: number;
      title: string;
      type: string;
      status: string;
      scheduledFor: string | null;
      engagement: number;
      thumbnail: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string }[]>([]);

  useEffect(() => {
    // Simulate fetching data with axios
    const fetchData = async () => {
      try {
        // In a real app, you would fetch from your actual API
        // const response = await axios.get(
        //   "https://dummyapi.io/data/v1/post?limit=10"
        // );

        // Format the response for our content items
        const formattedItems = [
          {
            id: 1,
            title: "10 AI Tools Every Content Creator Should Know",
            type: "article",
            status: "published",
            scheduledFor: "2025-03-15",
            engagement: 423,
            thumbnail: "/api/placeholder/80/60",
          },
          {
            id: 2,
            title: "Video Editing Masterclass",
            type: "video",
            status: "draft",
            scheduledFor: null,
            engagement: 0,
            thumbnail: "/api/placeholder/80/60",
          },
          {
            id: 3,
            title: "Social Media Strategy for 2025",
            type: "article",
            status: "scheduled",
            scheduledFor: "2025-03-20",
            engagement: 0,
            thumbnail: "/api/placeholder/80/60",
          },
          {
            id: 4,
            title: "Photography Tips for Product Shots",
            type: "article",
            status: "published",
            scheduledFor: "2025-03-10",
            engagement: 215,
            thumbnail: "/api/placeholder/80/60",
          },
        ];

        setContentItems(formattedItems);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const trendingSuggestions = [
    "AI-powered content creation tools",
    "Video marketing strategies for 2025",
    "Social media algorithm changes",
    "Content repurposing techniques",
  ];

  const recentAnalytics = [
    { day: "Mon", views: 120 },
    { day: "Tue", views: 150 },
    { day: "Wed", views: 180 },
    { day: "Thu", views: 220 },
    { day: "Fri", views: 205 },
    { day: "Sat", views: 190 },
    { day: "Sun", views: 240 },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setChatMessages([...chatMessages, { sender: "user", text: message }]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Based on your content, I suggest adding more visual elements and incorporating these keywords: workshop, AI tools, content strategy, engagement. Would you like me to suggest a headline?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex h-screen text-gray-100 bg-gradient-to-br from-[#1A102D] via-[#2E1A47] to-[#3D2462]">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 z-20 h-full transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0 lg:w-20"
        }`}
      >
        <div className="h-full overflow-y-auto bg-black bg-opacity-30 backdrop-blur-lg">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-full hover:bg-purple-800"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="mt-6">
            <div className="px-4 mb-6">
              <div
                className={`flex items-center p-3 mb-2 rounded-lg hover:bg-purple-800 cursor-pointer ${
                  activeTab === "dashboard" ? "bg-purple-900" : ""
                }`}
                onClick={() => setActiveTab("dashboard")}
              >
                <BarChart3 size={20} />
                {sidebarOpen && <span className="ml-3">Dashboard</span>}
              </div>
              <div
                className={`flex items-center p-3 mb-2 rounded-lg hover:bg-purple-800 cursor-pointer ${
                  activeTab === "content" ? "bg-purple-900" : ""
                }`}
                onClick={() => setActiveTab("content")}
              >
                <FileText size={20} />
                {sidebarOpen && <span className="ml-3">Content</span>}
              </div>
              <div
                className={`flex items-center p-3 mb-2 rounded-lg hover:bg-purple-800 cursor-pointer ${
                  activeTab === "schedule" ? "bg-purple-900" : ""
                }`}
                onClick={() => setActiveTab("schedule")}
              >
                <Calendar size={20} />
                {sidebarOpen && <span className="ml-3">Schedule</span>}
              </div>
              <div
                className={`flex items-center p-3 mb-2 rounded-lg hover:bg-purple-800 cursor-pointer ${
                  activeTab === "ai-chat" ? "bg-purple-900" : ""
                }`}
                onClick={() => {
                  setActiveTab("ai-chat");
                  setAiChatOpen(true);
                }}
              >
                <MessageSquare size={20} />
                {sidebarOpen && <span className="ml-3">AI Chat</span>}
              </div>
              <div
                className={`flex items-center p-3 mb-2 rounded-lg hover:bg-purple-800 cursor-pointer ${
                  activeTab === "editor" ? "bg-purple-900" : ""
                }`}
                onClick={() => setActiveTab("editor")}
              >
                <PenTool size={20} />
                {sidebarOpen && <span className="ml-3">Editor</span>}
              </div>
              <div
                className={`flex items-center p-3 mb-2 rounded-lg hover:bg-purple-800 cursor-pointer ${
                  activeTab === "upload" ? "bg-purple-900" : ""
                }`}
                onClick={() => setActiveTab("upload")}
              >
                <Upload size={20} />
                {sidebarOpen && <span className="ml-3">Upload</span>}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden h-full overflow-y-auto">
        {/* Dashboard Content */}
        <main className="">
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Stats Overview */}
              <div className="col-span-1 lg:col-span-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Content Views</p>
                        <p className="text-2xl font-bold">2,543</p>
                      </div>
                      <div className="p-2 bg-purple-900 rounded-lg">
                        <BarChart3 size={24} />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-green-400">
                      ↑ 12% from last week
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Published</p>
                        <p className="text-2xl font-bold">18</p>
                      </div>
                      <div className="p-2 bg-purple-900 rounded-lg">
                        <FileText size={24} />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-green-400">
                      ↑ 5% from last week
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Scheduled</p>
                        <p className="text-2xl font-bold">7</p>
                      </div>
                      <div className="p-2 bg-purple-900 rounded-lg">
                        <Clock size={24} />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-green-400">On track</p>
                  </div>
                </div>

                {/* Analytics Chart */}
                <div className="p-4 mt-6 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Content Performance</h3>
                    <select className="px-2 py-1 text-sm bg-purple-900 rounded">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                    </select>
                  </div>
                  <div className="h-64">
                    {/* Simplified chart display */}
                    <div className="flex items-end justify-between h-48">
                      {recentAnalytics.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center w-full"
                        >
                          <div
                            className="w-4/5 bg-purple-600 hover:bg-purple-500 rounded-t"
                            style={{ height: `${(item.views / 240) * 100}%` }}
                          ></div>
                          <p className="mt-2 text-xs">{item.day}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar content */}
              <div className="col-span-1">
                {/* AI Suggestions */}
                <div className="p-4 mb-6 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">AI Content Suggestions</h3>
                    <Sparkles size={16} className="text-purple-400" />
                  </div>
                  <div>
                    {trendingSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 mb-2 rounded-lg hover:bg-purple-900 cursor-pointer"
                      >
                        <TrendingUp
                          size={16}
                          className="mr-2 text-purple-400"
                        />
                        <p className="text-sm">{suggestion}</p>
                      </div>
                    ))}
                    <button className="w-full py-2 mt-2 text-sm font-medium text-center text-white bg-purple-800 rounded-lg hover:bg-purple-700">
                      Generate More Ideas
                    </button>
                  </div>
                </div>

                {/* Upcoming Schedule */}
                <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Upcoming Schedule</h3>
                    <Calendar size={16} className="text-purple-400" />
                  </div>
                  <div className="p-2 mb-2 border-l-4 border-purple-500 rounded bg-purple-900 bg-opacity-50">
                    <p className="text-sm font-medium">
                      Social Media Strategy for 2025
                    </p>
                    <div className="flex items-center mt-1 text-xs text-gray-400">
                      <Clock size={12} className="mr-1" />
                      <span>March 20, 2025 • 10:00 AM</span>
                    </div>
                  </div>
                  <div className="p-2 mb-2 border-l-4 border-blue-500 rounded bg-purple-900 bg-opacity-50">
                    <p className="text-sm font-medium">Weekly Content Review</p>
                    <div className="flex items-center mt-1 text-xs text-gray-400">
                      <Clock size={12} className="mr-1" />
                      <span>March 21, 2025 • 2:00 PM</span>
                    </div>
                  </div>
                  <div className="p-2 border-l-4 border-green-500 rounded bg-purple-900 bg-opacity-50">
                    <p className="text-sm font-medium">
                      Video Upload: Editing Tutorial
                    </p>
                    <div className="flex items-center mt-1 text-xs text-gray-400">
                      <Clock size={12} className="mr-1" />
                      <span>March 22, 2025 • 9:00 AM</span>
                    </div>
                  </div>
                  <button className="w-full py-2 text-sm font-medium text-center text-white bg-purple-800 rounded-lg hover:bg-purple-700">
                    View Full Calendar
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "content" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Content Management</h2>
                <button className="px-4 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-600">
                  New Content
                </button>
              </div>

              <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <select className="px-3 py-2 mr-2 text-sm bg-purple-900 rounded">
                      <option>All Types</option>
                      <option>Articles</option>
                      <option>Videos</option>
                      <option>Images</option>
                    </select>
                    <select className="px-3 py-2 text-sm bg-purple-900 rounded">
                      <option>All Status</option>
                      <option>Published</option>
                      <option>Draft</option>
                      <option>Scheduled</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <Search className="mr-2" size={18} />
                    <input
                      type="text"
                      placeholder="Search content..."
                      className="px-3 py-2 text-sm bg-black bg-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Scheduled</th>
                        <th className="px-4 py-3">Engagement</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contentItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-800 hover:bg-purple-900 hover:bg-opacity-30"
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-10 h-8 mr-3 rounded"
                              />
                              <span>{item.title}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="flex items-center">
                              {item.type === "video" ? (
                                <Video size={16} className="mr-1" />
                              ) : (
                                <FileText size={16} className="mr-1" />
                              )}
                              {item.type}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 text-xs rounded ${
                                item.status === "published"
                                  ? "bg-green-900 text-green-200"
                                  : item.status === "draft"
                                  ? "bg-gray-700 text-gray-200"
                                  : "bg-blue-900 text-blue-200"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {item.scheduledFor || "-"}
                          </td>
                          <td className="px-4 py-3">{item.engagement}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <button className="p-1 mr-2 rounded hover:bg-purple-700">
                                <Edit size={16} />
                              </button>
                              <button className="p-1 rounded hover:bg-purple-700">
                                <MessageSquare size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ai-chat" || aiChatOpen ? (
            <div className="relative overflow-y-auto bg-black bg-opacity-30 backdrop-blur-lg rounded-lg h-5/6">
              <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-800 bg-black bg-opacity-70">
                <h2 className="text-xl font-bold">AI Assistant</h2>
                <button
                  className="p-2 rounded-full hover:bg-purple-800"
                  onClick={() => {
                    setAiChatOpen(false);
                    if (activeTab === "ai-chat") setActiveTab("dashboard");
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col h-full">
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="p-4 mb-4 text-center bg-purple-900 bg-opacity-30 rounded-lg">
                    <p>
                      AI Workshop Assistant is ready to help with content
                      creation, editing, and suggestions!
                    </p>
                  </div>

                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex mb-4 ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`p-3 max-w-3/4 rounded-lg ${
                          msg.sender === "user"
                            ? "bg-purple-800"
                            : "bg-gray-800"
                        }`}
                      >
                        <p>{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-800">
                  <div className="flex">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about content ideas, editing help, or keyword suggestions..."
                      className="flex-1 px-4 py-2 bg-black bg-opacity-50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                    />
                    <button
                      onClick={handleSendMessage}
                      className="px-4 py-2 bg-purple-700 rounded-r-lg hover:bg-purple-600"
                    >
                      <MessageSquare size={20} />
                    </button>
                  </div>
                  <div className="flex flex-wrap mt-2">
                    <button className="px-3 py-1 mr-2 mb-2 text-xs bg-purple-900 rounded-full hover:bg-purple-800">
                      Generate content ideas
                    </button>
                    <button className="px-3 py-1 mr-2 mb-2 text-xs bg-purple-900 rounded-full hover:bg-purple-800">
                      Suggest keywords
                    </button>
                    <button className="px-3 py-1 mr-2 mb-2 text-xs bg-purple-900 rounded-full hover:bg-purple-800">
                      Improve my article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === "editor" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Content Editor</h2>
                <div>
                  <button className="px-4 py-2 mr-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600">
                    Save Draft
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-600">
                    Publish
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="col-span-1 lg:col-span-2">
                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <input
                      type="text"
                      placeholder="Enter title here..."
                      className="w-full px-3 py-2 mb-4 text-xl font-bold bg-black bg-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <textarea
                      placeholder="Write your content here..."
                      className="w-full h-64 px-3 py-2 bg-black bg-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <div className="flex flex-wrap mt-4">
                      <button className="flex items-center px-3 py-2 mr-2 mb-2 text-sm bg-purple-900 rounded hover:bg-purple-800">
                        <Image size={16} className="mr-1" />
                        Add Image
                      </button>
                      <button className="flex items-center px-3 py-2 mr-2 mb-2 text-sm bg-purple-900 rounded hover:bg-purple-800">
                        <Video size={16} className="mr-1" />
                        Add Video
                      </button>
                      <button className="flex items-center px-3 py-2 mr-2 mb-2 text-sm bg-purple-900 rounded hover:bg-purple-800">
                        <Sparkles size={16} className="mr-1" />
                        AI Improve
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="p-4 mb-6 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <h3 className="mb-4 font-bold">AI Content Suggestions</h3>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">
                        Suggested Keywords:
                      </label>
                      <div className="flex flex-wrap">
                        <span className="px-2 py-1 m-1 text-xs bg-purple-900 rounded-full">
                          workshop
                        </span>
                        <span className="px-2 py-1 m-1 text-xs bg-purple-900 rounded-full">
                          content creation
                        </span>
                        <span className="px-2 py-1 m-1 text-xs bg-purple-900 rounded-full">
                          AI tools
                        </span>
                        <span className="px-2 py-1 m-1 text-xs bg-purple-900 rounded-full">
                          tutorial
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Readability:</label>
                      <div className="w-full h-2 bg-gray-700 rounded-full">
                        <div className="w-3/4 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-400">
                        Good - Score 75/100
                      </p>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">
                        SEO Suggestions:
                      </label>
                      <ul className="text-sm">
                        <li className="mb-1">• Add more headings</li>
                        <li className="mb-1">
                          • Include target keyword in first paragraph
                        </li>
                        <li className="mb-1">• Add more media content</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <h3 className="mb-4 font-bold">Publishing Settings</h3>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Category:</label>
                      <select className="w-full px-3 py-2 bg-purple-900 rounded">
                        <option>Tutorials</option>
                        <option>News</option>
                        <option>Reviews</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Schedule:</label>
                      <input
                        type="datetime-local"
                        className="w-full px-3 py-2 bg-purple-900 rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">
                        Featured Image:
                      </label>
                      <div className="flex items-center justify-center w-full h-32 mb-2 bg-black bg-opacity-50 border-2 border-dashed border-gray-600 rounded cursor-pointer hover:border-purple-500">
                        <div className="flex flex-col items-center">
                          <Upload size={24} className="mb-2" />
                          <p className="text-sm">Click to upload</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">
                        Recommended size: 1200x800px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "upload" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Upload Content</h2>
                <div>
                  <select className="px-3 py-2 mr-2 text-sm bg-purple-900 rounded">
                    <option>Article</option>
                    <option>Video</option>
                    <option>Image</option>
                    <option>Audio</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="col-span-1">
                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <h3 className="mb-4 font-bold">Upload Media</h3>
                    <div className="flex items-center justify-center w-full h-64 mb-4 bg-black bg-opacity-50 border-2 border-dashed border-gray-600 rounded cursor-pointer hover:border-purple-500">
                      <div className="flex flex-col items-center">
                        <Upload size={36} className="mb-2" />
                        <p className="mb-2">Drag and drop files here</p>
                        <p className="text-xs text-gray-400">
                          Or click to browse
                        </p>
                      </div>
                    </div>
                    <div className="p-3 mb-4 bg-purple-900 bg-opacity-50 rounded">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 mr-3 bg-purple-700 rounded flex items-center justify-center">
                            <Video size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              tutorial-video.mp4
                            </p>
                            <p className="text-xs text-gray-400">
                              12.8 MB • 45% complete
                            </p>
                          </div>
                        </div>
                        <button className="p-1 rounded hover:bg-purple-700">
                          <X size={16} />
                        </button>
                      </div>
                      <div className="w-full h-1 mt-2 bg-gray-700 rounded-full">
                        <div className="w-2/5 h-1 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap">
                      <button className="flex items-center px-3 py-2 mr-2 mb-2 text-sm bg-purple-900 rounded hover:bg-purple-800">
                        <Upload size={16} className="mr-1" />
                        Upload More
                      </button>
                      <button className="flex items-center px-3 py-2 mr-2 mb-2 text-sm bg-purple-900 rounded hover:bg-purple-800">
                        <Edit size={16} className="mr-1" />
                        Edit Media
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="p-4 mb-6 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <h3 className="mb-4 font-bold">Content Details</h3>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Title:</label>
                      <input
                        type="text"
                        placeholder="Enter title..."
                        className="w-full px-3 py-2 bg-black bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Description:</label>
                      <textarea
                        placeholder="Enter description..."
                        className="w-full h-24 px-3 py-2 bg-black bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Tags:</label>
                      <input
                        type="text"
                        placeholder="Enter tags separated by commas..."
                        className="w-full px-3 py-2 bg-black bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-medium">
                        AI Enhancement:
                      </h4>
                      <div className="flex items-center mb-2">
                        <input id="caption" type="checkbox" className="mr-2" />
                        <label htmlFor="caption" className="text-sm">
                          Auto-generate captions
                        </label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input id="keywords" type="checkbox" className="mr-2" />
                        <label htmlFor="keywords" className="text-sm">
                          Suggest keywords
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="optimize" type="checkbox" className="mr-2" />
                        <label htmlFor="optimize" className="text-sm">
                          Optimize for SEO
                        </label>
                      </div>
                    </div>
                    <button className="w-full py-2 mt-4 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-600">
                      Save & Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Content Schedule</h2>
                <button className="px-4 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-600">
                  Schedule New
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="col-span-1 lg:col-span-2">
                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold">Calendar View</h3>
                      <select className="px-3 py-1 text-sm bg-purple-900 rounded">
                        <option>March 2025</option>
                        <option>April 2025</option>
                        <option>May 2025</option>
                      </select>
                    </div>

                    {/* Calendar grid - simplified for demo */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
                          <div
                            key={day}
                            className="p-2 text-center text-sm font-medium text-gray-400"
                          >
                            {day}
                          </div>
                        )
                      )}
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(
                        (date) => (
                          <div
                            key={date}
                            className="relative p-2 h-24 border border-gray-800 rounded bg-black bg-opacity-20 hover:bg-purple-900 hover:bg-opacity-20 cursor-pointer"
                          >
                            <div className="text-sm">{date}</div>
                            {date === 15 && (
                              <div className="p-1 mt-1 text-xs bg-purple-900 rounded truncate">
                                Article: AI Tools
                              </div>
                            )}
                            {date === 20 && (
                              <div className="p-1 mt-1 text-xs bg-blue-900 rounded truncate">
                                Social Media Strategy
                              </div>
                            )}
                            {date === 22 && (
                              <div className="p-1 mt-1 text-xs bg-green-900 rounded truncate">
                                Video Upload
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="p-4 mb-6 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <h3 className="mb-4 font-bold">Quick Schedule</h3>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Content:</label>
                      <select className="w-full px-3 py-2 bg-purple-900 rounded">
                        <option>Select content...</option>
                        <option>
                          10 AI Tools Every Content Creator Should Know
                        </option>
                        <option>Video Editing Masterclass</option>
                        <option>Photography Tips for Product Shots</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Date:</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-purple-900 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Time:</label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 bg-purple-900 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">Platforms:</label>
                      <div className="flex items-center mb-2">
                        <input id="website" type="checkbox" className="mr-2" />
                        <label htmlFor="website" className="text-sm">
                          Website
                        </label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input id="social" type="checkbox" className="mr-2" />
                        <label htmlFor="social" className="text-sm">
                          Social Media
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="email" type="checkbox" className="mr-2" />
                        <label htmlFor="email" className="text-sm">
                          Email Newsletter
                        </label>
                      </div>
                    </div>
                    <button className="w-full py-2 mt-4 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-600">
                      Schedule Content
                    </button>
                  </div>

                  <div className="p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg">
                    <h3 className="mb-4 font-bold">AI Schedule Optimization</h3>
                    <p className="mb-4 text-sm">
                      Let AI analyze your audience engagement and suggest
                      optimal posting times.
                    </p>
                    <button className="w-full py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-600 flex items-center justify-center">
                      <Sparkles size={16} className="mr-2" />
                      Optimize Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default WorkshopDashboard;
