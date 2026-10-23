import { SITE } from '../data/site'
import { PRICING, STATS } from '../data/content'
import { Accent, LinkArrow } from '../components/ui'

export function Intro() {
  return (
    <section className="intro">
      <div className="container inset">
        <h2 className="h2">
          Solusi Lengkap <Accent>Berbagai Kebutuhan</Accent> Jual {SITE.product}
        </h2>
        <p className="intro__box">
          Kami menyediakan {SITE.product} dalam versi indoor (SG50) dan outdoor tenaga surya (SG90)
          untuk berbagai kebutuhan di rumah, kamar bayi, toko, gudang, area parkir, lahan terbuka dan
          berbagai tempat lainnya. Dapatkan konsultasi untuk menyesuaikan dengan kebutuhan Anda.
        </p>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="stats" aria-label="Ringkasan produk">
      <dl className="container stats__row">
        {STATS.map((s) => (
          <div className="stats__item" key={s.label}>
            <dt className="stats__value">{s.value}</dt>
            <dd className="stats__label">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h2 className="h2">
          Berapa Kisaran <Accent>Harga {SITE.product}</Accent> yang sesuai kebutuhan{' '}
          <Accent>anda?</Accent>
        </h2>

        <blockquote className="pricing__quote">{PRICING.quote}</blockquote>

        <div className="pricing__factors">
          <h3>Faktor penentu harga</h3>
          <ul>
            {PRICING.factors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="inset">
          <p className="pricing__note">{PRICING.note}</p>
          <LinkArrow className="pricing__link">Hubungi Kami</LinkArrow>
        </div>
      </div>
    </section>
  )
}
