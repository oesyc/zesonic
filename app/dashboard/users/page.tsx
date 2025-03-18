"use client";
import React, { useState } from "react";
import {
  Users,
  UserPlus,
  UserCheck,
  UserX,
  Shield,
  Settings,
  Search,
  Filter,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  Mail,
  Edit,
  Trash,
  X,
  AlertCircle,
} from "lucide-react";

const UserManagementPanel = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const [isPermissionsOpen, setIsPermissionsOpen] = useState(false);

  // Sample user data
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      role: "Admin",
      status: "Active",
      avatar: "/api/placeholder/32/32",
      lastActive: "Just now",
      permissions: ["Full Access", "Data Management", "User Management"],
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      role: "Editor",
      status: "Active",
      avatar: "/api/placeholder/32/32",
      lastActive: "2 hours ago",
      permissions: ["Content Creation", "Data Analysis"],
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@example.com",
      role: "Viewer",
      status: "Inactive",
      avatar: "/api/placeholder/32/32",
      lastActive: "3 days ago",
      permissions: ["View Only"],
    },
    {
      id: 4,
      name: "Priya Patel",
      email: "priya.p@example.com",
      role: "Editor",
      status: "Pending",
      avatar: "/api/placeholder/32/32",
      lastActive: "Never",
      permissions: ["Content Creation", "AI Tools Access"],
    },
    {
      id: 5,
      name: "David Rodriguez",
      email: "d.rodriguez@example.com",
      role: "Admin",
      status: "Active",
      avatar: "/api/placeholder/32/32",
      lastActive: "5 min ago",
      permissions: ["Full Access", "User Management"],
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedTab === "all") return matchesSearch;
    if (selectedTab === "active")
      return matchesSearch && user.status === "Active";
    if (selectedTab === "inactive")
      return matchesSearch && user.status === "Inactive";
    if (selectedTab === "pending")
      return matchesSearch && user.status === "Pending";

    return matchesSearch;
  });

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Active":
        return "bg-[#5EEAD4]"; // Teal for Active
      case "Inactive":
        return "bg-[#C4B5FD]"; // Light purple for Inactive
      case "Pending":
        return "bg-[#FBBF24]"; // Yellow for Pending
      default:
        return "bg-[#C4B5FD]";
    }
  };

  const getRoleColor = (role: any) => {
    switch (role) {
      case "Admin":
        return "bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A] text-white";
      case "Editor":
        return "bg-gradient-to-r from-[#4E7DF7] to-[#9D7AF8] text-white";
      case "Viewer":
        return "bg-[#4A2E70] text-white";
      default:
        return "bg-[#4A2E70] text-white";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1A102D] text-white rounded-none">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#4A2E70]/40 bg-[#1A102D]/50 backdrop-blur-md">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A] p-2 rounded-lg mr-3">
            <Users size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C4B5FD] to-[#5A2E8D]">
            User Management
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-[#4A2E70] hover:bg-[#5A2E8D] transition-all duration-200">
            <Settings size={16} className="text-[#C4B5FD]" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Panel */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold mb-2 text-white">
                Users & Permissions
              </h2>
              <p className="text-lg text-[#C4B5FD] font-light">
                Manage users, roles, and access control with ease
              </p>
            </div>
            <button className="flex items-center justify-center px-5 py-2 bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A] hover:from-[#4A2E70] hover:to-[#5A2E8D] rounded-xl text-white transition duration-300 shadow-md shadow-[#5A2E8D]/20 hover:shadow-lg hover:shadow-[#6A4E9A]/30">
              <UserPlus size={16} className="mr-2" />
              <span className="font-medium">Add New User</span>
            </button>
          </div>

          {/* Search & Filter */}
          <div className="mb-8 bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl p-5 border border-[#4A2E70] shadow-inner">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search
                  size={18}
                  className="absolute left-3 top-3 text-[#C4B5FD]"
                />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#2E1A47] border border-[#4A2E70] rounded-xl py-2 pl-10 pr-4 text-white placeholder-[#C4B5FD] focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50 transition-all duration-200"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-center px-5 py-2 bg-[#4A2E70] hover:bg-[#5A2E8D] border border-[#4A2E70] rounded-xl text-white transition duration-200 shadow-md hover:shadow-lg"
                >
                  <Filter size={16} className="mr-2 text-[#C4B5FD]" />
                  <span className="font-medium">Filters</span>
                  <ChevronDown
                    size={16}
                    className={`ml-2 transition-transform ${
                      showFilters ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <select className="bg-[#4A2E70] border border-[#4A2E70] rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50 transition-all duration-200">
                  <option>Sort by Name</option>
                  <option>Sort by Role</option>
                  <option>Sort by Status</option>
                  <option>Sort by Last Active</option>
                </select>
              </div>
            </div>

            {/* Expandable Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-[#4A2E70] grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                {["Role", "Status", "Permissions"].map((label) => (
                  <div key={label}>
                    <label className="text-sm text-[#C4B5FD] block mb-2">
                      {label}
                    </label>
                    <select className="w-full bg-[#2E1A47] border border-[#4A2E70] rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5A2E8D]/50 transition-all duration-200">
                      <option>All {label}s</option>
                      {label === "Role" && (
                        <>
                          <option>Admin</option>
                          <option>Editor</option>
                          <option>Viewer</option>
                        </>
                      )}
                      {label === "Status" && (
                        <>
                          <option>Active</option>
                          <option>Inactive</option>
                          <option>Pending</option>
                        </>
                      )}
                      {label === "Permissions" && (
                        <>
                          <option>Full Access</option>
                          <option>User Management</option>
                          <option>Data Management</option>
                          <option>Content Creation</option>
                          <option>View Only</option>
                        </>
                      )}
                    </select>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="mb-6 flex border-b border-[#4A2E70]/40">
            {[
              {
                tab: "all",
                label: "All Users",
                count: users.length,
                countColor: "bg-[#4A2E70]",
              },
              {
                tab: "active",
                label: "Active",
                count: users.filter((u) => u.status === "Active").length,
                countColor: "bg-[#4A2E70]/50 text-[#5EEAD4]",
              },
              {
                tab: "inactive",
                label: "Inactive",
                count: users.filter((u) => u.status === "Inactive").length,
                countColor: "bg-[#4A2E70] text-[#C4B5FD]",
              },
              {
                tab: "pending",
                label: "Pending",
                count: users.filter((u) => u.status === "Pending").length,
                countColor: "bg-[#4A2E70]/50 text-[#FBBF24]",
              },
            ].map(({ tab, label, count, countColor }) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 font-medium text-base transition-colors relative ${
                  selectedTab === tab
                    ? "text-[#5EEAD4]"
                    : "text-[#C4B5FD] hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded-full ${countColor}`}
                >
                  {count}
                </span>
                {selectedTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Users Table */}
          <div className="bg-[#3D2462] bg-opacity-30 backdrop-blur-md rounded-xl border border-[#4A2E70] overflow-hidden shadow-inner">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2E1A47]/60">
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#C4B5FD] uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#C4B5FD] uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#C4B5FD] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#C4B5FD] uppercase tracking-wider">
                      Last Active
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#C4B5FD] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#4A2E70]">
                  {filteredUsers.map((user: any) => (
                    <tr
                      key={user.id}
                      className="hover:bg-[#4A2E70]/30 transition-all duration-200 cursor-pointer group"
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-[#2E1A47] overflow-hidden mr-3 transition-all duration-300 group-hover:scale-110">
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-base font-medium text-white group-hover:text-[#5EEAD4] transition-colors duration-200">
                              {user.name}
                            </div>
                            <div className="text-sm text-[#C4B5FD]">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(
                            user.role
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full ${getStatusColor(
                              user.status
                            )} mr-2`}
                          ></div>
                          <span className="text-base">{user.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-base text-[#C4B5FD]">
                        {user.lastActive}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-3 justify-end">
                          <button className="p-2 rounded-full hover:bg-[#4A2E70] transition-all duration-200">
                            <Edit
                              size={18}
                              className="text-[#5A2E8D] hover:text-[#6A4E9A]"
                            />
                          </button>
                          <button className="p-2 rounded-full hover:bg-[#4A2E70] transition-all duration-200">
                            <Mail
                              size={18}
                              className="text-[#5A2E8D] hover:text-[#6A4E9A]"
                            />
                          </button>
                          <button className="p-2 rounded-full hover:bg-[#EF4444]/20 transition-all duration-200">
                            <Trash
                              size={18}
                              className="text-[#EF4444] hover:text-[#F87171]"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4A2E70] mb-4">
                  <AlertCircle size={28} className="text-[#C4B5FD]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  No Users Found
                </h3>
                <p className="text-[#C4B5FD] max-w-md mx-auto text-base">
                  No users match your current search criteria. Try adjusting
                  your filters or search query.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between">
            <div className="text-base text-[#C4B5FD]">
              Showing{" "}
              <span className="font-medium text-white">
                {filteredUsers.length}
              </span>{" "}
              of <span className="font-medium text-white">{users.length}</span>{" "}
              users
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 rounded-xl bg-[#4A2E70] text-white hover:bg-[#5A2E8D] transition-all duration-200 shadow-md hover:shadow-lg">
                Previous
              </button>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A] text-white hover:from-[#4A2E70] hover:to-[#5A2E8D] transition-all duration-200 shadow-md hover:shadow-lg">
                1
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#4A2E70] text-white hover:bg-[#5A2E8D] transition-all duration-200 shadow-md hover:shadow-lg">
                2
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#4A2E70] text-white hover:bg-[#5A2E8D] transition-all duration-200 shadow-md hover:shadow-lg">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* User Details Panel */}
        {selectedUser && (
          <div className="hidden lg:block w-80 bg-[#3D2462] bg-opacity-40 backdrop-blur-md p-6 border-l border-[#4A2E70] shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">User Details</h3>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-[#C4B5FD] hover:text-white p-2 rounded-full hover:bg-[#4A2E70]/50 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col items-center mb-6">
              <div className="h-20 w-20 rounded-full bg-[#2E1A47] overflow-hidden mb-4 transition-all duration-300 hover:scale-105">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="text-xl font-medium text-white">
                {selectedUser.name}
              </h4>
              <p className="text-base text-[#C4B5FD]">{selectedUser.email}</p>
              <div className="mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(
                    selectedUser.role
                  )}`}
                >
                  {selectedUser.role}
                </span>
              </div>
            </div>

            <div className="border-t border-[#4A2E70] pt-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-base text-[#C4B5FD]">Account Status</span>
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(
                      selectedUser.status
                    )} mr-2`}
                  ></div>
                  <span className="text-base">{selectedUser.status}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-base text-[#C4B5FD]">Last Active</span>
                <span className="text-base">{selectedUser.lastActive}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base text-[#C4B5FD]">Created</span>
                <span className="text-base">Jan 15, 2025</span>
              </div>
            </div>

            <div className="border-t border-[#4A2E70] pt-4 mb-6">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => setIsPermissionsOpen(!isPermissionsOpen)}
              >
                <h4 className="text-lg font-medium text-white flex items-center">
                  <Shield size={16} className="mr-2 text-[#5A2E8D]" />
                  User Permissions
                </h4>
                {isPermissionsOpen ? (
                  <ChevronUp size={16} className="text-[#C4B5FD]" />
                ) : (
                  <ChevronDown size={16} className="text-[#C4B5FD]" />
                )}
              </div>
              {isPermissionsOpen && (
                <div className="space-y-3 animate-fade-in">
                  {selectedUser.permissions.map((permission, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#5A2E8D] mr-2"></div>
                      <span className="text-base">{permission}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-[#5A2E8D] to-[#6A4E9A] hover:from-[#4A2E70] hover:to-[#5A2E8D] py-2 px-4 rounded-xl text-base transition duration-300 text-white font-medium shadow-md shadow-[#5A2E8D]/20 hover:shadow-lg hover:shadow-[#6A4E9A]/30 flex items-center justify-center">
                <Edit size={16} className="mr-2" />
                Edit User
              </button>
              <button className="w-full bg-[#4A2E70] hover:bg-[#5A2E8D] py-2 px-4 rounded-xl text-base transition duration-300 text-white font-medium border border-[#4A2E70] flex items-center justify-center shadow-md hover:shadow-lg">
                <Mail size={16} className="mr-2" />
                Send Message
              </button>
              <button className="w-full bg-[#EF4444]/20 hover:bg-[#EF4444]/30 py-2 px-4 rounded-xl text-base transition duration-300 text-[#EF4444] font-medium border border-[#EF4444]/30 flex items-center justify-center shadow-md hover:shadow-lg">
                <UserX size={16} className="mr-2" />
                Deactivate User
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// CSS for animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
`;

export default UserManagementPanel;
