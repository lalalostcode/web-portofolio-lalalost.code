"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react"
import { experience, personalInfo } from "@/lib/data"

export function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden" id="experience">
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Profile header */}
        <motion.div
          className="grid gap-8 md:grid-cols-[240px_1fr] items-start mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-border bg-card">
              <Image
                src="/icon.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About & Experience
            </h2>
            <p className="mt-3 text-muted-foreground">{personalInfo.title}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {personalInfo.location}
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl">{personalInfo.bio}</p>
          </div>
        </motion.div>

        {/* Experience list */}
        <div className="max-w-5xl mx-auto space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.role}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.06, 0.24) }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_200px] md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm font-medium text-primary">{job.company}</span>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {job.period}
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">{job.description}</p>

                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-36 w-full rounded-lg border border-border bg-background/40 overflow-hidden md:h-44">
                  <Image
                    src={job.image || "/window.svg"}
                    alt={`${job.company} illustration`}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
