import { ArrowUpRight, Mail } from 'lucide-react'
import type { Profile } from '@/lib/portfolio-data'
import { Section } from './section'

export function Contact({ profile }: { profile: Profile }) {
  return (
    <Section id="contact" index="04" title="Contact">
      <p className="font-serif text-3xl leading-tight tracking-tight text-balance md:text-4xl">
        Have a project in mind, or just want to say hello? My inbox is always open.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        <Mail className="size-4" aria-hidden="true" />
        {profile.email}
      </a>
      <ul className="mt-10 flex flex-wrap gap-6 text-sm">
        {profile.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.label}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
