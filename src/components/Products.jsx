import { ArrowRight, Check } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { Container, Reveal, SectionHeading } from './ui'

function ProductCard({ product, onSelectSpec, delay }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} ${product.model}`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ objectPosition: product.imagePosition }}
        />
        <span className="absolute left-5 top-5 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
          {product.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <h3 className="font-display text-6xl font-semibold leading-none tracking-tight">{product.model}</h3>
        <p className="mt-2 text-lg font-semibold text-ink/80">{product.name}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {product.badges.map((b) => (
            <li key={b} className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white">
              {b}
            </li>
          ))}
        </ul>

        <p className="mt-6 leading-relaxed text-ink/70">{product.summary}</p>

        <ul className="mt-6 space-y-3">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm font-medium text-ink/85">
              <Check className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <a
          href="#spesifikasi"
          onClick={() => onSelectSpec(product.id)}
          className="mt-8 inline-flex items-center gap-2 self-start text-sm font-bold text-ink underline decoration-brand decoration-2 underline-offset-[6px] hover:text-brand-700"
        >
          Lihat spesifikasi {product.model}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  )
}

export default function Products({ onSelectSpec }) {
  return (
    <section id="produk" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker="Pilihan produk" title="Dua kamera. Satu kecerdasan.">
            SG50 menjaga ruang di dalam. SG90 menjaga area di luar, mandiri dengan tenaga surya.
            Keduanya terhubung lewat 4G LTE dan dilengkapi AI.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ProductCard product={PRODUCTS.sg50} onSelectSpec={onSelectSpec} delay={0} />
          <ProductCard product={PRODUCTS.sg90} onSelectSpec={onSelectSpec} delay={120} />
        </div>
      </Container>
    </section>
  )
}
