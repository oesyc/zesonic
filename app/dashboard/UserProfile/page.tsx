"use client";
import React, { useState } from "react";
import {
  Bell,
  LogOut,
  Edit2,
  Camera,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Package,
} from "lucide-react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    username: "@alexjohnson",
    email: "alex.johnson@example.com",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    plan: "Premium Pro",
    bio: "UI/UX Designer & Full Stack Developer passionate about creating intuitive digital experiences that solve real problems.",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    coverPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    socialMedia: {
      twitter: "twitter.com/alexj",
      facebook: "facebook.com/alexjohnson",
      instagram: "instagram.com/alex.design",
      linkedin: "linkedin.com/in/alexjohnson",
      github: "github.com/alexjohnson",
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    // Axios PUT request would go here
    // axios.put('/api/user/profile', user)
    setIsEditing(false);
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSocialMediaChange = (platform:any, value:any) => {
    setUser({
      ...user,
      socialMedia: {
        ...user.socialMedia,
        [platform]: value,
      },
    });
  };

  return (
    <div className=" bg-gradient-to-br from-[#1A102D] via-[#2E1A47] to-[#3D2462]">
      {/* Cover Photo Section */}
      <div className="relative h-64 w-full">
        <img
          src={user.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-5 text-white p-2 rounded-full shadow-md cursor-pointer">
          <Camera size={20} className="text-purple-600" />
        </div>
      </div>

      {/* Profile Information */}
      <div className="max-w-6xl mx-auto px-4 pb-6 sm:px-6 lg:px-8">
        <div className="relative -mt-16 flex justify-between">
          <div className="flex">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-5 text-white p-1 rounded-full shadow-md cursor-pointer">
                <Camera size={16} className="text-purple-600" />
              </div>
            </div>

            {/* User Name & Username */}
            <div className="ml-4 mt-10">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-white">{user.username}</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          {!isEditing ? (
            <button
              onClick={handleEditProfile}
              className="mt-10 inline-flex items-center ml-20 translate-x-20 translate-y-8 px-4 h-10 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700"
            >
              <Edit2 size={16} className="mr-2" />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSaveProfile}
              className="mt-10 inline-flex items-center h-10 px-4 ml-20 translate-x-20 translate-y-8 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700"
            >
              Save Changes
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl  text-white  shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-white">
                About
              </h2>

              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm p-2 mb-4 border"
                  rows={4}
                />
              ) : (
                <p className="text-white mb-6">{user.bio}</p>
              )}

              <div className="space-y-3">
                <div className="flex items-center text-white">
                  <Mail size={18} className="mr-2 text-purple-600" />
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 shadow-sm p-1 border"
                    />
                  ) : (
                    <span>{user.email}</span>
                  )}
                </div>

                <div className="flex items-center text-white">
                  <MapPin size={18} className="mr-2 text-purple-600" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={user.location}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 shadow-sm p-1 border"
                    />
                  ) : (
                    <span>{user.location}</span>
                  )}
                </div>

                <div className="flex items-center text-white">
                  <Calendar size={18} className="mr-2 text-purple-600" />
                  <span>Joined {user.joinDate}</span>
                </div>

                <div className="flex items-center text-white">
                  <Package size={18} className="mr-2 text-purple-600" />
                  <span>
                    Current Plan:{" "}
                    <span className="font-medium text-purple-700">
                      {user.plan}
                    </span>
                  </span>
                </div>
              </div>

              {/* Plan Upgrade Button */}
              <button className="mt-6 w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700">
                Upgrade Plan
              </button>
            </div>

            {/* Social Media Links */}
            <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl  text-white  shadow-md p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Connected Accounts
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Twitter size={20} className="text-blue-400 mr-3" />
                    <span className="text-white">Twitter</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={user.socialMedia.twitter}
                      onChange={(e) =>
                        handleSocialMediaChange("twitter", e.target.value)
                      }
                      className="w-1/2 rounded-md border-gray-300 shadow-sm p-1 border text-sm"
                    />
                  ) : (
                    <span className="text-sm text-white">
                      {user.socialMedia.twitter}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Facebook size={20} className="text-blue-600 mr-3" />
                    <span className="text-white">Facebook</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={user.socialMedia.facebook}
                      onChange={(e) =>
                        handleSocialMediaChange("facebook", e.target.value)
                      }
                      className="w-1/2 rounded-md border-gray-300 shadow-sm p-1 border text-sm"
                    />
                  ) : (
                    <span className="text-sm text-white">
                      {user.socialMedia.facebook}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Instagram size={20} className="text-pink-500 mr-3" />
                    <span className="text-white">Instagram</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={user.socialMedia.instagram}
                      onChange={(e) =>
                        handleSocialMediaChange("instagram", e.target.value)
                      }
                      className="w-1/2 rounded-md border-gray-300 shadow-sm p-1 border text-sm"
                    />
                  ) : (
                    <span className="text-sm text-white">
                      {user.socialMedia.instagram}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Linkedin size={20} className="text-blue-700 mr-3" />
                    <span className="text-white">LinkedIn</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={user.socialMedia.linkedin}
                      onChange={(e) =>
                        handleSocialMediaChange("linkedin", e.target.value)
                      }
                      className="w-1/2 rounded-md border-gray-300 shadow-sm p-1 border text-sm"
                    />
                  ) : (
                    <span className="text-sm text-white">
                      {user.socialMedia.linkedin}
                    </span>
                  )}
                </div>

                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <GitHub size={20} className="text-white mr-3" />
                    <span className="text-white">GitHub</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={user.socialMedia.github}
                      onChange={(e) =>
                        handleSocialMediaChange("github", e.target.value)
                      }
                      className="w-1/2 rounded-md border-gray-300 shadow-sm p-1 border text-sm"
                    />
                  ) : (
                    <span className="text-sm text-white">
                      {user.socialMedia.github}
                    </span>
                  )}
                </div> */}
              </div>

              {!isEditing && (
                <button className="mt-6 w-full py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50">
                  Connect New Account
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Activity & Stats */}
          <div className="lg:col-span-2">
            {/* Subscription Plan Card */}
            <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl  text-white  shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Your Subscription
                </h2>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Active
                </span>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-indigo-600  p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{user.plan}</h3>
                    <p className="text-purple-100 mt-1">
                      Renews on April 17, 2025
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">$29.99</p>
                    <p className="text-purple-100">per month</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-5 text-white bg-opacity-20  p-3">
                    <p className="text-xl font-bold">50GB</p>
                    <p className="text-sm text-purple-100">Storage</p>
                  </div>
                  <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-5 text-white bg-opacity-20  p-3">
                    <p className="text-xl font-bold">100K</p>
                    <p className="text-sm text-purple-100">API Calls</p>
                  </div>
                  <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-5 text-white bg-opacity-20  p-3">
                    <p className="text-xl font-bold">24/7</p>
                    <p className="text-sm text-purple-100">Support</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <button className="flex-1 py-2 bg-gray-100 text-indigo-700 rounded-md hover:bg-gray-200">
                  Change Plan
                </button>
                <button className="flex-1 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50">
                  Cancel Subscription
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl  text-white  shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Recent Activity
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Edit2 size={16} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Updated profile information</p>
                    <p className="text-sm text-white">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Package size={16} className="text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">
                      Upgraded to Premium Pro plan
                    </p>
                    <p className="text-sm text-white">1 week ago</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Linkedin size={16} className="text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Connected LinkedIn account</p>
                    <p className="text-sm text-white">2 weeks ago</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Package size={16} className="text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Registered for the platform</p>
                    <p className="text-sm text-white">January 17, 2023</p>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full py-2 border border-gray-300 text-white rounded-md hover:bg-gray-50">
                View All Activity
              </button>
            </div>

            {/* Usage Statistics */}
            <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl  text-white  shadow-md p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Usage Statistics
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Storage (35GB / 50GB)</span>
                    <span className="text-white">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">
                      API Calls (78K / 100K)
                    </span>
                    <span className="text-white">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Projects (8 / 10)</span>
                    <span className="text-white">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 ">
                  <h3 className="text-teal-600 text-sm uppercase">
                    Billing cycle
                  </h3>
                  <p className="text-xl font-semibold text-teal-600">Monthly</p>
                </div>
                <div className="bg-gray-50 p-4 ">
                  <h3 className="text-teal-600 text-sm uppercase">
                    Next billing date
                  </h3>
                  <p className="text-xl font-semibold text-teal-600">
                    Apr 17, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
