"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            Welcome to the Career Preparation Platform!
            <Button variant="default" className="mt-4" asChild>
                <Link href="/dashboard">Go to dashboard</Link>
            </Button>
        </div>
    )
}