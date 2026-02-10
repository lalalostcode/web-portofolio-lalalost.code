import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Experience } from "@/components/sections/experience"
import { ContactCTA } from "@/components/sections/contact-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <ContactCTA />
    </>
  )
}
