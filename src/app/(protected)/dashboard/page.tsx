"use client";
import { useAuth } from "@/app/(auth)/auth-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DashBoardPage() {
    const appRouter = useRouter();
    const { logout } = useAuth();

    return (
        <div>
            Dashboard

            <Button onClick={() => {
                logout();
                appRouter.push("/login");
            }}>Logout</Button>

        </div>

    )
}