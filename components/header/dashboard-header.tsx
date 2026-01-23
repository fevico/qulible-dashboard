"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const { setOpen } = useSidebar();

  const user = {
    name: "john doe",
    avatar: "/qulible-logo.png",
    role: "Admin"
  }

  return (
    <header className="h-16 bg border-b border-border px-6 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm bg-[#132246]">
      {/* Left side - Menu button and search */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="relative max-w-md">
          <Input 
            placeholder="Search..." 
            className="w-full lg:w-80 pl-3 pr-10 bg-muted/50" 
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm border-white">
            ⌘K
          </div>
        </div>
      </div>
      
      {/* Right side - Notifications and user profile */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" size={40} color="white" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-background"></span>
        </Button>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.avatar || "/placeholder.jpg"} alt={user?.name} />
            <AvatarFallback className="bg-primary/10 text-white">
              {user?.name?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block text-sm">
            <div className="font-medium text-white">{user?.name}</div>
            <div className="text-xs text-white">{user?.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}