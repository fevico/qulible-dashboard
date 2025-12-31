
"use client";
import { 
  CalendarIcon, 
  MessageCircle, 
  Bell, 
  User, 
  Home,
  Users,
  LogOut,
  Plus,
  Van,
  Store,
  Wallet,
  Wrench,
  PocketKnife,
  LayoutDashboard
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
import { useRouter } from "next/navigation";
// import { useAuth } from "@/lib/hook/useAuth";


// Menu items for user role (customize this array with the specific items/icons you want for users)
const userItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },  
  {
    title: "Resturant",
    url: "/resturant",
    icon: PocketKnife,
  },  
  {
    title: "Delivery/Logistic",
    url: "#",
    icon: Van,
  },  
  {
    title: "Stores",
    url: "#",
    icon: Store,
  },
  {
    title: "Quilible Users",
    url: "#",
    icon: Users,
  },
  {
    title: "User Management",
    url: "#",
    icon: Users,
  },
  {
    title: "Wallet System",
    url: "#",
    icon: Wallet,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "#", 
    icon: Wrench,
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