"use client";
import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

type LayoutProps = {
  isMobile: boolean | undefined;
  children?: ReactNode | undefined;
};

export const Layout = ({ children, isMobile }: LayoutProps) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(!isMobile);
  return (
    <div
      className={classNames({
        "grid bg-space-cadet min-h-screen": true,
        "md:grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true
      })}
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
        isMobile={isMobile}
        setShowSidebar={setShowSidebar}
      />
      <div>
        <Navbar onMenuButtonClick={() => setShowSidebar(prev => !prev)} />
        {children}
      </div>
    </div>
  );
};
