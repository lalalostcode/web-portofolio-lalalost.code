import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"

export const metadata: Metadata = {
  title: "About & Experience | Ilham Rafiqin",
  description: "About me, my experience, and the tech stack I use.",
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-16">
      <Experience />
      <Skills />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
