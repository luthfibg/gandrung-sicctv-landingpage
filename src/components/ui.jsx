import { Icon } from './icons'

/** Kata sorot pada judul (warna aksen). */
export function Accent({ children }) {
  return <span className="accent">{children}</span>
}

/** Tombol utama. Secara bawaan menuju form "Hubungi Kami" (#kontak). variant: "solid" | "light". */
export function Button({ href = '#kontak', variant = 'solid', arrow = false, className = '', children }) {
  return (
    <a href={href} className={`btn btn--${variant} ${className}`.trim()}>
      {children}
      {arrow && <Icon name="ArrowRight" size={16} strokeWidth={2.6} />}
    </a>
  )
}

/** Tautan teks dengan ikon panah bulat di ujung. */
export function LinkArrow({ href = '#kontak', className = '', children }) {
  return (
    <a href={href} className={`linkarrow ${className}`.trim()}>
      <span>{children}</span>
      <span className="linkarrow__icon">
        <Icon name="ChevronRight" size={18} strokeWidth={3} />
      </span>
    </a>
  )
}
