import Link from "next/link"
import { Github, Linkedin, FileText, Mail } from "lucide-react"
import { personalInfo, navLinks } from "@/lib/data"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-bold text-primary"
            >
              lalalost<span className="text-foreground">code</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {personalInfo.title}. Building scalable data solutions and cloud architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="h-5 w-5" />
                <span className="sr-only">CV</span>
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              {personalInfo.email}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </Link>
            {" & "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
