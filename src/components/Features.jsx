import { useState } from 'react'
import { PRODUCTS } from '../data/products'
import { Container, Reveal, SectionHeading, Tabs } from './ui'

const TABS = [
  { id: 'sg50', label: 'SG50 Indoor' },
  { id: 'sg90', label: 'SG90 Outdoor' },
]

export default function Features() {
  const [tab, setTab] = useState('sg50')
  const product = PRODUCTS[tab]

  return (
    <section id="fitur" className="bg-paper-2 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading kicker="Fitur unggulan" title="Kecerdasan yang bekerja untuk Anda">
              Dari deteksi otomatis hingga komunikasi dua arah, setiap fitur dirancang agar Anda tahu
              apa yang terjadi tanpa harus terus menatap layar.
            </SectionHeading>
          </Reveal>
          <Tabs tabs={TABS} value={tab} onChange={setTab} label="Pilih produk" />
        </div>

        <div
          role="tabpanel"
          key={tab}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {product.features.map((f, i) => (
            <Reveal
              as="article"
              key={f.title}
              delay={(i % 3) * 80}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
            >
              <img
                src={f.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full bg-ink/5 object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
