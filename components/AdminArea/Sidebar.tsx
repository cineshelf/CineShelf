import { Home, Camera } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { SidebarFooterComponent } from "@/components/AdminArea/SidebarFooterComponent"

// Menu items.
const data = {
  navigation: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Gallery",
      url: "/",
      icon: Camera,
    },
  ],
  user: {
    name: "Test User",
    image: "https://github.com/shadcn.png",
    email: "Email@Email.com",
  },
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarContent className="bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">CineShelf</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navigation.map((item) => (
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
      </SidebarContent>
      <SidebarFooter className="hover:cursor-pointer">
        <SidebarFooterComponent user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
