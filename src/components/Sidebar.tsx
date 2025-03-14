"use client"; 
import {  Home, Inbox, ShieldQuestion} from "lucide-react";
import Link from "next/link";
import {Sidebar,SidebarContent,SidebarGroup,SidebarGroupContent,SidebarGroupLabel,SidebarMenu,SidebarMenuButton,SidebarMenuItem,} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home,},
  { title: "Products",url: "/products",icon: Inbox,},
  { title: "About", url: "#about", icon: ShieldQuestion},
  
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel >Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}