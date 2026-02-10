import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projects | Data Engineer Portfolio",
  description: "Explore my data engineering projects including ETL pipelines, data lakes, and AWS cloud solutions.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            A collection of data engineering and cloud architecture projects 
            I&apos;ve built throughout my career.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col overflow-hidden group hover:shadow-lg hover:border-primary/50 transition-all">
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform">
                    📊
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-3 right-3" variant="default">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
              </CardHeader>
              
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 gap-2">
                {project.github && (
                  <Button asChild variant="ghost" size="sm" className="gap-1">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild variant="ghost" size="sm" className="gap-1">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
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
