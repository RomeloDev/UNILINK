import { students } from "@/data/students";
import StudentListWithFilter from "@/components/StudentListWithFilter";
import { universities } from "@/data/universities";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uni = universities.find((u) => u.slug === slug);
  return { title: uni ? `UniLink | ${uni.name}` : "UniLink | Unknown University" };
}

export function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}
  
export default async function UniversityLobby({ params }: PageProps) {
  const { slug } = await params;
  const campusStudents = students.filter((s) => s.universitySlug === slug);

  const universityFind = universities.find((u) => u.slug === slug);
  const university = universityFind ? universityFind.name : "Unknown University";

  if (!universityFind) {
    return notFound();
  }

  return (
    <div className="space-y-4">
      <section className="space-y-1 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-100">University Lobby</h1>
        <h2 className="text-lg font-semibold text-slate-100">{university}</h2>
        <p className="text-sm text-slate-400">{universityFind.location}</p>
        <p className="text-sm text-slate-300">{universityFind.studentOnline} students online</p>
      </section>

      <section className="rounded-xl border p-4 shadow-sm">
        <StudentListWithFilter students={campusStudents} />
      </section>
    </div>
  );
}
