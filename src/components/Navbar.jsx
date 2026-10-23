import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE, waLink } from '../data/site'
import { Button, Container } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-white/10 bg-ink/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label={`${SITE.brand} beranda`}>
          <img src="/images/logo-snapguard.png" alt="" className="h-9 w-9 object-contain" />
          <span className="hidden font-display text-xl font-semibold uppercase tracking-wide text-white sm:block">
            {SITE.brand}
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#kontak" className="hidden px-5 py-2.5 sm:inline-flex">
            Minta Penawaran
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="menu-mobile" aria-label="Navigasi seluler" className="border-t border-white/10 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <Button href="#kontak" onClick={() => setOpen(false)} className="mt-3">
              Minta Penawaran
            </Button>
            <a
              href={waLink('Halo, saya tertarik dengan SnapGuard Super Intelligence CCTV.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-3 py-2 text-center text-sm text-white/60 hover:text-white"
            >
              atau chat WhatsApp langsung
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}
