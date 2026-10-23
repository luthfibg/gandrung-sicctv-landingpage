import { useId, useState } from 'react'
import { Icon } from './icons'
import { submitLead } from '../lib/submitLead'

const EMPTY = { name: '', phone: '', email: '', company: '', website: '' }

/**
 * Form permintaan penawaran. variant "dark" untuk hero, "light" untuk kotak CTA.
 * Kolom "website" adalah jebakan untuk bot: manusia tidak akan melihat maupun mengisinya.
 */
export default function LeadForm({ id, variant = 'dark', title, source = 'landing' }) {
  const uid = useId()
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | whatsapp | error

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))
  const fid = (key) => `${uid}-${key}`

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    if (values.website) {
      setStatus('success')
      return
    }

    const lead = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
    }

    setStatus('sending')
    try {
      const result = await submitLead(lead, source)
      if (result.mode === 'whatsapp') {
        window.open(result.url, '_blank', 'noopener,noreferrer')
        setStatus('whatsapp')
      } else {
        setValues(EMPTY)
        setStatus('success')
      }
    } catch {
      setStatus('error')
    }
  }

  const done = status === 'success' || status === 'whatsapp'

  return (
    <div id={id} className={`lead lead--${variant}`}>
      {done ? (
        <div className="lead__done" role="status">
          <span className="lead__done-icon">
            <Icon name="Check" size={28} strokeWidth={3} />
          </span>
          <h3>{status === 'whatsapp' ? 'Lanjutkan di WhatsApp' : 'Terima kasih'}</h3>
          <p>
            {status === 'whatsapp'
              ? 'Pesan Anda sudah terisi di WhatsApp. Tekan kirim di sana untuk menghubungi tim kami.'
              : 'Permintaan Anda sudah kami terima. Tim kami akan segera menghubungi Anda.'}
          </p>
          <button
            type="button"
            className="lead__again"
            onClick={() => {
              setValues(EMPTY)
              setStatus('idle')
            }}
          >
            Isi form lagi
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          {title && <p className="lead__title">{title}</p>}

          <div className="lead__field">
            <label className="lead__label" htmlFor={fid('name')}>
              Nama Anda*
            </label>
            <input
              className="lead__input"
              id={fid('name')}
              type="text"
              required
              autoComplete="name"
              placeholder="Nama Anda"
              value={values.name}
              onChange={set('name')}
            />
          </div>

          <div className="lead__row">
            <div className="lead__field">
              <label className="lead__label" htmlFor={fid('phone')}>
                Nomor Whatsapp*
              </label>
              <input
                className="lead__input"
                id={fid('phone')}
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+ \-\(\)]{8,20}"
                title="Masukkan nomor WhatsApp yang valid, misalnya 0812-3456-7890 atau +62 812 3456 7890"
                placeholder="Nomor WA"
                value={values.phone}
                onChange={set('phone')}
              />
            </div>
            <div className="lead__field">
              <label className="lead__label" htmlFor={fid('email')}>
                E-mail Anda*
              </label>
              <input
                className="lead__input"
                id={fid('email')}
                type="email"
                required
                autoComplete="email"
                placeholder="Alamat Email Anda"
                value={values.email}
                onChange={set('email')}
              />
            </div>
          </div>

          <div className="lead__field">
            <label className="lead__label" htmlFor={fid('company')}>
              Nama Perusahaan
            </label>
            <input
              className="lead__input"
              id={fid('company')}
              type="text"
              autoComplete="organization"
              placeholder="Nama Perusahaan"
              value={values.company}
              onChange={set('company')}
            />
          </div>

          <div className="lead__trap" aria-hidden="true">
            <label htmlFor={fid('website')}>Jangan diisi</label>
            <input
              id={fid('website')}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={set('website')}
            />
          </div>

          {status === 'error' && (
            <p className="lead__error" role="alert">
              Pengiriman gagal. Periksa koneksi Anda lalu coba lagi.
            </p>
          )}

          <button type="submit" className="lead__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Mengirim…' : 'Kirim'}
          </button>

          <p className="lead__note">Informasi Anda hanya digunakan untuk memproses permintaan penawaran ini.</p>
        </form>
      )}
    </div>
  )
}
