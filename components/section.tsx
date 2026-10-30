import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 border-t">
      <div className="mx-auto grid max-w-4xl gap-8 px-6 py-16 md:grid-cols-[180px_1fr] md:py-20">
        <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
          <span className="font-mono text-xs text-accent">{index}</span>
          <h2 id={headingId} className="font-serif text-3xl tracking-tight">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
