import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { SITE } from '../data/site'
import { Container } from './ui'
import LeadForm from './LeadForm'

const MINI = [PRODUCTS.sg50, PRODUCTS.sg90]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      {/* Latar foto dengan lapisan gelap agar teks dan form tetap terbaca */}
      <img
        src={PRODUCTS.sg50.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: '70% 40%' }}
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-24 size-[32rem] rounded-full bg-brand/15 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-32">
        <div>
          <p className="inline-block border-b-2 border-brand pb-1 text-base font-semibold sm:text-lg">
            {SITE.brand} <span className="text-white/60">oleh</span> {SITE.company}
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
            {SITE.tagline}
            <span className="block text-brand">yang mengerti apa yang dilihatnya.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            <strong className="font-bold text-white">Kamera AI 4G LTE untuk indoor dan outdoor</strong>{' '}
            dengan kartu data bawaan. Mendeteksi manusia, kendaraan, api, hewan peliharaan, hingga
            tangisan bayi, lalu langsung memberi tahu Anda.
          </p>

          <ul className="mt-9 grid max-w-xl gap-3 sm:grid-cols-2">
            {MINI.map((p) => (
              <li key={p.id}>
                <a
                  href="#produk"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-2.5 pr-4 backdrop-blur transition-colors hover:border-brand/60 hover:bg-white/10"
                >
                  <img
                    src={p.image}
                    alt=""
                    className="h-16 w-20 shrink-0 rounded-lg object-cover"
                    style={{ objectPosition: p.imagePosition }}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl font-semibold leading-none">
                      {p.model}
                    </span>
                    <span className="mt-1 block truncate text-xs text-white/65">
                      {p.type} · {p.badges[0]}
                    </span>
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm id="penawaran" />
      </Container>
    </section>
  )
}
