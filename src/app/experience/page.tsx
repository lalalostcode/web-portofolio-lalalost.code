import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Briefcase, Calendar, CheckCircle2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { experience, certifications } from "@/lib/data"

export const metadata: Metadata = {
  title: "Experience | Data Engineer Portfolio",
  description: "My professional experience as a Data Engineer and AWS Cloud Specialist.",
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experience
          </h1>
          <p className="text-muted-foreground text-lg">
            My professional journey building data infrastructure and cloud-native solutions.
          </p>
        </div>

        {/* Work Experience */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work History
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-2" />

            {experience.map((job, index) => (
              <div key={index} className="relative mb-10 last:mb-0 pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 w-5 h-5 bg-primary rounded-full border-4 border-background" />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold text-lg text-foreground">{job.role}</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-primary">{job.company}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {job.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {cert.date}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-12">
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
