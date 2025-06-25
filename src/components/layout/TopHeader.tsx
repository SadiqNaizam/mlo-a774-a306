import React from 'react';
import {
  Bell,
  Globe,
  LayoutGrid,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  User,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

const TopHeader: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-secondary-foreground" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-full rounded-md bg-secondary pl-10 md:w-64 lg:w-96"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" size="icon">
          <LayoutGrid className="h-5 w-5 text-secondary-foreground" />
          <span className="sr-only">Apps</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Moon className="h-5 w-5 text-secondary-foreground" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-secondary-foreground" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5 text-secondary-foreground" />
          <span className="sr-only">Language</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border-2 border-transparent hover:border-primary">
                <AvatarImage src="https://i.pravatar.cc/150?u=davidm" alt="David McMichael" />
                <AvatarFallback>DM</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">David McMichael</p>
                <p className="text-xs leading-none text-muted-foreground">
                  david.m@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
