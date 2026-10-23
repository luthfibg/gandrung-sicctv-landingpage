import { STATS } from '../data/products'
import { Container, Reveal, SectionHeading } from './ui'

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionHeading kicker="Tanpa batas lokasi" title="Terpasang di mana saja, selalu terhubung" dark>
            Tanpa bergantung pada Wi-Fi di sekitar dan, untuk SG90, tanpa sumber listrik.
          </SectionHeading>
        </Reveal>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 80} className="bg-ink-2 p-8">
              <dt className="font-display text-4xl font-semibold tracking-tight text-brand sm:text-[2.6rem]">
                {s.value}
              </dt>
              <dd className="mt-4 text-sm leading-relaxed text-white/70">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
