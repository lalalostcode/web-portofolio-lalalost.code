import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Works } from "@/components/sections/works"

export const metadata: Metadata = {
  title: "Works | Ilham Rafiqin",
  description: "Projects and credentials mapped from my CV.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Works />

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
