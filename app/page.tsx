import UniversityCard from "@/components/UniversityCard";
import { universities } from "@/data/universities";

export default function Home() {
  return (
    <main className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Campus Directory</h1>
      <div className="grid gap-4">
        {universities.map((u) => (
          <UniversityCard key={u.id} university={u} />
        ))}
      </div>
    </main>
  );
}
