import { useState } from 'react'
import { CTA_FORM, FAQ, FINAL_CTA, TESTIMONIALS } from '../data/content'
import { Icon } from '../components/icons'
import { Accent, Button } from '../components/ui'
import Carousel from '../components/Carousel'
import LeadForm from '../components/LeadForm'

export function CtaForm() {
  return (
    <section className="container cta" id="kontak">
      <div className="cta__copy">
        <h2 className="cta__title">{CTA_FORM.title}</h2>
        <p className="cta__text">{CTA_FORM.text}</p>
        <img className="cta__img" src={CTA_FORM.image.src} alt={CTA_FORM.image.alt} loading="lazy" />
      </div>
      <LeadForm variant="light" title="Hubungi Kami Untuk Dapat Penawaran Khusus" source="cta" />
    </section>
  )
}

/** Tampil hanya jika TESTIMONIALS di data/content.js berisi testimoni asli. */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null
  return (
    <section className="container testi">
      <div className="testi__intro">
        <h2 className="testi__title">Testimoni Customer Kami</h2>
        <p>Biarkan hasil yang berbicara</p>
        <Button>Dapatkan Penawaran</Button>
      </div>
      <Carousel label="Testimoni pelanggan" className="testi__carousel">
        {TESTIMONIALS.map((t) => (
          <figure className="carousel__slide testi__card" key={t.name + t.org}>
            <blockquote>
              {t.rating ? (
                <p className="testi__stars" role="img" aria-label={`Rating ${t.rating} dari 5`}>
                  {'★'.repeat(t.rating)}
                </p>
              ) : null}
              <p>“{t.quote}”</p>
            </blockquote>
            <figcaption>
              <b>{t.name}</b>
              <span>{t.org}</span>
            </figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="container final">
      <img className="final__img" src={FINAL_CTA.image.src} alt={FINAL_CTA.image.alt} loading="lazy" style={{ objectPosition: FINAL_CTA.image.pos }} />
      <div className="final__body">
        <h2 className="final__title">{FINAL_CTA.title}</h2>
        <p className="final__text">{FINAL_CTA.text}</p>
        <Button variant="light">Dapatkan Penawaran</Button>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq">
      <div className="container">
        <h2 className="h2">
          <Accent>Frequently Asked Questions</Accent>
        </h2>
        <div className="faq__list">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon">
                      <Icon name={isOpen ? 'Minus' : 'Plus'} size={14} strokeWidth={3.2} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__a"
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
