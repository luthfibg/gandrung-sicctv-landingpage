import { SITE, waLink } from '../data/site'

export function buildWhatsAppMessage(lead) {
  return [
    `Halo ${SITE.brand}, saya ${lead.name}${lead.company ? ` dari ${lead.company}` : ''}.`,
    `Saya tertarik dengan ${SITE.product} (SG50 / SG90).`,
    `WhatsApp: ${lead.phone}`,
    `Email: ${lead.email}`,
    'Mohon info penawaran. Terima kasih.',
  ].join('\n')
}

/**
 * Mengirim data calon pelanggan.
 * - Jika SITE.formEndpoint diisi: kirim ke endpoint tersebut, hasilnya { mode: 'endpoint' }.
 * - Jika kosong: kembalikan tautan WhatsApp, hasilnya { mode: 'whatsapp', url }.
 * Melempar error jika pengiriman ke endpoint gagal.
 */
export async function submitLead(lead, source = 'landing') {
  if (!SITE.formEndpoint) {
    return { mode: 'whatsapp', url: waLink(buildWhatsAppMessage(lead)) }
  }

  // 'text/plain' + 'no-cors' menghindari preflight CORS, cocok untuk Google Apps Script.
  // Respons bersifat opaque, jadi sukses berarti permintaan terkirim tanpa error jaringan.
  await fetch(SITE.formEndpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ ...lead, source, submittedAt: new Date().toISOString() }),
  })
  return { mode: 'endpoint' }
}
