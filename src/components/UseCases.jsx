import { Baby, Car, Sun, Warehouse } from 'lucide-react'
import { USE_CASES } from '../data/products'
import { Container, Reveal, SectionHeading } from './ui'

const ICONS = { baby: Baby, warehouse: Warehouse, sun: Sun, car: Car }

export default function UseCases() {
  return (
    <section id="penggunaan" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker="Penggunaan" title="Cocok untuk banyak situasi">
            Pilih SG50 untuk ruang dalam atau SG90 untuk area terbuka. Berikut contoh penerapannya.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {USE_CASES.map((u, i) => {
            const Icon = ICONS[u.icon]
            return (
              <Reveal
                as="article"
                key={u.title}
                delay={(i % 2) * 100}
                className="flex gap-6 rounded-3xl border border-ink/10 bg-white p-8"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand-700">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{u.title}</h3>
                    <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
                      {u.product}
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink/70">{u.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
