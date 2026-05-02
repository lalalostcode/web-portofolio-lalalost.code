"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Briefcase, Calendar, CheckCircle2, MapPin, GraduationCap } from "lucide-react"
import { experience, personalInfo, skills } from "@/lib/data"

/* ─── Icon map (inline, lightweight) ─── */
import {
  Database, Cloud, Terminal, Code2, Workflow, Container,
  Cpu, Zap, Layers, Bot, Sigma, Brain, Boxes, Shield,
  Network, Check, Globe, Hand, SlidersHorizontal,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  python: <Code2 className="h-4 w-4" />,
  code: <Code2 className="h-4 w-4" />,
  database: <Database className="h-4 w-4" />,
  terminal: <Terminal className="h-4 w-4" />,
  spark: <Zap className="h-4 w-4" />,
  airflow: <Workflow className="h-4 w-4" />,
  kafka: <Layers className="h-4 w-4" />,
  pipeline: <Workflow className="h-4 w-4" />,
  docker: <Container className="h-4 w-4" />,
  mongodb: <Database className="h-4 w-4" />,
  cpu: <Cpu className="h-4 w-4" />,
  sliders: <SlidersHorizontal className="h-4 w-4" />,
  bot: <Bot className="h-4 w-4" />,
  sigma: <Sigma className="h-4 w-4" />,
  pandas: <Layers className="h-4 w-4" />,
  brain: <Brain className="h-4 w-4" />,
  cloud: <Cloud className="h-4 w-4" />,
  boxes: <Boxes className="h-4 w-4" />,
  workflow: <Workflow className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
  network: <Network className="h-4 w-4" />,
  check: <Check className="h-4 w-4" />,
  globe: <Globe className="h-4 w-4" />,
  hand: <Hand className="h-4 w-4" />,
}

type SkillItem = {
  name: string
  icon: string
  link?: string
}

export function AboutExperience() {
  const skillGroups: Array<{ title: string; items: SkillItem[] }> = [
    { title: "Programming Languages", items: skills.programmingLanguages },
    { title: "Data Engineering", items: skills.dataEngineering },
    { title: "AI & LLM", items: skills.aiAndLlm },
    { title: "Cloud & DevOps", items: skills.cloudAndDevOps },
    { title: "Cybersecurity", items: skills.cybersecurity },
    { title: "Human Languages", items: skills.humanLanguages },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-sage/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-sage/10 rounded-full blur-2xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Profile Header ─── */}
        <motion.div
          className="grid gap-8 md:grid-cols-[220px_1fr] items-start mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-sage/20">
              <Image
                src="C:\Local D\Galeri Belajar\Project\my-portofolio\public\pasfotoprofesional.png"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive/30 to-transparent" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About & Experience
            </h2>
            <p className="mt-3 text-sage font-medium">{personalInfo.title}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-sage" />
              {personalInfo.location}
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </motion.div>

        {/* ─── Experience List ─── */}
        <div className="max-w-5xl mx-auto space-y-6 mb-20">
          <motion.h3
            className="text-2xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase className="inline h-6 w-6 text-sage mr-2 -mt-1" />
            Experience
          </motion.h3>

          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.role}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.08, 0.3) }}
              className="glass-card rounded-xl overflow-hidden hover:bg-foreground/[0.03] dark:hover:bg-background/40 hover:border-sage/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h4 className="text-lg font-semibold text-foreground">{job.role}</h4>
                  <span className="text-foreground/30">•</span>
                  <span className="text-sm font-medium text-sage">{job.company}</span>
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
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <CheckCircle2 className="h-4 w-4 text-sage flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Skills Grid ─── */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-2xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="inline h-6 w-6 text-sage mr-2 -mt-1" />
            Skills & Technologies
          </motion.h3>

          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 hover:bg-foreground/[0.03] dark:hover:bg-background/40 hover:border-sage/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-sm font-semibold text-sage mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const inner = (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 px-2.5 py-1.5 rounded-md bg-foreground/5 border border-foreground/8 hover:border-sage/30 hover:text-sage transition-all duration-200">
                        <span className="text-sage/70">
                          {iconMap[skill.icon] || <Code2 className="h-4 w-4" />}
                        </span>
                        {skill.name}
                      </span>
                    )
                    if (skill.link) {
                      return (
                        <a
                          key={skill.name}
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {inner}
                        </a>
                      )
                    }
                    return <span key={skill.name}>{inner}</span>
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
