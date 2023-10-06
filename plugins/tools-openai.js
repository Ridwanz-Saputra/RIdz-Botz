import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
_*ᴛᴜɴɢɢᴜ ꜱᴇʙᴇɴᴛᴀʀ...*_
`.trim())
    
}

handler.command = handler.help = ['ai','openai','chatgpt','ask'];
handler.tags = ['info'];
export default handler;