// components/Dashboard.tsx
import React, { ReactNode } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
interface DashboardProps {
  children: ReactNode; // This will represent the routed component's content in Next.js
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 bg-gray-100 overflow-y-auto">
          {children} {/* This will render the nested pages or components */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
