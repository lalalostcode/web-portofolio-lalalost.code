"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { personalInfo } from "@/lib/data"

/* ─── Terminal content definitions ─── */
type StaticLine = {
  command: string
  response: React.ReactNode
  type: "static"
}

type ProgressLine = {
  command: string
  type: "progress"
}

type CyclingLine = {
  command: string
  responses: string[]
  type: "cycling"
}

type TerminalLineData = StaticLine | ProgressLine | CyclingLine

const TERMINAL_LINES: TerminalLineData[] = [
  {
    command: "$ whoami",
    type: "static",
    response: (
      <span>
        <span className="text-olive dark:text-white font-semibold">Ilham Rafiqin</span>{" "}
        <span className="text-sage">(lalalostcode)</span>
      </span>
    ),
  },
  {
    command: "$ sudo apt install skills",
    type: "progress",
  },
  {
    command: "$ status --current",
    type: "cycling",
    responses: [
      "Building TinyTorch",
      "AITF Interning",
      "ETL Pipeline Ops",
    ],
  },
  {
    command: "$ fetch --interests",
    type: "cycling",
    responses: ["AI", "Data Eng", "Cloud", "IoT"],
  },
]

/* ─── Background terminal static content ─── */
const BG_TERMINAL_1 = [
  "# data_pipeline.py",
  "import apache_beam as beam",
  "from airflow import DAG",
  "",
  "with DAG('etl_harvest') as dag:",
  "  extract = PythonOperator(",
  "    task_id='extract',",
  "    python_callable=fetch_data",
  "  )",
  "  transform >> load",
]

const BG_TERMINAL_2 = [
  "INFO  [crawler] Fetching batch 47/200",
  "INFO  [tokenizer] 200M tokens processed",
  "DEBUG [qwen-9b] Loading LoRA adapters",
  "INFO  [sft] Epoch 3/5 - loss: 0.234",
  "INFO  [grpo] Alignment step complete",
  "OK    [pipeline] All stages green ✓",
]

const BG_TERMINAL_3 = [
  "version: '3.8'",
  "services:",
  "  api:",
  "    build: .",
  "    ports:",
  "      - '8000:8000'",
  "  redis:",
  "    image: redis:alpine",
  "    restart: always",
]

/* ─── Typewriter hook ─── */
function useTypewriter(text: string, speed = 50, startDelay = 0) {
  const [displayed, setDisplayed] = useState("")
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setDisplayed("")
    setIsDone(false)
    let i = 0
    let interval: ReturnType<typeof setInterval>

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          setIsDone(true)
          clearInterval(interval)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { displayed, isDone }
}

/* ─── Terminal Line (types command, then shows response) ─── */
function TerminalLine({
  line,
  delay,
  onDone,
}: {
  line: TerminalLineData
  delay: number
  onDone: () => void
}) {
  const { displayed: cmd, isDone: cmdDone } = useTypewriter(line.command, 45, delay)

  return (
    <div className="space-y-1">
      <p className="font-mono text-sm text-olive/60 dark:text-sage/80">
        {cmd}
        {!cmdDone && <span className="animate-pulse text-sage">▌</span>}
      </p>
      {cmdDone && line.type === "static" && (
        <StaticResponse response={line.response} onDone={onDone} />
      )}
      {cmdDone && line.type === "progress" && (
        <ProgressBar onDone={onDone} />
      )}
      {cmdDone && line.type === "cycling" && (
        <CyclingResponse items={line.responses} onFirstCycleDone={onDone} />
      )}
    </div>
  )
}

/* ─── Static response ─── */
function StaticResponse({
  response,
  onDone,
}: {
  response: React.ReactNode
  onDone: () => void
}) {
  useEffect(() => {
    let isCancelled = false
    const t = setTimeout(() => {
      if (!isCancelled) onDone()
    }, 600)
    return () => {
      isCancelled = true
      clearTimeout(t)
    }
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="pl-4 text-sm text-foreground"
    >
      {response}
    </motion.div>
  )
}

/* ─── Animated progress bar ─── */
function ProgressBar({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5))
    }, 80)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(onDone, 400)
      return () => clearTimeout(t)
    }
  }, [progress, onDone])

  const filled = Math.round(progress / 10)
  const bar = "#".repeat(filled) + "-".repeat(10 - filled)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pl-4 font-mono text-sm"
    >
      <span className="text-sage/70">[</span>
      <span className="text-sage font-semibold">{bar}</span>
      <span className="text-sage/70">]</span>
      <span className="text-olive/50 dark:text-white/60 ml-2">{progress}%</span>
      {progress >= 100 && <span className="text-sage ml-2">✓ done</span>}
    </motion.div>
  )
}

/* ─── Cycling response ─── */
function CyclingResponse({
  items,
  onFirstCycleDone,
}: {
  items: string[]
  onFirstCycleDone: () => void
}) {
  const [index, setIndex] = useState(0)
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % items.length
        if (next === 0) setHasCompletedCycle(true)
        return next
      })
    }, 1800)
    return () => clearInterval(interval)
  }, [items.length])

  useEffect(() => {
    if (hasCompletedCycle) {
      onFirstCycleDone()
    }
  }, [hasCompletedCycle, onFirstCycleDone])

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="pl-4"
    >
      <span className="text-sm text-olive/80 dark:text-white/90 font-mono">
        {"["}<span className="text-sage font-semibold">{items[index]}</span>{"]"}
      </span>
    </motion.div>
  )
}

/* ─── Background Terminal Window (static, semi-transparent) ─── */
function BackgroundTerminal({
  lines,
  title,
  className,
}: {
  lines: string[]
  title: string
  className?: string
}) {
  return (
    <div className={`terminal-bg rounded-xl p-4 ${className ?? ""}`}>
      {/* Header dots */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-olive/15 dark:bg-white/15" />
        <div className="w-2 h-2 rounded-full bg-olive/15 dark:bg-white/15" />
        <div className="w-2 h-2 rounded-full bg-olive/15 dark:bg-white/15" />
        <span className="ml-2 text-[10px] text-olive/15 dark:text-white/15 font-mono">{title}</span>
      </div>
      {/* Static code lines */}
      <div className="space-y-0.5">
        {lines.map((line, i) => (
          <p key={i} className="font-mono text-[11px] text-olive/15 dark:text-white/20 leading-relaxed whitespace-pre">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const [activeLine, setActiveLine] = useState(0)
  const [sequenceId, setSequenceId] = useState(0)

  const handleLineDone = useCallback(() => {
    setActiveLine((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (activeLine >= TERMINAL_LINES.length) {
      const t = setTimeout(() => {
        setActiveLine(0)
        setSequenceId((s) => s + 1)
      }, 6000) // Restart loop after 6 seconds
      return () => clearTimeout(t)
    }
  }, [activeLine])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden mesh-gradient">
      {/* Floating ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-sage/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-sage/8 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* White accent blob for high-pop */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-64 h-64 bg-white/3 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Info + Socials */}
          <div className="flex flex-col justify-center py-24 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-olive dark:text-white">lalalost</span>
                <span className="text-sage">code</span>
              </h1>
              <p className="mt-2 text-lg text-olive/50 dark:text-white/50 font-medium">
                {personalInfo.name}
              </p>
            </motion.div>

            <motion.p
              className="mt-6 text-lg text-olive/70 dark:text-white/70 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <SocialLink href={personalInfo.github} label="GitHub">
                <Github className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={personalInfo.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={`mailto:${personalInfo.email}`} label="Email" external={false}>
                <Mail className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={personalInfo.cv} label="CV">
                <FileText className="h-5 w-5" />
              </SocialLink>
            </motion.div>
          </div>

          {/* Right: Triple-Stacked Terminal */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="terminal-stack w-full max-w-md">
              {/* Background Terminal 1 (bottom-most, offset left-up) */}
              <motion.div
                className="absolute -top-8 -left-6 w-[88%] opacity-40"
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 0.4, y: 0, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ zIndex: 1 }}
              >
                <BackgroundTerminal
                  lines={BG_TERMINAL_1}
                  title="data_pipeline.py"
                />
              </motion.div>

              {/* Background Terminal 3 (middle-bottom, offset right-down) */}
              <motion.div
                className="absolute top-6 -right-5 w-[85%] opacity-40"
                initial={{ opacity: 0, y: 20, rotate: 2 }}
                animate={{ opacity: 0.4, y: 0, rotate: 2 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                style={{ zIndex: 2 }}
              >
                <BackgroundTerminal
                  lines={BG_TERMINAL_3}
                  title="docker-compose.yml"
                />
              </motion.div>

              {/* Background Terminal 2 (middle-top, offset right-up) */}
              <motion.div
                className="absolute -top-2 left-8 w-[92%] opacity-50"
                initial={{ opacity: 0, y: 25, rotate: 1 }}
                animate={{ opacity: 0.5, y: 0, rotate: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ zIndex: 3 }}
              >
                <BackgroundTerminal
                  lines={BG_TERMINAL_2}
                  title="training.log"
                />
              </motion.div>

              {/* Front Terminal (active, animated typewriter) */}
              <motion.div
                className="relative terminal rounded-2xl p-6 sm:p-8"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{ zIndex: 4 }}
              >
                {/* Terminal header dots */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-olive/30 dark:text-white/30 font-mono">terminal — lalalostcode</span>
                </div>

                {/* Terminal content */}
                <div key={sequenceId} className="space-y-4 min-h-[240px]">
                  {TERMINAL_LINES.map((line, i) =>
                    i <= activeLine ? (
                      <TerminalLine
                        key={`${sequenceId}-${i}`}
                        line={line}
                        delay={i === 0 ? 800 : 300}
                        onDone={handleLineDone}
                      />
                    ) : null
                  )}
                  {activeLine >= TERMINAL_LINES.length && (
                    <motion.div
                      className="font-mono text-sm text-olive/30 dark:text-sage/50 flex flex-col gap-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <p>$ <span className="animate-pulse">▌</span></p>
                      <p className="text-xs text-olive/20 dark:text-sage/30 mt-4 italic">Restarting sequence shortly...</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Social link helper ─── */
function SocialLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string
  label: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="p-3 rounded-full glass text-olive/50 dark:text-white/60 hover:text-sage hover:border-sage/40 transition-all duration-300"
      aria-label={label}
      title={label}
    >
      {children}
    </Link>
  )
}
