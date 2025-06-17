import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/admin/AppSidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider style={{ "--sidebar-width": "15rem" }}>
      <AppSidebar />
      <main>
        <SidebarTrigger className="m-2" />
        {children}
      </main>
    </SidebarProvider>
  )
}
