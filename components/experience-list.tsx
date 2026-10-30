import type { Experience } from '@/lib/portfolio-data'
import { Section } from './section'

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <Section id="experience" index="03" title="Experience">
      <ol className="space-y-8">
        {items.map((item) => (
          <li key={`${item.company}-${item.period}`} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
            <span className="font-mono text-xs leading-7 text-muted-foreground">{item.period}</span>
            <div>
              <h3 className="font-medium">
                {item.role} <span className="text-muted-foreground">· {item.company}</span>
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{item.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
