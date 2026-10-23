import { SITE } from '../data/site'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero__bg" src="/images/sg50/hero.jpg" alt="" fetchPriority="high" />
      <div className="hero__shade" aria-hidden="true" />

      <div className="container inset hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">{SITE.company}</p>
          <h1 className="hero__title">
            Vendor {SITE.product} dengan harga CCTV terbaik di Indonesia
          </h1>
          <p className="hero__text">
            <b>Jual {SITE.product} indoor-outdoor</b> dengan harga transparan dari konsultasi hingga
            pemasangan. Dapatkan penawaran harga sesuai kebutuhan Anda.
          </p>
        </div>

        <LeadForm id="penawaran" variant="dark" source="hero" />
      </div>
    </section>
  )
}
