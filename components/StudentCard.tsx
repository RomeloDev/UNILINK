import type { Student } from "@/types/student";

type Props = { student: Student };

export default function StudentCard({ student }: Props) {
    return (
        <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-100">{student.name}</h3>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-200">
                {student.intent}
                </span>
            </div>
            <p className="text-sm text-slate-400">{student.major}</p>
            <p className="text-sm text-slate-300">Year {student.year}</p>
        </div>
    );
};