"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const { toggleSidebar } = useSidebar();

    return (
        <main>
            <Button
                variant="ghost"
                onClick={toggleSidebar}
            >
                <ArrowLeft strokeWidth={1.5} scale={64} />
            </Button>

            {children}
        </main>
    );
}
