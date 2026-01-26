export type Intent = "study" | "social" | "both"

export type Student = {
    id: string
    name: string
    major: string
    year: number
    intent: Intent
    universitySlug: string
}