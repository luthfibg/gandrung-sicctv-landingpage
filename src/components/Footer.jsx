import { NAV_LINKS, SITE } from '../data/site'
import { Container } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <img src="/images/logo-snapguard.png" alt={SITE.brand} className="h-12 w-12 object-contain" />
          <span className="h-10 w-px bg-white/15" aria-hidden="true" />
          <img src="/images/logo-gandrung.png" alt={SITE.company} className="h-16 w-auto object-contain" />
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {SITE.company}. {SITE.brand} adalah merek dari {SITE.company}.
      </div>
    </footer>
  )
}
