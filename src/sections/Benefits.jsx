import { SITE } from '../data/site'
import { ADVANTAGES, CAPABILITIES, MARKETS } from '../data/content'
import { Icon } from '../components/icons'
import { Accent, Button } from '../components/ui'
import Carousel from '../components/Carousel'

function Feature({ item, top = false }) {
  return (
    <div className={`feature ${top ? 'feature--top' : ''}`}>
      <Icon name={item.icon} size={44} strokeWidth={1.8} className="feature__icon" />
      <h3 className="feature__title">{item.title}</h3>
      <p className="feature__text">{item.text}</p>
    </div>
  )
}

export function Advantages() {
  return (
    <section className="adv">
      <div className="container inset adv__grid">
        <div className="adv__intro">
          <h2 className="adv__title">
            <span className="accent">Keunggulan</span> pengadaan CCTV dengan{' '}
            <span className="accent">{SITE.brand}</span>
          </h2>
          <p className="adv__text">{ADVANTAGES.text}</p>
          <Button className="adv__btn">Dapatkan Penawaran</Button>
        </div>
        {ADVANTAGES.top.map((f) => (
          <Feature key={f.title} item={f} top />
        ))}
        {ADVANTAGES.bottom.map((f) => (
          <Feature key={f.title} item={f} />
        ))}
      </div>
    </section>
  )
}

export function Capabilities() {
  return (
    <section className="caps">
      <div className="container">
        <h2 className="h2">
          Kemampuan <Accent>Deteksi AI</Accent>
        </h2>
        <Carousel label="Kemampuan deteksi AI" variant="outside" className="caps__carousel">
          {CAPABILITIES.map((c) => (
            <div className="carousel__slide cap" key={c.label}>
              <span className="cap__icon">
                <Icon name={c.icon} size={30} strokeWidth={1.8} />
              </span>
              <p className="cap__label">{c.label}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export function Market() {
  return (
    <section className="market">
      <div className="container">
        <h2 className="h2">
          Our <Accent>Market</Accent>
        </h2>
        <ul className="market__grid">
          {MARKETS.map((m) => (
            <li className="market__card" key={m.title}>
              <span className="market__icon">
                <Icon name={m.icon} size={26} strokeWidth={1.9} />
              </span>
              <h3 className="market__title">{m.title}</h3>
              <p className="market__text">{m.text}</p>
            </li>
          ))}
        </ul>
        <Button className="market__cta">Dapatkan Penawaran</Button>
      </div>
    </section>
  )
}
