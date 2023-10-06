/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285225416745', '©ʀɪᴅᴡᴀɴᴢ', true],
  ['6285225416745']
] // Nomor Owner

global.mods = ['6282117232028'] 
global.prems = ['6282117232028', '6285225416745']

// apikey
global.lann = 'mTHosQJZ'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'mTHosQJZ'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = '©ʀɪᴅᴡᴀɴᴢ' // nama owner
global.nomor = '6285225416745' // nomor owner
global.nans = '#ʀɪᴅᴢ-ʙᴏᴛᴢ🇮🇩' // nama bot 
global.thumb = 'https://i.ibb.co/LNMgLVw/20231005-060507.png' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/D7yRpq5gYZPDCi6qeQoviB' // link group yang ada di menu

// Sticker wm
global.packname = 'Created By : ' 
global.author = '©Ridz-Botz'
global.fgig = 'https://www.instagram.com/ridwanz_sptra' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/Ridwanz-Saputra' // bebas tapi jangan kosong
global.fgyt = 'https://s.id/Ridwanz' // bebas tapi jangan kosong
global.fgpyp = 'https://s.id/Ridwanz'// bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6285880029379'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = 'https://s.id/Ridwanz'
global.email = 'ridwanzsaputra9@gmail.com'
global.lastm = '*ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ©ʀɪᴅᴡᴀɴᴢ*'
global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})