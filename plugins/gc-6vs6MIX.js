let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ANOTENSE MANCOS CULIAOS🔥 ${pesan}`
let teks = `╭┈┈ ๑👻๑ •• ${oi} ๑👻๑ ••:\n`
for (let mem of participants) {
teks += ``}
teks += `ㅤ


6 𝐕𝐄𝐑𝐒𝐔𝐒 6
  *MIXTO*
𝐇𝐎𝐑𝐀𝐑𝐈𝐎
🇲🇽 𝐌𝐄𝐗 : 
🇨🇴 𝐂𝐎𝐋 :  
       
ㅤʚ 𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘦𝘴:

  🥷🏻 ┇ 
  💗 ┇  
  🥷🏻 ┇ 
  💗 ┇ 
  🥷🏻 ┇ 
  💗 ┇ 
 ㅤㅤ
ㅤㅤʚ 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:
ㅤ
  🥷🏻 ┇ 
  💗 ┇ 

   `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsm23 <mesaje>','masc23 <mesaje>']
handler.tags = ['group']
handler.command = /^(6VS6MIX)$/i
handler.admin = true
handler.group = true
export default handler