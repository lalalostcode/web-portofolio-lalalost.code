import { Hero } from "@/components/sections/hero"
import { AboutExperience } from "@/components/sections/about-experience"
import { WorksSection } from "@/components/sections/works-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutExperience />
      <WorksSection />
      <ContactSection />
    </>
  )
}
