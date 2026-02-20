import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
    { label: "Interview prep tracks", value: "12+" },
    { label: "Resume improvement checks", value: "30+" },
    { label: "Career goals supported", value: "diverse" },
];

const features = [
    {
        title: "Resume Builder",
        description:
            "Craft tailored resumes with actionable feedback to match each job description.",
    },
    {
        title: "Interview Practice",
        description:
            "Run through role-specific mock questions and build confident response habits.",
    },
    {
        title: "Career Dashboard",
        description:
            "Track milestones, plan weekly prep goals, and stay focused on your next move.",
    },
];

export default function HomePage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.25),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.2),transparent_34%),linear-gradient(180deg,#020617_0%,#0f172a_42%,#111827_100%)]" />
            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 md:px-10 md:py-14">

                <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-6">

                        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                            Your structured path from job search to job offer.
                        </h1>
                        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
                            Prepare smarter with guided resume work, targeted interview training, and a
                            dashboard that keeps your momentum visible every week.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button asChild size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300">
                                <Link href="/register">Create Free Account</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="ghost"
                                className="border-white/20 bg-transparent"
                            >
                                <Link href="/login">Login</Link>
                            </Button>
                        </div>
                    </div>
                    <Card className="border-white/15 bg-white/5 shadow-2xl shadow-cyan-500/10 backdrop-blur">
                        <CardContent className="space-y-5 p-6">
                            <p className="text-sm font-medium text-sky-200">Prep progress snapshot</p>
                            <div className="space-y-4">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex items-end justify-between border-b border-white/10 pb-3">
                                        <span className="text-sm text-slate-300">{stat.label}</span>
                                        <span className="text-xl font-semibold text-white">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4 md:grid-cols-3">
                    {features.map((feature) => (
                        <Card key={feature.title} className="border-white/10 bg-slate-900/65 transition hover:-translate-y-0.5 hover:border-sky-300/40">
                            <CardContent className="space-y-3 p-5">
                                <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
                                <p className="text-sm leading-relaxed text-slate-300">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </section>
            </div>
        </main>
    );
}
