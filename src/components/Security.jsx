import { KeyRound, Lock, ShieldCheck } from 'lucide-react'
import { PRODUCTS, SECURITY } from '../data/products'
import { Container, Reveal, SectionHeading } from './ui'

const ICONS = [Lock, ShieldCheck, KeyRound]
const shutter = PRODUCTS.sg50.features.find((f) => f.title === 'Privasi yang Bisa Dilihat')

export default function Security() {
  return (
    <section id="keamanan" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <SectionHeading kicker="Privasi & keamanan" title="Privasi pengguna selalu diutamakan">
              Gambar dari rumah dan usaha Anda adalah milik Anda. Karena itu keamanan dibangun di setiap
              lapisan.
            </SectionHeading>
          </Reveal>

          <ul className="mt-10 space-y-4">
            {SECURITY.map((item, i) => {
              const Icon = ICONS[i]
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 90}
                  className="flex gap-5 rounded-2xl border border-ink/10 bg-white p-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-ink text-brand">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>

        <Reveal className="overflow-hidden rounded-3xl bg-ink text-white">
          <img src={shutter.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Khusus SG50</p>
            <h3 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight">
              Matikan kamera secara fisik
            </h3>
            <p className="mt-3 leading-relaxed text-white/70">{shutter.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
