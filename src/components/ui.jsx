import { useEffect, useRef, useState } from 'react'

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}

/** Memunculkan elemen dengan animasi halus saat masuk layar. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const variants = {
  primary: 'bg-brand text-ink hover:bg-brand-600',
  outlineDark: 'border border-white/25 text-white hover:bg-white/10',
  outlineLight: 'border border-ink/20 text-ink hover:bg-ink/5',
}

export function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

export function SectionHeading({ kicker, title, children, dark = false, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${dark ? 'text-brand' : 'text-brand-700'}`}
      >
        {kicker}
      </p>
      <h2
        className={`font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-ink/70'}`}
        >
          {children}
        </p>
      )}
    </div>
  )
}

export function Tabs({ tabs, value, onChange, label }) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="inline-flex flex-wrap gap-1 rounded-full bg-ink/[0.06] p-1"
    >
      {tabs.map((tab) => {
        const active = value === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              active ? 'bg-ink text-white shadow-sm' : 'text-ink/70 hover:text-ink'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
