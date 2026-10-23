// Seluruh teks dan gambar halaman. Fakta produk diambil dari brosur SG50 dan SG90.
// Klaim bisnis (jumlah klien, lama berdiri, garansi, ongkir, testimoni) sengaja tidak ada
// karena tidak tercantum di brosur. Tambahkan sendiri di sini setelah dipastikan benar.
import { SITE } from './site'

const IMG = '/images'
const P = SITE.product

export const STATS = [
  { value: '2', label: 'Model Kamera' },
  { value: '6', label: 'Fungsi Deteksi AI' },
  { value: '4G LTE', label: 'Kartu Data Bawaan' },
  { value: '512 GB', label: 'Penyimpanan TF/SD' },
]

export const PRICING = {
  quote:
    'Harga CCTV bervariasi sesuai kebutuhan lokasi. Pemilihan tipe kamera dan jumlah unit yang tidak tepat dapat menyebabkan biaya berlebih atau hasil kurang optimal.',
  factors: [
    'CCTV Indoor (SG50) atau CCTV Outdoor tenaga surya (SG90)',
    'Sumber daya: DC 5V atau panel surya 7 W',
    'Jumlah unit dan luas area yang dipantau',
    'Kebutuhan tambahan: kartu penyimpanan TF/SD dan penyimpanan cloud',
  ],
  note: 'Konsultasikan kebutuhan Anda untuk perhitungan harga yang sesuai.',
}

export const PROBLEMS = {
  image: { src: `${IMG}/sg90/night.webp`, alt: 'Rumah pada malam hari tanpa pengawasan', pos: '50% 50%' },
  items: [
    ['Hanya Merekam:', 'CCTV biasa baru berguna setelah kejadian. Tanpa deteksi cerdas, Anda tidak tahu apa yang terjadi saat itu juga.'],
    ['Bergantung pada Wi-Fi:', 'Saat jaringan di sekitar bermasalah, kamera ikut terputus dan Anda kehilangan pantauan.'],
    ['Butuh Kabel dan Listrik:', 'Memasang kamera di area terbuka atau lahan tanpa listrik sering kali sulit dan memakan biaya.'],
    ['Sudut Pandang Terbatas:', 'Satu lensa dengan sudut tetap meninggalkan titik buta di area yang luas.'],
    ['Privasi Kurang Terjaga:', 'Kamera yang selalu aktif dan data yang tidak terlindungi membuat pengguna khawatir.'],
  ],
}

export const SOLUTIONS = {
  image: { src: `${IMG}/sg90/product.jpg`, alt: 'Kamera SG90 dengan panel surya terpasang di dinding', pos: '50% 50%' },
  items: [
    ['Deteksi AI Cerdas:', 'Mendeteksi manusia, kendaraan, api, hewan peliharaan, hingga tangisan bayi, lalu mengirim peringatan ke ponsel Anda.'],
    ['Tetap Online dengan 4G LTE:', 'Kartu data bawaan membuat kamera tetap terhubung tanpa bergantung pada jaringan Wi-Fi di dekat Anda.'],
    ['Tenaga Surya, Tanpa Kabel:', 'SG90 dilengkapi panel surya 7 W dan baterai 9000 mAh untuk waktu siaga sangat lama tanpa instalasi kabel listrik.'],
    ['Dua Lensa, Jangkauan Luas:', 'SG90 memiliki dua kamera dalam satu perangkat dengan pan 270° dan tilt 105°, sedangkan SG50 menawarkan tampilan panorama 360°.'],
    ['Privasi Diutamakan:', 'Data dienkripsi dengan AES 128-bit, dan SG50 dilengkapi penutup privasi untuk mematikan kamera sepenuhnya.'],
  ],
}

export const STEPS = [
  {
    icon: 'MessagesSquare',
    title: 'Konsultasi Kebutuhan',
    text: 'Tim kami siap membantu menentukan kamera yang paling sesuai untuk kebutuhan Anda: SG50 untuk indoor atau SG90 untuk outdoor bertenaga surya.',
  },
  {
    icon: 'Handshake',
    title: 'Nego',
    text: `Dapatkan penawaran untuk ${P} dengan layanan konsultasi harga yang transparan, sesuai kebutuhan dan jumlah unit Anda.`,
  },
  {
    icon: 'CreditCard',
    title: 'Payment',
    text: 'Kami menyediakan metode pembayaran yang mudah dan aman untuk setiap pembelian.',
  },
  {
    icon: 'Truck',
    title: 'Pengiriman dan Instalasi',
    text: 'Kamera dikirim ke lokasi Anda dan siap dipasang. Pemasangan SG90 tidak memerlukan kabel listrik maupun Wi-Fi.',
  },
  {
    icon: 'UserCog',
    title: 'Dukungan Teknis',
    text: 'Tim kami siap membantu pertanyaan seputar penggunaan, agar perangkat Anda terus beroperasi dengan performa terbaiknya.',
  },
]

// Tiga blok produk, mengikuti tiga blok merek pada halaman referensi.
export const PRODUCT_BLOCKS = [
  {
    id: 'sg50',
    mark: 'SG50',
    tag: 'Indoor',
    layout: 'media', // teks kiri, gambar 540 px kanan
    text: 'SG50 adalah Kamera Indoor 4G AI Pro dengan resolusi 5MP Ultra HD dan kartu data 4G LTE bawaan. Dilengkapi deteksi manusia, hewan peliharaan, api, hingga tangisan bayi untuk menjaga rumah Anda.',
    media: { src: `${IMG}/sg50/cry.webp`, alt: 'Notifikasi deteksi tangisan bayi dari SG50 di ponsel', pos: '50% 50%' },
    cards: [
      { src: `${IMG}/sg50/detect.webp`, label: 'Deteksi AI', pos: '45% 50%' },
      { src: `${IMG}/sg50/human.webp`, label: 'Deteksi Manusia', pos: '50% 50%' },
      { src: `${IMG}/sg50/call.webp`, label: 'Panggilan Sekali Klik', pos: '65% 50%' },
      { src: `${IMG}/sg50/twoway.webp`, label: 'Bicara Dua Arah', pos: '50% 50%' },
    ],
  },
  {
    id: 'sg90',
    mark: 'SG90',
    tag: 'Outdoor',
    layout: 'button', // teks kiri, tombol kanan, tanpa gambar besar
    text: 'SG90 adalah Kamera Outdoor AI 4G LTE dengan dua kamera dalam satu perangkat (2MP + 2MP), ditenagai panel surya dan kartu data bawaan. Cocok untuk area terbuka tanpa Wi-Fi dan tanpa sumber listrik.',
    cards: [
      { src: `${IMG}/sg90/dual.webp`, label: 'Dua Kamera, Satu Perangkat', pos: '50% 40%' },
      { src: `${IMG}/sg90/offgrid.webp`, label: 'Tenaga Surya & 4G LTE', pos: '75% 50%' },
      { src: `${IMG}/sg90/alert.webp`, label: 'Peringatan Cahaya & Suara', pos: '50% 50%' },
      { src: `${IMG}/sg90/night.webp`, label: 'Full Color Siang & Malam', pos: '50% 50%' },
    ],
  },
  {
    id: 'app',
    mark: 'SG50 + SG90',
    tag: 'Satu Aplikasi',
    layout: 'wide', // teks kiri, gambar 644 px kanan
    text: 'Pantau kedua kamera dari satu aplikasi: akses jarak jauh, bicara dua arah, dan tampilan dua lensa sekaligus. Transmisi data dienkripsi dan Anda mendapat peringatan jika terdeteksi login yang tidak biasa.',
    media: { src: `${IMG}/sg50/remote.webp`, alt: 'Memantau kamera dari ponsel', pos: '50% 40%' },
    cards: [
      { src: `${IMG}/sg50/lte.webp`, label: '4G LTE, Tanpa Wi-Fi', pos: '50% 50%' },
      { src: `${IMG}/sg50/hd.webp`, label: 'Gambar Ultra HD', pos: '50% 50%' },
      { src: `${IMG}/sg90/dualview.webp`, label: 'Dua Lensa, Dua Tampilan', pos: '50% 50%' },
      { src: `${IMG}/sg90/panorama.webp`, label: 'Tampilan Panorama', pos: '50% 40%' },
    ],
  },
]

export const QUOTE = {
  image: { src: `${IMG}/sg50/privacy.webp`, alt: 'Menutup kamera SG50 dengan tangan', pos: '60% 50%' },
  text: 'Geser atau balik untuk mematikan kamera sepenuhnya. Tidak ada perekaman video.',
  name: 'Privasi yang Bisa Dilihat',
  sub: 'Fitur SG50 Indoor',
}

export const TRUST = {
  text: `Dari rumah tinggal, kamar bayi, toko, hingga gudang dan lahan terbuka tanpa listrik, ${P} hadir untuk memberikan pengawasan yang cerdas. Deteksi AI, 4G LTE, dan tenaga surya membantu Anda tahu apa yang terjadi, di mana pun Anda berada.`,
  trustedText:
    'Seluruh transmisi data dienkripsi dan data cloud dilindungi enkripsi AES 128-bit. Peringatan login yang tidak biasa dan kontrol daya jarak jauh membantu menjaga privasi Anda.',
  image: { src: `${IMG}/sg90/dimension.png`, alt: 'Dimensi kamera SG90 beserta panel surya' },
}

// Pengganti "Our Project": contoh penempatan produk (foto dari brosur, bukan proyek klien).
export const PLACEMENTS = [
  { src: `${IMG}/sg50/hero.jpg`, label: 'SG50 · Langit-langit ruangan', pos: '80% 25%' },
  { src: `${IMG}/sg50/place-horizontal.webp`, label: 'SG50 · Penempatan horizontal', pos: '50% 60%' },
  { src: `${IMG}/sg50/place-hanging.webp`, label: 'SG50 · Penempatan gantungan', pos: '50% 40%' },
  { src: `${IMG}/sg90/hero.jpg`, label: 'SG90 · Dinding luar ruangan', pos: '88% 52%' },
  { src: `${IMG}/sg90/offgrid.webp`, label: 'SG90 · Area tanpa listrik', pos: '70% 40%' },
]

export const ADVANTAGES = {
  text: 'Produk dengan teknologi AI, 4G LTE, dan tenaga surya untuk semua kebutuhan pengawasan Anda',
  top: [
    { icon: 'ScanEye', title: 'Deteksi AI Cerdas', text: 'Manusia, kendaraan, api, hewan peliharaan, dan tangisan bayi.' },
    { icon: 'Wifi', title: '4G LTE Bawaan', text: 'Tetap online tanpa jaringan Wi-Fi.' },
    { icon: 'Camera', title: 'Gambar Ultra HD', text: '5MP pada SG50, 2MP + 2MP pada SG90.' },
  ],
  bottom: [
    { icon: 'Sun', title: 'Tenaga Surya', text: 'Panel 7 W dan baterai 9000 mAh pada SG90.' },
    { icon: 'Layers', title: 'Dua Kamera, Satu Perangkat', text: 'Dua lensa, dua tampilan sekaligus pada SG90.' },
    { icon: 'MessagesSquare', title: 'Komunikasi Dua Arah', text: 'Pantau dan bicara langsung lewat aplikasi.' },
    { icon: 'ShieldCheck', title: 'Privasi Terjaga', text: 'Enkripsi AES 128-bit dan penutup privasi pada SG50.' },
  ],
}

// Pengganti "Our Client": kemampuan deteksi dan fitur cerdas dari brosur.
export const CAPABILITIES = [
  { icon: 'User', label: 'Deteksi Manusia' },
  { icon: 'Car', label: 'Deteksi Kendaraan' },
  { icon: 'Flame', label: 'Deteksi Api' },
  { icon: 'PawPrint', label: 'Hewan Peliharaan' },
  { icon: 'Baby', label: 'Tangisan Bayi' },
  { icon: 'Hand', label: 'Pengenalan Gestur' },
  { icon: 'Crosshair', label: 'Pelacakan Manusia' },
  { icon: 'BellRing', label: 'Alarm Pintar' },
  { icon: 'Mic', label: 'Komunikasi Dua Arah' },
  { icon: 'Eye', label: 'Deteksi Area' },
]

export const MARKETS = [
  { icon: 'House', title: 'Rumah Tinggal', text: 'Pantau ruang keluarga dan dapatkan peringatan saat manusia, hewan peliharaan, atau api terdeteksi, langsung ke ponsel Anda.' },
  { icon: 'Baby', title: 'Kamar Bayi & Anak', text: 'Dapatkan notifikasi otomatis saat bayi menangis, dan bicara langsung dengan komunikasi dua arah.' },
  { icon: 'Hand', title: 'Lansia & Keluarga', text: 'Panggilan sekali klik tanpa aplikasi dan tanpa pengaturan, cocok untuk lansia dan anak-anak.' },
  { icon: 'Warehouse', title: 'Gudang & Toko', text: 'Deteksi manusia dan api dengan AI, dengan notifikasi di ponsel agar tindakan bisa segera diambil.' },
  { icon: 'Sun', title: 'Lahan Tanpa Listrik', text: 'Panel surya 7 W, baterai 9000 mAh, dan 4G LTE membuat SG90 berdiri sendiri tanpa kabel dan tanpa Wi-Fi.' },
  { icon: 'Car', title: 'Halaman & Parkiran', text: 'Deteksi manusia dan kendaraan dengan peringatan cahaya dan suara untuk area di luar ruangan.' },
]

export const CTA_FORM = {
  title: `${P} untuk Berbagai Kebutuhan dari Indoor Sampai Outdoor Tenaga Surya.`,
  text: 'Pilih kamera yang sesuai dengan kebutuhan dan lokasi Anda: SG50 untuk indoor, SG90 untuk outdoor.',
  image: { src: `${IMG}/sg50/dimension.png`, alt: 'Dimensi kamera SG50' },
}

// Testimoni: kosong karena produk baru. Isi dengan testimoni asli dan bagian "Testimoni" akan tampil sendiri.
// Contoh bentuk data: { quote: '...', name: 'Nama', org: 'Perusahaan', rating: 5 }
export const TESTIMONIALS = []

export const FINAL_CTA = {
  title: 'Siap Melayani dengan Kemudahan, Kecepatan dan Keandalan',
  text: `${SITE.company} menyediakan ${P} SG50 dan SG90 untuk berbagai kebutuhan pengawasan, dari pemilihan produk sampai penggunaan.`,
  image: { src: `${IMG}/sg50/hero.jpg`, alt: '', pos: '82% 22%' },
}

export const FAQ = [
  {
    q: `Apa saja produk yang ditawarkan oleh ${SITE.brand}?`,
    a: `${SITE.brand} menawarkan dua ${P}: SG50 (Kamera Indoor 4G AI Pro, 5MP) untuk dalam ruangan dan SG90 (Kamera Outdoor AI 4G LTE, 2MP + 2MP) bertenaga surya untuk luar ruangan.`,
  },
  {
    q: 'Apa perbedaan SG50 dan SG90?',
    a: 'SG50 untuk indoor: resolusi 5MP, deteksi manusia, hewan peliharaan, api, kendaraan, dan tangisan bayi, night vision IR 10 m, serta penutup privasi. SG90 untuk outdoor: dua kamera 2MP, pan 270° dan tilt 105°, night vision IR 20 m, panel surya 7 W dengan baterai 9000 mAh, serta deteksi manusia dan kendaraan.',
  },
  {
    q: 'Apakah kamera membutuhkan Wi-Fi atau sumber listrik?',
    a: 'Keduanya dilengkapi kartu data 4G LTE bawaan sehingga tidak bergantung pada Wi-Fi. SG50 memakai daya DC 5V melalui port Type-C, sedangkan SG90 dapat memakai tenaga surya sehingga tidak memerlukan sumber listrik.',
  },
  {
    q: 'Apakah data dan rekaman saya aman?',
    a: 'Seluruh transmisi data dienkripsi dan data cloud dilindungi enkripsi AES 128-bit. Anda juga mendapat peringatan jika terdeteksi aktivitas login yang tidak biasa, dengan dukungan kontrol daya jarak jauh.',
  },
  {
    q: 'Berapa kapasitas penyimpanan rekaman?',
    a: 'Keduanya mendukung kartu TF/SD hingga maksimal 512 GB. SG50 juga mendukung penyimpanan cloud.',
  },
  {
    q: 'Bagaimana saya dapat meminta penawaran harga?',
    a: 'Isi form di bagian atas halaman dengan nama, nomor WhatsApp, dan email Anda. Tim kami akan menghubungi Anda untuk menyesuaikan kebutuhan.',
  },
]
