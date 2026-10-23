import { AI_CAPABILITIES } from '../data/products'

export default function AIStrip() {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {AI_CAPABILITIES.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 font-display text-lg font-medium uppercase tracking-wider text-ink/80"
        >
          {item}
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )

  return (
    <section aria-label="Kemampuan AI" className="overflow-hidden border-y border-ink/10 bg-paper-2 py-5">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </section>
  )
}
