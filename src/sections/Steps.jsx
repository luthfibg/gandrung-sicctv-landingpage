import { SITE } from '../data/site'
import { STEPS } from '../data/content'
import { Icon } from '../components/icons'

export function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <h2 className="h2 h2--md">Layanan Cepat dan Mudah dalam 5 Langkah Sederhana</h2>
        <p className="steps__sub">
          Ikuti langkah-langkah berikut untuk memulai pengalaman pengawasan cerdas dengan {SITE.product}{' '}
          yang menjawab kebutuhan Anda
        </p>

        <ol className="steps__grid">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step__icon">
                <Icon name={s.icon} size={30} strokeWidth={2} />
              </span>
              <p className="step__n">Step {i + 1}</p>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
