"use client";

import { useState } from "react";
import type { Intent } from "@/types/student";

type IntentFilter = "all" | Intent;

type Props = {
    onChange: (value: IntentFilter) => void;
};

export default function IntentToggle({ onChange }: Props) {
    const [selected, setSelected] = useState<IntentFilter>("all");

    const handleSelect = (value: IntentFilter) => {
        setSelected(value);
        onChange(value);
    };
    
    return (
        <div className="flex gap-2">
            {["all", "study", "social", "both"].map((value) => (
                <button
                    key={value}
                    onClick={() => handleSelect(value as IntentFilter)}
                    className={`rounded border px-3 py-1 text-sm hover:bg-white hover:text-black ${selected === value ? "bg-slate-50 text-black" : "bg-black"}`}
                >{value}</button>
            ))}
        </div>
    );
}