import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-olive/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Identity — Logo + Tagline */}
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-olive">lalalost</span>
              <span className="text-sage">code</span>
            </div>
            <p className="text-olive/50 text-sm max-w-xs leading-relaxed">
              {personalInfo.title}. Building scalable data architectures and practical AI solutions.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-olive/5 flex items-center justify-center text-olive/40 hover:text-sage hover:bg-sage/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-olive/5 flex items-center justify-center text-olive/40 hover:text-sage hover:bg-sage/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-lg bg-olive/5 flex items-center justify-center text-olive/40 hover:text-sage hover:bg-sage/10 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Links — Full navigation map */}
          <div className="space-y-4">
            <h3 className="font-semibold text-olive text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-olive/50 hover:text-sage transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Details — Location, Email, Credit */}
          <div className="space-y-4">
            <h3 className="font-semibold text-olive text-sm uppercase tracking-wider">Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-sage mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-olive/70">FILKOM, Universitas Brawijaya</p>
                  <p className="text-sm text-olive/50">Malang, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sage shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-olive/70 hover:text-sage transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-olive/8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-olive/40">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-olive/30">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage/60 hover:text-sage transition-colors"
            >
              Next.js
            </Link>
            {" & "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage/60 hover:text-sage transition-colors"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
