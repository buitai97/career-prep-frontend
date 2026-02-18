"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Home, Briefcase, User, LogOut, FileText } from "lucide-react";
import { useAuth } from "@/app/(auth)/auth-context";

const navItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Interviews", url: "/interview", icon: Briefcase },
    { title: "Resumes", url: "/resume", icon: FileText },
    { title: "Profile", url: "/profile", icon: User },
];


export default function AppSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
        router.push("/login");
    }
    return (
        <Sidebar side="left" collapsible="icon" >
            <SidebarContent>
                <SidebarHeader>
                    <div className="flex items-center justify-center">
                        <Image src="/logo.png" alt="Logo" width={32} height={32} />
                    </div>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.url}
                                    >
                                        <Link href={item.url}>
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={handleLogout}
                            variant={"outline"}
                            className="cursor-pointer"
                        >
                            <LogOut className="h-4 w-4" />
                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

