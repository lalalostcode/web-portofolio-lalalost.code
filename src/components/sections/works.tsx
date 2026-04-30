"use client"

import * as React from "react"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { certifications, projects } from "@/lib/data"
import { cn } from "@/lib/utils"

type WorksView = "projects" | "credentials"

type ProjectCategory = "AI" | "Data Engineering" | "IoT" | "Cloud Engineering"

const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI",
  "Data Engineering",
  "IoT",
  "Cloud Engineering",
]

export function Works() {
  const [view, setView] = React.useState<WorksView>("projects")
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory | null>(null)

  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const isDesktop = useMediaQuery("(min-width: 768px)")
  const drawerSide = isDesktop ? "right" : "bottom"

  const selectedProject = React.useMemo(() => {
    if (!selectedProjectId) return null
    return projects.find((p) => p.id === selectedProjectId) ?? null
  }, [selectedProjectId])

  const filteredProjects = React.useMemo(() => {
    if (!activeCategory) return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  function openProject(projectId: string) {
    setSelectedProjectId(projectId)
    setDrawerOpen(true)
  }

  function toggleCategory(category: ProjectCategory) {
    setActiveCategory((current) => (current === category ? null : category))
  }

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">Works</h1>
          <p className="text-muted-foreground text-lg">
            Projects and credentials mapped from my CV.
          </p>
        </div>

        {/* Master switch */}
        <div className="max-w-4xl mx-auto flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setView("projects")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                view === "projects"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => setView("credentials")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                view === "credentials"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              Certifications &amp; Training
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "projects" ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {/* Sub-filter (Projects only) */}
              <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 mb-8">
                {PROJECT_CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    type="button"
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleCategory(category)}
                    className={cn(
                      "rounded-full",
                      activeCategory === category && "hover:bg-primary/90"
                    )}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25 }}
                  >
                    <button
                      type="button"
                      onClick={() => openProject(project.id)}
                      className="text-left w-full"
                    >
                      <Card className="h-full overflow-hidden group hover:shadow-lg hover:border-primary/50 transition-all">
                        <div className="relative h-40 bg-gradient-to-br from-primary/20 to-primary/5" />
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between gap-3">
                            <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h2>
                            {project.category ? (
                              <Badge variant="secondary" className="shrink-0">
                                {project.category}
                              </Badge>
                            ) : null}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Drawer */}
              <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
                <SheetContent
                  side={drawerSide}
                  className={cn(
                    drawerSide === "bottom" &&
                      "inset-x-0 bottom-0 w-full sm:max-w-none border-t"
                  )}
                >
                  <SheetHeader>
                    <SheetTitle>{selectedProject?.title ?? "Project"}</SheetTitle>
                    <SheetDescription>
                      {selectedProject?.category ? selectedProject.category : ""}
                    </SheetDescription>
                  </SheetHeader>

                  {selectedProject ? (
                    <div className="px-4 pb-4 space-y-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Tech</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <StarBlock label="Situation" value={selectedProject.star?.situation} />
                        <StarBlock label="Task" value={selectedProject.star?.task} />
                        <StarBlock label="Action" value={selectedProject.star?.action} />
                        <StarBlock label="Result" value={selectedProject.star?.result} />
                      </div>

                      <div>
                        {selectedProject.github ? (
                          <Button asChild className="w-full gap-2">
                            <Link
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                              Repository
                            </Link>
                          </Button>
                        ) : (
                          <Button className="w-full" variant="outline" disabled>
                            Repository not available
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : null}
                </SheetContent>
              </Sheet>
            </motion.div>
          ) : (
            <motion.div
              key="credentials"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="max-w-4xl mx-auto space-y-4">
                {certifications.map((cred) => (
                  <div
                    key={cred.id ?? `${cred.name}-${cred.year}`}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <p className="text-sm text-muted-foreground">{cred.year}</p>
                        <h3 className="text-base font-semibold text-foreground mt-1">
                          {cred.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cred.organizer}
                        </p>
                      </div>

                      {cred.link ? (
                        <Button asChild variant="outline" size="sm">
                          <Link href={cred.link} target="_blank" rel="noopener noreferrer">
                            View Proof
                          </Link>
                        </Button>
                      ) : (
                        <Badge variant="secondary">No link</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function StarBlock({ label, value }: { label: string; value?: string }) {
  if (!value) return null

  return (
    <div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{value}</p>
    </div>
  )
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const onChange = () => setMatches(mediaQueryList.matches)
    onChange()

    mediaQueryList.addEventListener("change", onChange)
    return () => mediaQueryList.removeEventListener("change", onChange)
  }, [query])

  return matches
}
