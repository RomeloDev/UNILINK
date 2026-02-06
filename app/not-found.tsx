import Link from "next/link";

export default function NotFound() {
    return (
        <main className="p-6 space-y-3">
            <h2 className="text-lg font-semibold">This page does not exist</h2>
            <p className="text-sm text-slate-600">The university you are looking for does not exist.</p>
            <Link href="/" className="rounded border px-3 py-1 text-sm hover:bg-white hover:text-black">Go back to home</Link>
        </main>
    )
}