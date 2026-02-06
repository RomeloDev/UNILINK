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
            <IntentToggle onChange={setFilter} />
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