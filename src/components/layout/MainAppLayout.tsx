import React from 'react';
import SidebarNav from './SidebarNav';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("grid h-screen w-full grid-cols-[288px_1fr] grid-rows-[64px_1fr] bg-background", className)}>
      {/* Sidebar */}
      <div className="row-span-2 border-r border-sidebar-foreground/10 bg-sidebar">
        <SidebarNav />
      </div>

      {/* Header */}
      <header className="col-start-2">
        <TopHeader />
      </header>

      {/* Main Content */}
      <main className="col-start-2 row-start-2 overflow-y-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
