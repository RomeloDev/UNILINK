import type { University } from "@/types/university";
import Link from "next/link";

type Props = {
    university: University;
};

export default function UniversityCard({ university }: Props) {
    return (
        <Link href={`/university/${university.slug}`} className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">{ university.name }</h3>
            <p className="text-sm text-slate-600">{ university.location }</p>
            <p className="text-sm">{ university.studentOnline } students online</p>
        </Link>
    );
};