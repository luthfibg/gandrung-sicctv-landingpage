import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { SITE, waLink } from '../data/site'
import { Container, Reveal, SectionHeading } from './ui'

const PRODUCT_OPTIONS = [
  { id: 'SG50 (Indoor)', label: 'SG50 Indoor' },
  { id: 'SG90 (Outdoor)', label: 'SG90 Outdoor' },
  { id: 'SG50 dan SG90', label: 'Keduanya' },
]

const field =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40'

export default function CTA() {
  const [name, setName] = useState('')
  const [product, setProduct] = useState(PRODUCT_OPTIONS[0].id)
  const [need, setNeed] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      `Halo ${SITE.brand}, saya ${name.trim() || '(nama)'}.`,
      `Saya tertarik dengan ${product}.`,
      need.trim() && `Kebutuhan: ${need.trim()}`,
      'Mohon info harga dan ketersediaan. Terima kasih.',
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="kontak" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-[30rem] rounded-full bg-brand/20 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading kicker="Hubungi kami" title="Siap mengamankan tempat Anda?" dark>
            Ceritakan kebutuhan Anda. Tim kami akan membantu memilih antara SG50 dan SG90, lengkap
            dengan informasi harga dan ketersediaan.
          </SectionHeading>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={submit}
            className="space-y-5 rounded-3xl border border-white/10 bg-ink-2/80 p-7 backdrop-blur sm:p-9"
          >
            <div>
              <label htmlFor="cta-name" className="mb-2 block text-sm font-semibold">
                Nama
              </label>
              <input
                id="cta-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className={field}
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Produk yang diminati</legend>
              <div className="grid grid-cols-3 gap-2">
                {PRODUCT_OPTIONS.map((o) => (
                  <label
                    key={o.id}
                    className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand ${
                      product === o.id
                        ? 'border-brand bg-brand text-ink'
                        : 'border-white/15 text-white/80 hover:border-white/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="product"
                      value={o.id}
                      checked={product === o.id}
                      onChange={() => setProduct(o.id)}
                      className="sr-only"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="cta-need" className="mb-2 block text-sm font-semibold">
                Kebutuhan <span className="font-normal text-white/50">(opsional)</span>
              </label>
              <textarea
                id="cta-need"
                rows={3}
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="Misalnya: memantau kamar bayi, gudang, atau lahan tanpa listrik"
                className={field}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Kirim lewat WhatsApp
            </button>
            <p className="text-center text-xs text-white/50">
              Anda akan diarahkan ke WhatsApp dengan pesan yang sudah terisi.
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}
