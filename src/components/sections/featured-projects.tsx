"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 relative overflow-hidden" id="projects">
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -10, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-28 h-28 bg-primary/15 rounded-full blur-xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.4, 0.6, 0.4],
            y: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in data engineering, ETL pipelines, and cloud architecture.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg hover:border-primary/50 transition-all">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform">
                      📊
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
