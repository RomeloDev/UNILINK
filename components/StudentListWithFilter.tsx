"use client";

import { useState } from "react";
import type { Student, Intent } from "@/types/student";
import IntentToggle from "./IntentToggle";
import StudentCard from "./StudentCard";

type IntentFilter = "all" | Intent;

type Props = {
    students: Student[];
};

export default function StudentListWithFilter({ students }: Props) {
    const [filter, setFilter] = useState<IntentFilter>("all");

    const filtered =
        filter === "all"
            ? students
            : students.filter((s) => s.intent === filter);

    const isEmpty = filtered.length === 0;

    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Filter by intent
                </p>
                <IntentToggle onChange={setFilter} />
            </div>
            {isEmpty ? (
            <p className="text-sm text-slate-600">
                No students match this intent.
            </p>
            ) : (
            <div className="grid gap-4">
                {filtered.map((s) => (
                <StudentCard key={s.id} student={s} />
                ))}
            </div>
            )}
        </div>
    );
}