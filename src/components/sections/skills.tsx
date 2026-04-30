"use client"

import { motion } from "framer-motion"
import {
  Database,
  Cloud,
  Terminal,
  Code2,
  Workflow,
  Container,
  Cpu,
  Zap,
  Layers,
  Bot,
  Sigma,
  Brain,
  Boxes,
  Shield,
  Network,
  Check,
  Globe,
  Hand,
  SlidersHorizontal,
} from "lucide-react"
import { skills } from "@/lib/data"

type SkillItem = {
  name: string
  icon: string
  link?: string
}

const iconMap: Record<string, React.ReactNode> = {
  python: <Code2 className="h-5 w-5" />,
  code: <Code2 className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  terminal: <Terminal className="h-5 w-5" />,
  spark: <Zap className="h-5 w-5" />,
  airflow: <Workflow className="h-5 w-5" />,
  kafka: <Layers className="h-5 w-5" />,
  pipeline: <Workflow className="h-5 w-5" />,
  docker: <Container className="h-5 w-5" />,
  mongodb: <Database className="h-5 w-5" />,
  cpu: <Cpu className="h-5 w-5" />,
  sliders: <SlidersHorizontal className="h-5 w-5" />,
  bot: <Bot className="h-5 w-5" />,
  sigma: <Sigma className="h-5 w-5" />,
  pandas: <Layers className="h-5 w-5" />,
  brain: <Brain className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  boxes: <Boxes className="h-5 w-5" />,
  workflow: <Workflow className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
  network: <Network className="h-5 w-5" />,
  check: <Check className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  hand: <Hand className="h-5 w-5" />,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export function Skills() {
  const groups: Array<{ title: string; items: SkillItem[] }> = [
    { title: "Programming Languages", items: skills.programmingLanguages },
    { title: "Data Engineering", items: skills.dataEngineering },
    { title: "AI & LLM", items: skills.aiAndLlm },
    { title: "Cloud & DevOps", items: skills.cloudAndDevOps },
    { title: "Cybersecurity", items: skills.cybersecurity },
    { title: "Human Languages", items: skills.humanLanguages },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden" id="skills">
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-primary/15 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            y: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern data infrastructure and cloud-native solutions.
          </p>
        </motion.div>

        {/* Cloud/Tag Layout */}
        <motion.div
          className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">{group.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {group.items.map((skill) => {
                  const content = (
                    <>
                      <span className="text-primary">
                        {iconMap[skill.icon] || <Code2 className="h-5 w-5" />}
                      </span>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </>
                  )

                  if (skill.link) {
                    return (
                      <motion.a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2 hover:border-primary hover:bg-accent transition-colors"
                      >
                        {content}
                      </motion.a>
                    )
                  }

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, y: -1 }}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2 hover:border-primary hover:bg-accent transition-colors cursor-default"
                    >
                      {content}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
