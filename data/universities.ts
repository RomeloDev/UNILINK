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
        lat: 9.7447,
        lng: 123.96216
    },
    {
        id: "up-cebu",
        name: "University of the Philippines Cebu",
        slug: "up-cebu",
        location: "Banilad, Cebu City, Cebu",
        studentOnline: studentCount("up-cebu"),
        lat: 10.338516,
        lng: 123.912173
    },
];