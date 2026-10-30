import type { Profile } from '@/lib/portfolio-data'
import { Section } from './section'

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id="about" index="01" title="About">
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <h3 className="mt-10 text-sm font-medium">Tools I reach for</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <li key={skill} className="rounded-full border bg-card px-3 py-1 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}
