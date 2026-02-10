"use client"

import { motion } from "framer-motion"
import {
  Database,
  Cloud,
  Terminal,
  Code2,
  Workflow,
  Container,
  GitBranch,
  Server,
  Cpu,
  Zap,
  BarChart3,
  Layers,
} from "lucide-react"
import { skills } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  python: <Code2 className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  terminal: <Terminal className="h-5 w-5" />,
  typescript: <Code2 className="h-5 w-5" />,
  spark: <Zap className="h-5 w-5" />,
  airflow: <Workflow className="h-5 w-5" />,
  kafka: <Layers className="h-5 w-5" />,
  dbt: <BarChart3 className="h-5 w-5" />,
  pandas: <BarChart3 className="h-5 w-5" />,
  lambda: <Cpu className="h-5 w-5" />,
  glue: <Workflow className="h-5 w-5" />,
  s3: <Cloud className="h-5 w-5" />,
  redshift: <Database className="h-5 w-5" />,
  athena: <Database className="h-5 w-5" />,
  stepfunctions: <Workflow className="h-5 w-5" />,
  emr: <Server className="h-5 w-5" />,
  kinesis: <Zap className="h-5 w-5" />,
  docker: <Container className="h-5 w-5" />,
  terraform: <Cloud className="h-5 w-5" />,
  git: <GitBranch className="h-5 w-5" />,
  postgresql: <Database className="h-5 w-5" />,
  mongodb: <Database className="h-5 w-5" />,
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
  // Combine all skills for cloud display
  const allSkills = [
    ...skills.languages,
    ...skills.dataEngineering,
    ...skills.aws,
    ...skills.tools,
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
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-accent hover:shadow-md transition-all cursor-default"
            >
              <span className="text-primary">
                {iconMap[skill.icon] || <Code2 className="h-5 w-5" />}
              </span>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
