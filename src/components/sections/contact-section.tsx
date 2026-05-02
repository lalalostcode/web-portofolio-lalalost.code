"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin, CheckCircle, ExternalLink } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Build mailto link and open it
    const mailtoBody = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`
    window.open(mailtoLink, "_self")

    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-sage/5 to-transparent"
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-sage/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header — "get in" (White) "touch" (Sage) */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-foreground">Get in </span>
            <span className="text-sage">touch!</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form — spans 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-xl p-6 sm:p-8 hover:bg-foreground/[0.03] dark:hover:bg-background/40 hover:border-sage/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-sage mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message Ready!
                  </h3>
                  <p className="text-muted-foreground">
                    Your email client should have opened. Thank you!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-sm text-sage hover:text-sage/80 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-foreground/5 border border-sage/15 text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-sage/40 focus:ring-1 focus:ring-sage/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-foreground/5 border border-sage/15 text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-sage/40 focus:ring-1 focus:ring-sage/20 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-foreground/5 border border-sage/15 text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-sage/40 focus:ring-1 focus:ring-sage/20 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-foreground/5 border border-sage/15 text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-sage/40 focus:ring-1 focus:ring-sage/20 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-sage/20 text-sage border border-sage/30 hover:bg-sage/30 disabled:opacity-50 transition-all duration-300"
                  >
                    {isLoading ? (
                      "Preparing..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Social Connectivity — spans 2 cols */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Email */}
            <div className="glass-card rounded-xl p-5 hover:bg-foreground/[0.03] dark:hover:bg-background/40 hover:border-sage/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-foreground hover:text-sage transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-xl p-5 hover:bg-foreground/[0.03] dark:hover:bg-background/40 hover:border-sage/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Connect</p>
              <div className="space-y-3">
                <SocialRow
                  href={personalInfo.github}
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                  handle="lalalostcode"
                />
                <SocialRow
                  href={personalInfo.linkedin}
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                  handle="Ilham Rafiqin"
                />
                <SocialRow
                  href={`mailto:${personalInfo.email}`}
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  handle={personalInfo.email}
                  external={false}
                />
              </div>
            </div>

            {/* Tip card */}
            <div className="glass-card rounded-xl p-5 border-sage/15 hover:bg-foreground/[0.03] dark:hover:bg-background/40 hover:border-sage/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-sage font-medium">💡 Tip:</span> For project inquiries, include details about your timeline and requirements for a faster response.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SocialRow({
  href,
  icon,
  label,
  handle,
  external = true,
}: {
  href: string
  icon: React.ReactNode
  label: string
  handle: string
  external?: boolean
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 group"
    >
      <div className="w-9 h-9 rounded-lg bg-foreground/5 border border-sage/15 flex items-center justify-center text-muted-foreground group-hover:text-sage group-hover:border-sage/30 transition-all">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-foreground/30">{label}</p>
        <p className="text-sm text-foreground/70 group-hover:text-sage transition-colors truncate">
          {handle}
        </p>
      </div>
      <ExternalLink className="h-3.5 w-3.5 text-foreground/20 group-hover:text-sage/50 transition-colors" />
    </Link>
  )
}
