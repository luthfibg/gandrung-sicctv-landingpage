import { Check } from 'lucide-react'
import { COMPARE, PRODUCTS } from '../data/products'
import { Container, Reveal, SectionHeading, Tabs } from './ui'

const TABS = [
  { id: 'sg50', label: 'SG50' },
  { id: 'sg90', label: 'SG90' },
  { id: 'compare', label: 'Bandingkan' },
]

function SpecGroup({ group }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <h4 className="bg-ink-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
        {group.title}
      </h4>
      {group.rows ? (
        <dl className="divide-y divide-ink/10">
          {group.rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 px-5 py-3.5 sm:grid-cols-5 sm:gap-4">
              <dt className="text-sm text-ink/60 sm:col-span-2">{label}</dt>
              <dd className="text-sm font-semibold sm:col-span-3">{value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <ul className="grid gap-x-6 gap-y-3 p-5 sm:grid-cols-2">
          {group.checks.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
              <Check className="size-4 shrink-0 text-brand-700" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ProductSpecs({ product }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
      <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <figure className="rounded-2xl border border-ink/10 bg-white p-5">
          <figcaption className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            Dimensi {product.model}
          </figcaption>
          <img
            src={product.dimensionImage}
            alt={`Diagram dimensi ${product.model}`}
            loading="lazy"
            className="w-full object-contain"
          />
        </figure>

        {product.placement.length > 0 && (
          <div className="rounded-2xl border border-ink/10 bg-white p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">Penempatan</p>
            <div className="grid grid-cols-2 gap-4">
              {product.placement.map((p) => (
                <figure key={p.label}>
                  <img
                    src={p.image}
                    alt={`Penempatan ${p.label.toLowerCase()}`}
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <figcaption className="mt-2 text-center text-sm font-medium text-ink/70">
                    {p.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-5">
        {product.specs.map((group) => (
          <SpecGroup key={group.title} group={group} />
        ))}
      </div>
    </div>
  )
}

function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white">
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-ink-3 text-white">
            <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-[0.18em]">
              Spesifikasi
            </th>
            <th scope="col" className="px-5 py-4 font-display text-xl font-semibold">
              SG50
            </th>
            <th scope="col" className="px-5 py-4 font-display text-xl font-semibold">
              SG90
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10">
          {COMPARE.map(([label, a, b]) => (
            <tr key={label} className="align-top">
              <th scope="row" className="w-1/4 px-5 py-4 font-medium text-ink/60">
                {label}
              </th>
              <td className="px-5 py-4 font-semibold">{a}</td>
              <td className="px-5 py-4 font-semibold">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Specs({ value, onChange }) {
  return (
    <section id="spesifikasi" className="bg-paper-2 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading kicker="Spesifikasi" title="Detail teknis lengkap">
              Seluruh spesifikasi SG50 dan SG90, atau bandingkan keduanya berdampingan.
            </SectionHeading>
          </Reveal>
          <Tabs tabs={TABS} value={value} onChange={onChange} label="Pilih spesifikasi" />
        </div>

        <div role="tabpanel" key={value} className="mt-12">
          {value === 'compare' ? <CompareTable /> : <ProductSpecs product={PRODUCTS[value]} />}
        </div>
      </Container>
    </section>
  )
}
