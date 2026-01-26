import MapClient from "@/components/MapClient";
import { universities } from "@/data/universities";
import "leaflet/dist/leaflet.css";

export default function Home() {
  return (
    <main className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Campus Directory</h1>
      <MapClient universities={universities} />
    </main>
  );
}
