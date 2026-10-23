// Seluruh konten produk diambil dari brosur SG50 dan SG90.
// Ubah teks atau gambar di sini; komponen akan mengikuti otomatis.

const IMG = '/images'

export const PRODUCTS = {
  sg50: {
    id: 'sg50',
    model: 'SG50',
    type: 'Indoor',
    name: 'Kamera Indoor 4G AI Pro',
    badges: ['5MP / 3K Ultra HD', '4G LTE Built-in Data Card'],
    summary:
      'Penjaga rumah yang mengerti konteks: mengenali manusia, hewan peliharaan, api, bahkan tangisan bayi, lalu mengirim peringatan ke ponsel Anda.',
    image: `${IMG}/sg50/hero.jpg`,
    imagePosition: '80% 50%',
    highlights: [
      'Deteksi tangisan bayi dan peringatan otomatis',
      'Zoom digital 10x untuk detail lebih jelas',
      'Kartu SIM bawaan, tidak bergantung Wi-Fi',
      'Penutup privasi: kamera mati total, tanpa rekaman',
    ],
    features: [
      {
        title: 'Deteksi AI yang Cerdas',
        text: 'Deteksi manusia, hewan peliharaan, dan api dengan AI.',
        image: `${IMG}/sg50/detect.webp`,
      },
      {
        title: 'Deteksi Tangisan Bayi',
        text: 'Dapatkan notifikasi otomatis saat bayi menangis.',
        image: `${IMG}/sg50/cry.webp`,
      },
      {
        title: 'Pantau dari Mana Saja',
        text: 'Akses jarak jauh dengan tampilan langsung yang mudah.',
        image: `${IMG}/sg50/remote.webp`,
      },
      {
        title: 'Tetap Online dengan 4G',
        text: 'Kartu SIM bawaan membuat Anda tetap terhubung meskipun tanpa jaringan Wi-Fi di dekat Anda.',
        image: `${IMG}/sg50/lte.webp`,
      },
      {
        title: 'Privasi yang Bisa Dilihat',
        text: 'Geser atau balik untuk mematikan kamera sepenuhnya. Tidak ada perekaman video.',
        image: `${IMG}/sg50/privacy.webp`,
      },
      {
        title: 'Panggilan Sekali Klik',
        text: 'Tanpa aplikasi, tanpa pengaturan. Cocok untuk lansia dan anak-anak.',
        image: `${IMG}/sg50/call.webp`,
      },
      {
        title: 'Peringatan yang Presisi',
        text: 'Mendeteksi manusia secara akurat dan memberikan peringatan yang presisi.',
        image: `${IMG}/sg50/human.webp`,
      },
      {
        title: 'Bicara Dua Arah',
        text: 'Pantau dan bicara langsung melalui aplikasi.',
        image: `${IMG}/sg50/twoway.webp`,
      },
      {
        title: 'Gambar yang Jernih',
        text: 'Pantau rumah Anda setiap saat dengan kualitas gambar yang sangat jernih.',
        image: `${IMG}/sg50/hd.webp`,
      },
    ],
    placement: [
      { label: 'Horizontal', image: `${IMG}/sg50/place-horizontal.webp` },
      { label: 'Gantungan', image: `${IMG}/sg50/place-hanging.webp` },
    ],
    dimensionImage: `${IMG}/sg50/dimension.png`,
    specs: [
      {
        title: 'Kamera',
        rows: [
          ['Model', 'SG50'],
          ['Wi-Fi', 'Wi-Fi 6'],
          ['Lensa', 'Sudut pandang 80° (diagonal), 70° (horizontal), 38° (vertikal)'],
          ['Siang & malam', 'Filter IR-cut dengan perpindahan otomatis'],
          ['Jarak night vision', 'IR 10 m'],
          ['Dimensi', '82 × 82 × 117 mm'],
        ],
      },
      {
        title: 'Video & Audio',
        rows: [
          ['Resolusi maksimal', '5MP, 2880 × 1620'],
          ['Frame rate', '15 fps'],
          ['Kompresi video', 'H.265'],
        ],
      },
      {
        title: 'Penyimpanan',
        rows: [
          ['Penyimpanan lokal', 'Kartu TF/SD hingga maksimal 512 GB'],
          ['Penyimpanan cloud', 'Mendukung'],
        ],
      },
      {
        title: 'Umum',
        rows: [
          [
            'Kondisi operasional',
            '-20°C hingga 50°C (-4°F hingga 122°F), kelembapan 95% atau kurang (tanpa kondensasi)',
          ],
          ['Sumber daya', 'DC 5V'],
          ['Port', 'Type-C'],
        ],
      },
      {
        title: 'Fungsi AI',
        checks: [
          'Deteksi manusia',
          'Deteksi tangisan',
          'Pengenalan gestur',
          'Deteksi api',
          'Deteksi kendaraan',
          'Deteksi hewan peliharaan',
        ],
      },
      {
        title: 'Fitur Cerdas',
        checks: [
          'Alarm pintar',
          'Pengubah suara',
          'Posisi preset',
          'Deteksi area',
          'Pembalikan gambar',
          'Komunikasi dua arah',
          'Pelacakan manusia',
        ],
      },
      {
        title: 'Jaringan',
        rows: [
          ['Standar Wi-Fi', 'IEEE 802.11 b/g/n/ax'],
          ['Rentang frekuensi', '2.4 ~ 2.4835 GHz'],
          ['Penambahan perangkat', 'Pairing Bluetooth'],
          ['Protokol cloud', 'Protokol proprietary cloud'],
          ['Protokol ONVIF', 'Mendukung'],
        ],
      },
    ],
  },

  sg90: {
    id: 'sg90',
    model: 'SG90',
    type: 'Outdoor',
    name: 'Kamera Outdoor AI 4G LTE',
    badges: ['2MP + 2MP Ultra HD', '4G LTE Built-in Data Card'],
    summary:
      'Dua kamera dalam satu perangkat, ditenagai panel surya dan terhubung lewat 4G LTE. Tanpa kabel, tanpa Wi-Fi, tanpa sumber listrik.',
    image: `${IMG}/sg90/hero.jpg`,
    imagePosition: '85% 60%',
    highlights: [
      'Dua lensa, dua tampilan sekaligus',
      'Panel surya 7 W dengan baterai 9000 mAh',
      'Deteksi manusia dan kendaraan dengan AI',
      'Peringatan cahaya dan suara untuk mengusir penyusup',
    ],
    features: [
      {
        title: 'Dua Kamera, Satu Perangkat',
        text: 'Dua kamera dalam satu perangkat untuk cakupan lebih luas.',
        image: `${IMG}/sg90/dual.webp`,
      },
      {
        title: 'Tanpa Wi-Fi, Tanpa Listrik',
        text: 'Waktu siaga sangat lama tanpa repot instalasi kabel.',
        image: `${IMG}/sg90/offgrid.webp`,
      },
      {
        title: 'Tampilan Panorama 360°',
        text: 'Pan 270° dan tilt 105° untuk menjangkau area yang luas.',
        image: `${IMG}/sg90/panorama.webp`,
      },
      {
        title: 'Peringatan Cahaya & Suara',
        text: 'Deteksi manusia dan kendaraan dengan AI, disertai peringatan cahaya dan suara.',
        image: `${IMG}/sg90/alert.webp`,
      },
      {
        title: 'Full Color Siang & Malam',
        text: 'Penglihatan full color siang dan malam.',
        image: `${IMG}/sg90/night.webp`,
      },
      {
        title: 'Dua Lensa, Dua Tampilan',
        text: 'Lihat dua tampilan sekaligus dari satu aplikasi.',
        image: `${IMG}/sg90/dualview.webp`,
      },
    ],
    placement: [],
    dimensionImage: `${IMG}/sg90/dimension.png`,
    specs: [
      {
        title: 'Kamera',
        rows: [
          ['Model', 'SG90'],
          ['Sudut PT', 'Pan 270°, tilt 105°'],
          ['Siang & malam', 'Filter beralih secara otomatis'],
          ['Jarak night vision', 'IR 20 m'],
          ['Dimensi', '107 × 147 × 171 mm'],
          ['Lensa', 'Sudut pandang 80° (diagonal), 70° (horizontal), 38° (vertikal)'],
        ],
      },
      {
        title: 'Video & Audio',
        rows: [
          ['Resolusi maksimal', '2MP + 2MP, 1920 × 1080 × 2'],
          ['Frame rate', '15 fps'],
          ['Kompresi video', 'H.265'],
        ],
      },
      {
        title: 'Penyimpanan',
        rows: [['Penyimpanan lokal', 'Kartu TF/SD hingga maksimal 512 GB']],
      },
      {
        title: 'Umum',
        rows: [
          [
            'Kondisi operasional',
            '-20°C hingga 50°C (-4°F hingga 122°F), kelembapan 95% atau kurang (tanpa kondensasi)',
          ],
          ['Sumber daya', 'DC 5V / tenaga surya'],
          ['Port', 'Type-C'],
          ['Kapasitas baterai', '9000 mAh'],
          ['Daya panel surya', '7 W'],
        ],
      },
      { title: 'Fungsi AI', checks: ['Deteksi manusia', 'Deteksi kendaraan'] },
      {
        title: 'Fitur Cerdas',
        checks: [
          'Alarm pintar',
          'Pengubah suara',
          'Posisi preset',
          'Deteksi area',
          'Pembalikan gambar',
          'PIR',
          'Komunikasi dua arah',
          'Pelacakan manusia',
        ],
      },
    ],
  },
}

export const COMPARE = [
  ['Lokasi pemasangan', 'Indoor', 'Outdoor'],
  ['Resolusi', '5MP, 2880 × 1620', '2MP + 2MP (dua lensa), 1920 × 1080 × 2'],
  ['Konektivitas', '4G LTE (kartu data bawaan), Wi-Fi 6', '4G LTE (kartu data bawaan)'],
  ['Sumber daya', 'DC 5V, Type-C', 'DC 5V atau tenaga surya (panel 7 W, baterai 9000 mAh)'],
  ['Jarak night vision', 'IR 10 m', 'IR 20 m'],
  ['Pan / Tilt', 'Panorama 360°', 'Pan 270°, tilt 105°'],
  [
    'Deteksi AI',
    'Manusia, tangisan, gestur, api, kendaraan, hewan peliharaan',
    'Manusia, kendaraan',
  ],
  ['Penyimpanan lokal', 'TF/SD hingga 512 GB', 'TF/SD hingga 512 GB'],
  ['Dimensi', '82 × 82 × 117 mm', '107 × 147 × 171 mm'],
]

export const SECURITY = [
  {
    title: 'Keamanan Transmisi',
    text: 'Seluruh transmisi data dienkripsi.',
  },
  {
    title: 'Enkripsi Data',
    text: 'Data cloud dienkripsi menggunakan enkripsi AES 128-bit.',
  },
  {
    title: 'Perlindungan Akun',
    text: 'Peringatan jika terdeteksi aktivitas login yang tidak biasa, serta dukungan perlindungan privasi termasuk kontrol daya jarak jauh.',
  },
]

export const AI_CAPABILITIES = [
  'Deteksi Manusia',
  'Deteksi Kendaraan',
  'Deteksi Api',
  'Deteksi Hewan Peliharaan',
  'Deteksi Tangisan Bayi',
  'Pengenalan Gestur',
  'Pelacakan Manusia',
  'Deteksi Area',
  'Alarm Pintar',
  'Komunikasi Dua Arah',
]

export const STATS = [
  { value: '4G LTE', label: 'Kartu data terintegrasi di SG50 dan SG90. Tidak bergantung pada Wi-Fi sekitar.' },
  { value: '7W · 9000mAh', label: 'Panel surya dan baterai SG90 untuk waktu siaga sangat lama tanpa kabel.' },
  { value: '270° · 105°', label: 'Pan dan tilt SG90 dengan dua lensa untuk cakupan area yang luas.' },
  { value: '10x', label: 'Zoom digital SG50 untuk melihat detail dengan lebih jelas.' },
]

export const USE_CASES = [
  {
    icon: 'baby',
    title: 'Rumah & Keluarga',
    text: 'Pantau kamar bayi, temani anak dan lansia dengan panggilan sekali klik, dan dapat peringatan saat ada gerakan atau tangisan.',
    product: 'SG50',
  },
  {
    icon: 'warehouse',
    title: 'Gudang & Ruang Usaha',
    text: 'Deteksi manusia dan api dengan AI, lalu terima notifikasi di ponsel agar tindakan bisa segera diambil.',
    product: 'SG50',
  },
  {
    icon: 'sun',
    title: 'Lahan & Area Tanpa Listrik',
    text: 'Pasang di kebun, proyek, atau halaman luas. Panel surya dan 4G LTE membuatnya berdiri sendiri tanpa kabel.',
    product: 'SG90',
  },
  {
    icon: 'car',
    title: 'Halaman, Parkiran & Gerbang',
    text: 'Deteksi manusia dan kendaraan dengan peringatan cahaya dan suara untuk menekan niat penyusup.',
    product: 'SG90',
  },
]
