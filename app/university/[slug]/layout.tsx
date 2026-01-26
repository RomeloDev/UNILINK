import type { ReactNode } from "react"
import BackButton from "@/components/BackButton";
import { Metadata } from "next";

type Props = {
    children: ReactNode;
};

export const metadata: Metadata = {
  title: "University Lobby",
  description: "Enter the university lobby to see online students.",
};

const UniversityLayout = ({ children }: Props) => {
  return (
    <main className="space-y-4 p-6">
        <BackButton />
        {children}
    </main>
  )
}

export default UniversityLayout