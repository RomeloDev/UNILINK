import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UniLink",
  description: "A directory of universities and their students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto max-w-5xl px-4 py-8">
          <header className="mb-6 flex items-center justify-between border-b pb-4">
            <div>
              <h1 className="text-3xl font-bold">UniLink</h1>
              <p className="text-sm text-slate-400">Campus Discovery, made simple</p>
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-400">v1</span>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
