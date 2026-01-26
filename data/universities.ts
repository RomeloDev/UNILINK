import type { University } from "@/types/university";
import { students } from "./students";

const studentCount = (uniSlug: string) => students.filter((s) => s.universitySlug === uniSlug).length;

export const universities: University[] = [
    {
        id: "bisu-balilihan",
        name: "BISU Balilihan Campus",
        slug: "bisu-balilihan",
        location: "Magsija, Balilihan, Bohol",
        studentOnline: studentCount("bisu-balilihan"),
    },
    {
        id: "up-cebu",
        name: "University of the Philippines Cebu",
        slug: "up-cebu",
        location: "Banilad, Cebu City, Cebu",
        studentOnline: studentCount("up-cebu"),
    },
];