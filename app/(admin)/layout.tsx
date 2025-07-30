import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AdminArea/Sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-sidebar w-full">
        <SidebarTrigger className="m-2 p-4 bg-primary hover:cursor-pointer" />
        {children}
      </main>
    </SidebarProvider>
  )
}
