import type { Student } from "@/types/student";

type Props = { student: Student };

export default function StudentCard({ student }: Props) {
    return (
        <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">{ student.name }</h3>
            <p className="text-sm text-slate-600">{ student.major }</p>
            <p className="text-sm">Year { student.year }</p>
            <p className="text-xs">{ student.intent }</p>
        </div>
    );
};