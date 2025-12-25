
"use client";
import { 
  CalendarIcon, 
  MessageCircle, 
  Bell, 
  User, 
  Home,
  Users,
  Gift,
  LogOut,
  Search,
  Plus
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
// import { useDispatch } from "react-redux";
// import { logout } from "@/lib/authSlice";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/lib/hook/useAuth";

// Menu items for counselor role (your current items)
const counselorItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "User Stories",
    url: "/user-stories",
    icon: Users,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageCircle,
  },
  {
    title: "Appointment",
    url: "/appointment",
    icon: CalendarIcon,
  },
  {
    title: "Earnings",
    url: "/earnings",
    icon: Gift,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
];

// Menu items for user role (customize this array with the specific items/icons you want for users)
const userItems = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },  
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },  
  {
    title: "Counncelor",
    url: "#",
    icon: Users,
  },
  {
    title: "Messages", 
    url: "/messages",
    icon: MessageCircle,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Create",
    url: "#", 
    icon: Plus,
  },
];

export function AppSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    // await dispatch(logout());
    router.push("/sign-in");
  };

  // Determine which menu items to use based on role
  const menuItems =  userItems;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {/* Logo/Top */}
           <div className="p-4 border-b border-gray-200">
             <Link href="/dashboard" className="text-xl font-bold text-blue-600">
                 {/* Refined Win */}
                 <Image src="/logo.png" alt="logo" width={100} height={150} />
              </Link>
             </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-5 gap-4">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Footer Group for Logout */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button onClick={handleLogout} type="button">
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}