"use client";

import { Marker, Popup } from "react-leaflet";
import Link from "next/link";
import type { University } from "@/types/university";
import L from "leaflet";
import { useRouter } from "next/navigation";

type Props = { university: University };

const markerIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function UniversityMarker({ university }: Props) {
    const router = useRouter();

    return (
        //Add an event handler to the marker if popup is not fancy
        /* here's the sample code: eventHandlers={{
            click: () => router.push(`/university/${university.slug}`),
        }} */
        <Marker position={[university.lat, university.lng]} icon={markerIcon}>
            <Popup>
                <div className="space-y-1">
                    <p className="font-semibold">{university.name}</p>
                    <p className="text-sm">{university.studentOnline} students online</p>
                    <Link href={`/university/${university.slug}`} className="text-blue-600 underline">
                        Enter Lobby
                    </Link>
                </div>
            </Popup>
        </Marker>
    );
}