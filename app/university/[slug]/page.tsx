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

export default async function UniversityLobby({ params }: PageProps) {
  const { slug } = await params;
  const campusStudents = students.filter((s) => s.universitySlug === slug);

  const universityFind = universities.find((u) => u.slug === slug);
  const university = universityFind ? universityFind.name : "Unknown University";

  if (!universityFind) {
    return notFound();
  }

  return (
    <>
      <h1 className="text-2xl font-bold mt-4">University Lobby</h1>
      <h2 className="text-lg font-semibold">{university}</h2>
      <p className="text-sm text-slate-600">{universityFind.location}</p>
      <p className="text-sm">{universityFind.studentOnline} students online</p>
      <StudentListWithFilter students={campusStudents} />
    </>
  );
}
