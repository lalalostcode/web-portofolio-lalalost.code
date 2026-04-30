"use client"

import type { ReactNode } from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          {/* Left: Summary + socials */}
          <div className="flex flex-col justify-center py-24 md:py-0">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SocialIconLink href={personalInfo.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink href={personalInfo.github} label="GitHub">
                <Github className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink href={`mailto:${personalInfo.email}`} label="Email" external={false}>
                <Mail className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink href={personalInfo.cv} label="CV">
                <FileText className="h-5 w-5" />
              </SocialIconLink>
              {personalInfo.instagram ? (
                <SocialIconLink href={personalInfo.instagram} label="Instagram">
                  <Instagram className="h-5 w-5" />
                </SocialIconLink>
              ) : (
                <div
                  className="p-3 rounded-full bg-card border border-border text-muted-foreground/60 cursor-not-allowed"
                  title="Instagram link is not set yet"
                  aria-label="Instagram (not set)"
                >
                  <Instagram className="h-5 w-5" />
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: Animated visual */}
          <div className="relative flex items-center justify-center min-h-[420px] md:min-h-screen">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-24 -right-24 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
                animate={{ scale: [1.15, 1, 1.15], opacity: [0.55, 0.35, 0.55] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-primary/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              className="relative z-10 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 max-w-sm"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-sm text-muted-foreground">Currently focused on</p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                Data ecosystems + LLM engineering
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Building scalable pipelines, training workflows, and practical AI products.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialIconLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string
  label: string
  external?: boolean
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
      aria-label={label}
      title={label}
    >
      {children}
    </Link>
  )
}
