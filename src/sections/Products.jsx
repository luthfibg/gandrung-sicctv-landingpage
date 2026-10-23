import { PRODUCT_BLOCKS } from '../data/content'
import { Button } from '../components/ui'

function Block({ block, first }) {
  const hasMedia = block.layout !== 'button'
  return (
    <div className={`brand ${first ? 'brand--first' : ''}`} id={block.id}>
      <div className={`brand__top brand__top--${block.layout}`}>
        <div className="brand__copy">
          <p className="wordmark">
            <strong>{block.mark}</strong>
            <span>{block.tag}</span>
          </p>
          <p className="brand__text">{block.text}</p>
          {hasMedia && (
            <Button arrow className="brand__btn">
              Hubungi Kami
            </Button>
          )}
        </div>

        {hasMedia ? (
          <div className="brand__media">
            <img
              src={block.media.src}
              alt={block.media.alt}
              loading="lazy"
              style={{ objectPosition: block.media.pos }}
            />
          </div>
        ) : (
          <Button arrow className="brand__btn brand__btn--side">
            Hubungi Kami
          </Button>
        )}
      </div>

      <ul className="cards">
        {block.cards.map((c) => (
          <li key={c.label}>
            <figure className="card">
              <img src={c.src} alt="" loading="lazy" style={{ objectPosition: c.pos }} />
              <figcaption>{c.label}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Products() {
  return (
    <section className="products container">
      {PRODUCT_BLOCKS.map((b, i) => (
        <Block key={b.id} block={b} first={i === 0} />
      ))}
    </section>
  )
}
