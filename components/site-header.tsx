const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export function SiteHeader({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl tracking-tight">
          {name}
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href} className={item.label === 'Experience' ? 'hidden sm:block' : undefined}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
