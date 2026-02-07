"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/auth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password);
    };

    return (
        <main className="space-y-4 p-6">
            <h1 className="text-2xl font-bold">Login</h1>
            <form className="space-y-3" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded border px-3 py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded border px-3 py-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="rounded border px-4 py-2 hover:bg-white hover:text-black hover:border-black" type="submit">
                    Sign in
                </button>
            </form>
        </main>
    );
}