import { SITE } from '../data/site'
import { PLACEMENTS, QUOTE, TRUST } from '../data/content'
import { Accent, Button } from '../components/ui'
import Carousel from '../components/Carousel'

export function Quote() {
  return (
    <section className="quote">
      <div className="container quote__grid">
        <img
          className="quote__img"
          src={QUOTE.image.src}
          alt={QUOTE.image.alt}
          loading="lazy"
          style={{ objectPosition: QUOTE.image.pos }}
        />
        <figure>
          <blockquote className="quote__text">“{QUOTE.text}”</blockquote>
          <figcaption>
            <p className="quote__name">{QUOTE.name}</p>
            <p className="quote__sub">{QUOTE.sub}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export function Trust() {
  return (
    <section className="trust">
      <div className="container inset">
        <h2 className="h2">
          <Accent>{SITE.brand}</Accent> adalah <Accent>Solusi Tepat</Accent>
        </h2>
        <p className="trust__text">{TRUST.text}</p>

        <div className="trusted">
          <img className="trusted__img" src={TRUST.image.src} alt={TRUST.image.alt} loading="lazy" />
          <div className="trusted__copy">
            <h2 className="h2 h2--left">
              {SITE.product} <Accent>Terpercaya</Accent> dengan Enkripsi Data AES 128-bit
            </h2>
            <p className="trusted__text">{TRUST.trustedText}</p>
            <Button arrow className="trusted__btn">
              Dapatkan Penawaran
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Placements() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="h2">
          Contoh <Accent>Penempatan</Accent>
        </h2>
        <Carousel label="Contoh penempatan kamera" className="projects__carousel">
          {PLACEMENTS.map((p) => (
            <figure className="carousel__slide shot" key={p.label}>
              <img src={p.src} alt="" loading="lazy" style={{ objectPosition: p.pos }} />
              <figcaption>{p.label}</figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
