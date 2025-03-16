import React, { ReactNode } from "react";
import Header from "./components/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
