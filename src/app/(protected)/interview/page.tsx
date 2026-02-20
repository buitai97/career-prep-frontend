"use client";

import { useMemo, useState } from "react";
import { Briefcase, Clock3, Mic, Sparkles, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const prepChecklist = [
    "Research company mission and latest news",
    "Prepare 3 STAR stories",
    "Practice role-specific technical prompts",
    "Review your resume highlights",
];

const coachingTips = [
    "Start with a direct answer in the first sentence.",
    "Use metrics to quantify outcomes where possible.",
    "Close with what you learned and how it applies here.",
];

export default function InterviewPage() {
    const [targetRole, setTargetRole] = useState("Frontend Engineer");
    const [company, setCompany] = useState("");
    const [interviewType, setInterviewType] = useState("behavioral");
    const [difficulty, setDifficulty] = useState("internship");
    const [sessionStarted, setSessionStarted] = useState(false);
    const [answer, setAnswer] = useState("");

    const wordCount = useMemo(() => {
        const trimmed = answer.trim();
        if (!trimmed) return 0;
        return trimmed.split(/\s+/).length;
    }, [answer]);

    return (
        <div className="space-y-6 p-4 md:p-6">
            <section className="rounded-2xl border bg-gradient-to-r from-sky-50 to-cyan-50 p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                        <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
                            <Sparkles className="h-3.5 w-3.5" />
                            AI Interview Coach
                        </p>
                        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            Interview Practice Studio
                        </h1>
                        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                            Simulate realistic interviews, capture your response quality, and improve with
                            targeted feedback loops.
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-[360px_1fr]">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Session Setup</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Target role</label>
                            <Input
                                value={targetRole}
                                onChange={(event) => setTargetRole(event.target.value)}
                                placeholder="Enter role"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Company (optional)</label>
                            <Input
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
                                placeholder="Enter company (optional)"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Interview type</label>
                            <Select value={interviewType} onValueChange={setInterviewType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select interview type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="behavioral">Behavioral</SelectItem>
                                    <SelectItem value="technical">Technical</SelectItem>
                                    <SelectItem value="mixed">Mixed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Difficulty</label>
                            <Select value={difficulty} onValueChange={setDifficulty}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="internship">Internship</SelectItem>
                                    <SelectItem value="entry-level">Entry level</SelectItem>
                                    <SelectItem value="mid-level">Mid level</SelectItem>
                                    <SelectItem value="senior-level">Senior level</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                            <p className="text-sm font-medium">Quick prep checklist</p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {prepChecklist.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button
                            className="w-full"
                            disabled={!targetRole.trim()}
                            onClick={() => setSessionStarted(true)}
                        >
                            Start Session
                        </Button>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    {!sessionStarted ? (
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="text-base">Interview Session</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Complete session setup, then click <span className="font-medium text-foreground">Start Session</span> to reveal your question and answer workspace.
                            </CardContent>
                        </Card>
                    ) : (
                        <>
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <CardTitle className="text-base">Current Question</CardTitle>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">
                                                <Briefcase className="h-3 w-3" />
                                                {interviewType.charAt(0).toUpperCase() + interviewType.slice(1)}
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">
                                                <Clock3 className="h-3 w-3" />
                                                2:00 suggested
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-lg leading-relaxed">
                                        Tell me about a time you had conflicting priorities with teammates and how you
                                        aligned everyone while still delivering on time.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Button variant="secondary">
                                            <Mic className="h-4 w-4" />
                                            Record Answer
                                        </Button>
                                        <Button variant="outline">Skip Question</Button>
                                        <Button variant="ghost">Get Hint</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Response Workspace</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Textarea
                                        value={answer}
                                        onChange={(event) => setAnswer(event.target.value)}
                                        placeholder="Draft your answer here using STAR: Situation, Task, Action, Result."
                                        className="min-h-36 w-full rounded-md border bg-transparent p-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                                    />
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span>Word count: {wordCount}</span>
                                            <span>Target: 130-180 words</span>
                                        </div>
                                        <Button disabled={!answer.trim()}>Submit Answer</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </>
                    )}
                </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Coaching Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {coachingTips.map((tip) => (
                                <li key={tip} className="flex items-start gap-2">
                                    <Target className="mt-0.5 h-4 w-4 text-sky-600" />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Performance Snapshot</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center justify-between rounded-md border p-3">
                            <span>Clarity</span>
                            <span className="font-semibold text-emerald-600">82%</span>
                        </div>
                        <div className="flex items-center justify-between rounded-md border p-3">
                            <span>Structure</span>
                            <span className="font-semibold text-amber-600">74%</span>
                        </div>
                        <div className="flex items-center justify-between rounded-md border p-3">
                            <span>Impact</span>
                            <span className="font-semibold text-sky-600">79%</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Next Action</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>Re-answer this question and add one measurable result.</p>
                        <p>Then move to a technical follow-up to practice context switching.</p>
                        <Button className="w-full">Generate Follow-up Question</Button>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
