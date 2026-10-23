import { SITE } from '../data/site'
import { PROBLEMS, SOLUTIONS } from '../data/content'
import { Accent, LinkArrow } from '../components/ui'

function Photo({ image }) {
  return (
    <div className="photo">
      <img src={image.src} alt={image.alt} loading="lazy" style={{ objectPosition: image.pos }} />
    </div>
  )
}

function List({ items }) {
  return (
    <ol className="split__list">
      {items.map(([lead, body]) => (
        <li key={lead}>
          <b>{lead}</b> {body}
        </li>
      ))}
    </ol>
  )
}

export function Problem() {
  return (
    <section className="split container inset">
      <div className="split__text">
        <h2 className="h2 h2--left">
          Pernahkah Anda menemui <Accent>masalah dengan CCTV biasa</Accent> seperti ini?
        </h2>
        <List items={PROBLEMS.items} />
        <LinkArrow className="split__link">Kami Punya Solusinya</LinkArrow>
      </div>
      <div className="split__media">
        <Photo image={PROBLEMS.image} />
      </div>
    </section>
  )
}

export function Solution() {
  return (
    <section className="split split--reverse container inset">
      <div className="split__media">
        <Photo image={SOLUTIONS.image} />
      </div>
      <div className="split__text">
        <h2 className="h2 h2--left">
          Kami, <Accent>{SITE.brand}</Accent> hadir sebagai <Accent>solusi</Accent>
        </h2>
        <List items={SOLUTIONS.items} />
        <LinkArrow className="split__link">Hubungi Kami</LinkArrow>
      </div>
    </section>
  )
}
