import { students } from "@/data/students";
import StudentListWithFilter from "@/components/StudentListWithFilter";
import { universities } from "@/data/universities";
import BackButton from "@/components/BackButton";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function UniversityLobby({ params }: PageProps) {
  const { slug } = await params;
  const campusStudents = students.filter((s) => s.universitySlug === slug);

  const universityFind = universities.find((u) => u.slug === slug);
  const university = universityFind ? universityFind.name : "Unknown University";

  return (
    <>
      <h1 className="text-2xl font-bold mt-4">University Lobby</h1>
      <h2 className="text-lg font-semibold">{university}</h2>
      <StudentListWithFilter students={campusStudents} />
    </>
  );
}
