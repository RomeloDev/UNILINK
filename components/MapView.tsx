"use client";

import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import UniversityMarker from "./UniversityMarker";
import type { University } from "@/types/university";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

type Props = { universities: University[] };

const MapStateSync = () => {
    const router = useRouter();
    const search = useSearchParams();

    useMapEvents({
        moveend: (e) => {
            const map = e.target;
            const center = map.getCenter();
            const zoom = map.getZoom();

            const params = new URLSearchParams(search.toString());
            params.set("lat", center.lat.toFixed(5));
            params.set("lng", center.lng.toFixed(5));
            params.set("zoom", zoom.toString());

            router.replace(`/?${params.toString()}`);
        },
    });

    return null;
}

const FitToMarkers = ({universities}: { universities: University[]}) =>{
    const map = useMap();
    const search = useSearchParams();

    useEffect(() => {
        const hasUrlState = search.get("lat") && search.get("lng") && search.get("zoom");

        if (hasUrlState || universities.length === 0) return;

        const bounds = universities.map((u) => [u.lat, u.lng] as [number, number]);
        map.fitBounds(bounds, {padding: [40, 40]});
    }, [map, universities, search]);

    return null;
}

export default function MapView({ universities }: Props) {
    const search = useSearchParams();
    const lat = Number(search.get("lat")) || 12.8797;
    const lng = Number(search.get("lng")) || 121.774;
    const zoom = Number(search.get("zoom")) || 6;

    return (
        <div className="h-160 w-full rounded-lg overflow-hidden border">
            <MapContainer center={[lat, lng]} zoom={zoom} className="h-full w-full">
                <TileLayer 
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FitToMarkers universities={universities} />
                <MapStateSync />
                {universities.map((u) => (
                    <UniversityMarker key={u.id} university={u} />
                ))}
            </MapContainer>
        </div>
    )
}