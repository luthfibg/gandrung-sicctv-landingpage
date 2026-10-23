import { useRef } from 'react'
import { Icon } from './icons'

/**
 * Carousel sederhana berbasis scroll-snap. Anak-anaknya harus berkelas "carousel__slide".
 * variant "outside" menaruh panah di luar deretan, "overlay" menaruhnya di atas gambar.
 */
export default function Carousel({ label, variant = 'overlay', className = '', children }) {
  const track = useRef(null)

  const scroll = (dir) => {
    const el = track.current
    if (!el || !el.firstElementChild) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const step = el.firstElementChild.getBoundingClientRect().width + gap
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div
      className={`carousel carousel--${variant} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <button type="button" className="carousel__btn carousel__btn--prev" onClick={() => scroll(-1)} aria-label="Sebelumnya">
        <Icon name="ChevronLeft" size={22} strokeWidth={2.6} />
      </button>
      <div className="carousel__track" ref={track} tabIndex={0}>
        {children}
      </div>
      <button type="button" className="carousel__btn carousel__btn--next" onClick={() => scroll(1)} aria-label="Berikutnya">
        <Icon name="ChevronRight" size={22} strokeWidth={2.6} />
      </button>
    </div>
  )
}
