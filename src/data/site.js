// Pengaturan umum situs. Ubah nilai di sini, tidak perlu menyentuh komponen.
export const SITE = {
  brand: 'SnapGuard',
  product: 'Super Intelligent CCTV',
  company: 'Gandrung Media Corp',
  // TODO: ganti dengan nomor WhatsApp sales (format internasional tanpa + atau spasi).
  whatsapp: '62000000000',
  // Alamat endpoint penerima data form (mis. Google Apps Script Web App, lihat google-apps-script.gs).
  // Jika dikosongkan, form membuka WhatsApp dengan pesan yang sudah terisi.
  formEndpoint: '',
}

export const waLink = (message = '') =>
  `https://wa.me/${SITE.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
