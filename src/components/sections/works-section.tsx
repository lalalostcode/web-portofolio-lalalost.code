"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Github, ExternalLink, Award, BookOpen, ShieldCheck, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

const TYPE_ICONS: Record<string, React.ReactNode> = {
  Education: <GraduationCap className="h-4 w-4 text-sage" />,
  Training: <BookOpen className="h-4 w-4 text-sage" />,
  Certification: <ShieldCheck className="h-4 w-4 text-sage" />,
  Award: <Award className="h-4 w-4 text-sage" />,
}

export function WorksSection() {
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
    <section id="works" className="py-24 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-44 h-44 bg-sage/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Projects and credentials mapped from my CV.
          </p>
        </motion.div>

        {/* ─── Master Switch (Level 1 Toggle) ─── */}
        <div className="max-w-4xl mx-auto flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-sage/20 bg-foreground/5 backdrop-blur-sm p-1">
            <button
              type="button"
              onClick={() => setView("projects")}
              className={cn(
                "px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300",
                view === "projects"
                  ? "bg-sage/15 text-sage shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              Selected Works
            </button>
            <button
              type="button"
              onClick={() => setView("credentials")}
              className={cn(
                "px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300",
                view === "credentials"
                  ? "bg-sage/15 text-sage shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              Credentials & Expertise
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
              {/* ─── Level 2: Sub-Filtering (Projects only) ─── */}
              <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 mb-8">
                {PROJECT_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300",
                      activeCategory === category
                        ? "bg-sage/20 border-sage/40 text-sage"
                        : "border-sage/15 text-muted-foreground hover:text-foreground hover:border-sage/30 hover:bg-foreground/5"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.05, 0.2) }}
                  >
                    <button
                      type="button"
                      onClick={() => openProject(project.id)}
                      className="text-left w-full group"
                    >
                      <div className="glass-card rounded-xl overflow-hidden h-full hover:border-sage/30 transition-all duration-300">
                        {/* Gradient header */}
                        <div className="relative h-36 bg-gradient-to-br from-sage/15 via-sage/5 to-transparent overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl opacity-15 group-hover:scale-110 transition-transform">
                              {project.category === "AI" ? "🧠" : project.category === "Data Engineering" ? "📊" : project.category === "IoT" ? "📡" : "☁️"}
                            </span>
                          </div>
                          {project.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="text-[10px] font-mono uppercase tracking-wider bg-sage/20 text-sage px-2 py-0.5 rounded-full border border-sage/30">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-5">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-base font-semibold text-foreground group-hover:text-sage transition-colors leading-tight">
                              {project.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-mono text-sage/70 bg-sage/8 px-2 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 4 && (
                              <span className="text-[11px] font-mono text-foreground/30 px-1">
                                +{project.tags.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Side Drawer */}
              <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
                <SheetContent
                  side={drawerSide}
                  className={cn(
                    "bg-white dark:bg-[#2d3126] border-sage/20",
                    drawerSide === "bottom" &&
                      "inset-x-0 bottom-0 w-full sm:max-w-none border-t"
                  )}
                >
                  <SheetHeader>
                    <SheetTitle className="text-foreground">
                      {selectedProject?.title ?? "Project"}
                    </SheetTitle>
                    <SheetDescription className="text-sage">
                      {selectedProject?.category ?? ""}
                    </SheetDescription>
                  </SheetHeader>

                  {selectedProject && (
                    <div className="px-4 pb-4 space-y-6">
                      {/* Tags */}
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono text-sage bg-sage/10 px-2.5 py-1 rounded border border-sage/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* S.T.A.R. */}
                      <div className="space-y-4">
                        <StarBlock label="Situation" value={selectedProject.star?.situation} />
                        <StarBlock label="Task" value={selectedProject.star?.task} />
                        <StarBlock label="Action" value={selectedProject.star?.action} />
                        <StarBlock label="Result" value={selectedProject.star?.result} />
                      </div>

                      {/* Links */}
                      <div className="flex flex-col gap-2">
                        {selectedProject.github && (
                          <Link
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium bg-sage/15 text-sage border border-sage/25 hover:bg-sage/25 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            Repository
                          </Link>
                        )}
                        {selectedProject.demo && (
                          <Link
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium bg-foreground/5 text-muted-foreground border border-foreground/10 hover:bg-foreground/10 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Link>
                        )}
                        {!selectedProject.github && !selectedProject.demo && (
                          <div className="text-center py-2 text-sm text-muted-foreground font-mono">
                            Links not available yet
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </motion.div>
          ) : (
            /* ─── Credentials & Expertise View ─── */
            <motion.div
              key="credentials"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="max-w-4xl mx-auto space-y-4">
                {certifications.map((cred) => (
                  <motion.div
                    key={cred.id ?? `${cred.name}-${cred.year}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-5 hover:border-sage/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          {TYPE_ICONS[cred.type] || <BookOpen className="h-4 w-4 text-sage" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-foreground/30 uppercase tracking-wider">
                              {cred.type}
                            </span>
                            <span className="text-xs text-foreground/20">•</span>
                            <span className="text-xs text-foreground/30">{cred.date}</span>
                          </div>
                          <h4 className="text-base font-semibold text-foreground mt-1">
                            {cred.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {cred.organizer}
                          </p>
                        </div>
                      </div>

                      {cred.link ? (
                        <Link
                          href={cred.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-sage border border-sage/20 rounded-lg px-3 py-1.5 hover:bg-sage/10 transition-colors shrink-0"
                        >
                          <ExternalLink className="h-3 w-3" />
                          View Proof
                        </Link>
                      ) : (
                        <span className="text-xs text-foreground/20 font-mono">—</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ─── Helpers ─── */

function StarBlock({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <div>
      <p className="text-xs font-semibold text-sage uppercase tracking-wider">{label}</p>
      <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{value}</p>
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
