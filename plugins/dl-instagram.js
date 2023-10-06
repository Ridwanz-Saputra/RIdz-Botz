import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
  let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  conn.reply(m.chat, `
*_ꜱᴇᴅᴀɴɢ ᴅɪ ᴘʀᴏꜱᴇꜱ..._*
`.trim(), m)
}

handler.command = ['ig'] 
export default handler