import type { ReactNode } from "react"
import BackButton from "@/components/BackButton";

type Props = {
    children: ReactNode;
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