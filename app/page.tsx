import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { ExperienceList } from '@/components/experience-list'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteHeader } from '@/components/site-header'
import { experience, profile, projects } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteHeader name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <ExperienceList items={experience} />
        <Contact profile={profile} />
      </main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </p>
          <p>Built with Next.js & TypeScript</p>
        </div>
      </footer>
    </>
  )
}
