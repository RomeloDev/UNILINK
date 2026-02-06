import MapClient from "@/components/MapClient";
import { universities } from "@/data/universities";
import "leaflet/dist/leaflet.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Campus Directory</h1>
      <Suspense fallback={<p>Loading map...</p>}>
        <MapClient universities={universities} />
      </Suspense>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">University List (Fallback)</h2>
        <ul className="space-y-2">
          {universities.map( (u) => (
            <li key={u.id} className="border rounded-md p-3">
              <p className="font-medium">{u.name}</p>
              <p className="text-sm text-slate-600">{u.studentOnline} students online</p>
              <a className="text-blue-600 underline" href={`/university/${u.slug}`}>Enter lobby</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
