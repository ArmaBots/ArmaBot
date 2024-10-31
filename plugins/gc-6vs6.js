import axios from "axios";

const handler = async (m, { conn, args, command, usedPrefix }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/es.json`));
  const tradutor = _translate.plugins.descargas_instagram;

  if (!args[0])
    throw `6 𝐕𝐄𝐑𝐒𝐔𝐒 6

𝐇𝐎𝐑𝐀𝐑𝐈𝐎
🇲🇽 𝐌𝐄𝐗 : 
🇨🇴 𝐂𝐎𝐋 : 

🥷🏻 ┇ 
🥷🏻 ┇  
🥷🏻 ┇ 
🥷🏻 ┇ 
🥷🏻 ┇ 
🥷🏻 ┇ 

ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
🥷🏻 ┇ 
🥷🏻 ┇
`;
  
handler.command =
  /^(6vs6|vs6)$/i;
export default handler;

