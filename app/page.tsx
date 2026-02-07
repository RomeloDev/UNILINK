import MapClient from "@/components/MapClient";
import { universities } from "@/data/universities";
import "leaflet/dist/leaflet.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Campus Directory</h1>
      <section className="space-y-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5 shadow-[0_0_20px_rgba(255,255,255,0.06)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Explore the map</h2>
            <p className="text-sm text-slate-400">
              Click a pin to enter a university lobby.
            </p>
          </div>
          <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Live map
          </span>
        </div>
        <Suspense fallback={<p className="text-sm text-slate-400">Loading map...</p>}>
          <MapClient universities={universities} />
        </Suspense>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">University List (Fallback)</h2>
        <ul className="space-y-2">
          {universities.map( (u) => (
            <li
              key={u.id}
              className="relative rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 pl-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="absolute left-0 top-4 h-8 w-1 rounded-full bg-emerald-400/60" />
              <p className="font-medium text-slate-100">{u.name}</p>
              <p className="text-sm text-slate-400">{u.studentOnline} students online</p>
              <a
                className="mt-2 inline-block rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200 hover:bg-emerald-400/20"
                href={`/university/${u.slug}`}
              >
                Enter lobby
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
