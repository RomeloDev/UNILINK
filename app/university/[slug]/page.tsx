import { students } from "@/data/students";
import StudentListWithFilter from "@/components/StudentListWithFilter";
import { universities } from "@/data/universities";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function UniversityLobby({ params }: PageProps) {
  const { slug } = await params;
  const campusStudents = students.filter((s) => s.universitySlug === slug);

  const universityFind = universities.find((u) => u.slug === slug);
  const university = universityFind ? universityFind.name : "Unknown University";

  return (
    <main className="space-y-4 p-6">
      <Link href="/" className="border rounded-xl px-3 py-3 hover:bg-white hover:text-black">Back to Home Page</Link>
      <h1 className="text-2xl font-bold mt-4">University Lobby</h1>
      <h2 className="text-lg font-semibold">{university}</h2>
      <StudentListWithFilter students={campusStudents} />
    </main>
  );
}
