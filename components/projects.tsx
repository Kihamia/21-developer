import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { Section } from './section'

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="work" index="02" title="Selected work">
      <ul className="divide-y border-y">
        {projects.map((project) => (
          <li key={project.title}>
            <a href={project.href} className="group flex flex-col gap-3 py-6 focus-visible:outline-2">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="flex items-center gap-1.5 text-lg font-medium">
                  {project.title}
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>
              <p className="max-w-lg leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono">
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
