"use client";
import { Button } from "../components/ui/button";
import { useAuth } from "./(auth)/auth-context";
import { redirect } from "next/navigation";

export default function Home() {
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
        redirect("/login");
    }
    return (
        <div>
            Hello World!
            <Button variant="outline" onClick={handleLogout}>Log out</Button>
        </div>
    )
}