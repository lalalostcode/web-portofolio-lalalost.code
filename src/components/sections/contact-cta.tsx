"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Have a project in mind or want to discuss data engineering solutions? 
            I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              <Send className="h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
