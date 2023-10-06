// Note : Jangan hapus text di bawah, di tambahin boleh, asalkan jangan di hapus.

import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT BOT*

▢ _*SCRIPT BOT BY RIDWANZ*_
➠ Owner : ©ʀɪᴅᴡᴀɴᴢ
➠ Whatsapp : +6285225416745
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler