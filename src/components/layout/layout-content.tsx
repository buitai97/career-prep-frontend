"use client";

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    return (
        <SidebarInset className="min-h-svh">
            <header className="sticky top-0 z-20 flex h-12 items-center border-b bg-background/90 px-3 backdrop-blur md:px-4">
                <SidebarTrigger className="h-8 w-8" />
            </header>
            <div className="flex-1 pb-5">{children}</div>
        </SidebarInset>
    );
}
