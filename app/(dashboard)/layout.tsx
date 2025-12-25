import { DashboardHeader } from "@/components/header/dashboard-header";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar";
 
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();   

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        
        {/* Main Content Area */}
        <SidebarInset className="flex flex-col flex-1">
          <DashboardHeader />
          
          {/* Main Content */}
          <main>
        <SidebarTrigger />
        {children}
      </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}