"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const sections = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("#hero")

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sectionElements = sections
        .map((s) => ({
          id: s.href,
          el: document.querySelector(s.href.replace("#", "[id='") + "']"),
        }))
        .filter((s) => s.el)

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el as HTMLElement
        if (el.getBoundingClientRect().top <= 120) {
          setActiveSection(sectionElements[i].id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToSection(href: string) {
    setIsOpen(false)
    const el = document.querySelector(href.replace("#", "[id='") + "']")
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white dark:bg-olive-dark/95 shadow-md shadow-black/5 dark:shadow-black/20 backdrop-blur-sm"
          : "bg-white/95 dark:bg-transparent backdrop-blur-sm dark:backdrop-blur-none"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-olive dark:text-white">lalalost</span>
            <span className="text-sage">code</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  activeSection === link.href
                    ? "text-sage bg-sage/10"
                    : "text-olive/60 dark:text-white/60 hover:text-olive dark:hover:text-white hover:bg-olive/5 dark:hover:bg-white/5"
                )}
              >
                {link.name}
              </button>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-olive/70 dark:text-white/80 hover:text-olive dark:hover:text-white hover:bg-olive/5 dark:hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-olive/10 dark:border-sage/10">
                {sections.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors",
                      activeSection === link.href
                        ? "text-sage bg-sage/10"
                        : "text-olive/60 dark:text-white/60 hover:text-olive dark:hover:text-white hover:bg-olive/5 dark:hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
