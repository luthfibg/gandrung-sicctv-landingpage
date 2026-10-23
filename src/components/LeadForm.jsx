import { useState } from 'react'
import { Check } from 'lucide-react'
import { submitLead } from '../lib/submitLead'

const PRODUCT_OPTIONS = [
  'Belum tahu, ingin konsultasi',
  'SG50 (Indoor)',
  'SG90 (Outdoor)',
  'SG50 dan SG90',
]

const EMPTY = { name: '', phone: '', email: '', company: '', product: PRODUCT_OPTIONS[0], website: '' }

const input =
  'w-full rounded-lg border border-white/10 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/45 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50 [color-scheme:light]'
const label = 'mb-1.5 block text-xs font-bold text-white/70'

export default function LeadForm({ id }) {
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | whatsapp | error

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // Kolom jebakan untuk bot: manusia tidak akan mengisinya.
    if (values.website) {
      setStatus('success')
      return
    }

    const clean = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      product: values.product,
    }

    setStatus('sending')
    try {
      const result = await submitLead(clean)
      if (result.mode === 'whatsapp') {
        window.open(result.url, '_blank', 'noopener,noreferrer')
        setStatus('whatsapp')
      } else {
        setStatus('success')
        setValues(EMPTY)
      }
    } catch {
      setStatus('error')
    }
  }

  const done = status === 'success' || status === 'whatsapp'

  return (
    <div
      id={id}
      className="rounded-2xl border border-white/10 bg-black/80 p-6 shadow-2xl shadow-black/50 backdrop-blur-md sm:p-8"
    >
      {done ? (
        <div role="status" className="py-10 text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/15 text-brand">
            <Check className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold uppercase tracking-wide text-white">
            {status === 'whatsapp' ? 'Lanjutkan di WhatsApp' : 'Terima kasih'}
          </h2>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {status === 'whatsapp'
              ? 'Pesan Anda sudah terisi di WhatsApp. Tekan kirim di sana untuk menghubungi tim kami.'
              : 'Permintaan Anda sudah kami terima. Tim kami akan segera menghubungi Anda.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY)
              setStatus('idle')
            }}
            className="mt-6 text-sm font-semibold text-brand underline underline-offset-4 hover:text-white"
          >
            Isi form lagi
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4" aria-describedby="lead-note">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-white">
              Dapatkan penawaran
            </h2>
            <p className="mt-1 text-sm text-white/60">Isi data Anda, tim kami akan menghubungi Anda.</p>
          </div>

          <div>
            <label htmlFor="lead-name" className={label}>
              Nama Anda*
            </label>
            <input
              id="lead-name"
              type="text"
              required
              autoComplete="name"
              value={values.name}
              onChange={set('name')}
              placeholder="Nama Anda"
              className={input}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-phone" className={label}>
                Nomor WhatsApp*
              </label>
              <input
                id="lead-phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+ ]{8,16}"
                title="Masukkan 8 sampai 16 angka, boleh diawali +"
                value={values.phone}
                onChange={set('phone')}
                placeholder="Nomor WA"
                className={input}
              />
            </div>
            <div>
              <label htmlFor="lead-email" className={label}>
                E-mail Anda*
              </label>
              <input
                id="lead-email"
                type="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={set('email')}
                placeholder="Alamat Email Anda"
                className={input}
              />
            </div>
          </div>

          <div>
            <label htmlFor="lead-company" className={label}>
              Nama Perusahaan
            </label>
            <input
              id="lead-company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={set('company')}
              placeholder="Nama Perusahaan"
              className={input}
            />
          </div>

          <div>
            <label htmlFor="lead-product" className={label}>
              Produk yang diminati
            </label>
            <select id="lead-product" value={values.product} onChange={set('product')} className={input}>
              {PRODUCT_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* Kolom jebakan untuk bot, disembunyikan dari pengguna dan pembaca layar. */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="lead-website">Jangan diisi</label>
            <input
              id="lead-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={set('website')}
            />
          </div>

          {status === 'error' && (
            <p role="alert" className="rounded-lg bg-red-500/15 px-3.5 py-2.5 text-sm text-red-200">
              Pengiriman gagal. Periksa koneksi Anda lalu coba lagi.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {status === 'sending' && (
              <span
                className="size-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink"
                aria-hidden="true"
              />
            )}
            {status === 'sending' ? 'Mengirim…' : 'Kirim'}
          </button>

          <p id="lead-note" className="text-xs leading-relaxed text-white/45">
            Data Anda digunakan untuk memproses permintaan penawaran ini.
          </p>
        </form>
      )}
    </div>
  )
}
