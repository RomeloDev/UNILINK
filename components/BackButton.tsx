"use client"
import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} className="border rounded-xl text-sm px-3 py-3 hover:bg-white hover:text-black">
            Back to Home Page
        </button>
    )
}

export default BackButton