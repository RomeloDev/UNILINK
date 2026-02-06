"use client";

type Props = {
    error: Error;
    reset: () => void;
};

export default function ErrorPage({ reset }: Props) {
    return (
        <main className="p-6 space-y-3">
            <h2 className="text-lg font-semibold">Something went wrong</h2>
            <p className="text-sm text-slate-600">The map failed to load. You can try again.</p>
            <button onClick={reset} className="rounded border px-3 py-1 text-sm hover:bg-white hover:text-black">Try Again</button>
        </main>
    )
}