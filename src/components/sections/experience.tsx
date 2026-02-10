"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"
import { experience } from "@/lib/data"

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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building data infrastructure and cloud solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-1.5" />

                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">{job.role}</span>
                      </div>
                      
                      <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="font-medium text-primary">{job.company}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {job.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4">
                        {job.description}
                      </p>

                      <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
