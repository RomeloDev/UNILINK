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

    const base =
    "rounded-full border px-3 py-1 text-sm transition";

    const active =
    "bg-emerald-400/15 text-emerald-200 border-emerald-400/40";

    const inactive =
    "bg-transparent text-slate-300 border-slate-700 hover:bg-slate-800/60";

    return (
        <div className="flex gap-2">
            {["all", "study", "social", "both"].map((value) => (
                <button
                    key={value}
                    onClick={() => handleSelect(value as IntentFilter)}
                    className={`${base} ${selected === value ? active : inactive}`}
                >{value}</button>
            ))}
        </div>
    );
}