/**
 * Penerima data form hero -> Google Sheets.
 *
 * Cara pakai:
 * 1. Buat Google Sheet baru, lalu buka Extensions > Apps Script.
 * 2. Tempel kode ini, simpan.
 * 3. Deploy > New deployment > jenis "Web app".
 *    Execute as: Me. Who has access: Anyone.
 * 4. Salin URL Web app (berakhiran /exec) ke SITE.formEndpoint di src/data/site.js.
 * Setiap perubahan kode memerlukan deployment versi baru.
 */
function doPost(e) {
  var data = JSON.parse(e.postData.contents)
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads')

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Waktu', 'Nama', 'WhatsApp', 'Email', 'Perusahaan', 'Produk', 'Sumber'])
  }

  // Awalan apostrof menjaga nomor yang diawali + atau 0 agar tidak diubah Sheets.
  sheet.appendRow([
    new Date(),
    data.name,
    "'" + data.phone,
    data.email,
    data.company,
    data.product,
    data.source,
  ])

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON,
  )
}
