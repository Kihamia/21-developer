import { ArrowDownRight, MapPin } from 'lucide-react'
import type { Profile } from '@/lib/portfolio-data'

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-20 pt-20 md:pt-28">
      <p className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
        Available for new projects
      </p>
      <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
        {profile.role} crafting <em className="text-accent">calm</em>, considered software.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {profile.intro}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my work
          <ArrowDownRight className="size-4" aria-hidden="true" />
        </a>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" aria-hidden="true" />
          {profile.location}
        </span>
      </div>
    </section>
  )
}
