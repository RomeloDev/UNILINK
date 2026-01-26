"use client";

import dynamic from "next/dynamic";
import type { University } from "@/types/university";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

type Props = {
    universities: University[]
}

export default function MapClient({ universities }: Props) {
    return <MapView universities={universities} />;
}