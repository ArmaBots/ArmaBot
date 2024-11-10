import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {

if (command == 'play' || command == 'musica') {
if (!text) return conn.reply(m.chat, `*🤔Que esta buscado? 🤔*\n*Ingrese el nombre del la canción*\n\n*Ejemplo:*\n#play emilia 420`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
try {
const yt_play = await search(args.join(' '))
const ytplay2 = await yts(text);
const texto1 = `📌 *Título* : ${yt_play[0].title}\n📆 *Publicado:* ${yt_play[0].ago}\n⌚ *Duración:* ${secondString(yt_play[0].duration.seconds)}`.trim()

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error,jpg', texto1, m, null, fake);
//conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `${usedPrefix}ytmp3 ${yt_play[0].url}`], ['video', `${usedPrefix}ytmp4 ${yt_play[0].url}`]], null, null, m)

if (!ytplay2.all.length) {
return m.react("❌");
}
const vid = ytplay2.all[0];
const videoUrl = vid.url;
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp3?url=${encodeURIComponent(videoUrl)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();

if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch (e) {
await m.react('❌')
console.log(e)}
}

if (command == 'play2' || command == 'video') {
if (!text) return conn.reply(m.chat, `*🤔Que esta buscado? 🤔*\n*Ingrese el nombre del la canción*\n\n*Ejemplo:*\n#play emilia 420`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
try { 
const yt_play = await search(args.join(' '))
const ytplay2 = await yts(text);
const texto1 = `📌 *Título* : ${yt_play[0].title}\n📆 *Publicado:* ${yt_play[0].ago}\n⌚ *Duración:* ${secondString(yt_play[0].duration.seconds)}`.trim()
m.react("⌛")
await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error,jpg', texto1, m, null, fake);
//conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `${usedPrefix}ytmp3 ${yt_play[0].url}`], ['video', `${usedPrefix}ytmp4 ${yt_play[0].url}`]], null, null, m)

if (!ytplay2.all.length) {
return m.react("❌");
}
const vid = ytplay2.all[0];
const videoUrl = vid.url;
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();

if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `error.mp4`, caption: `🔰 𝘼𝙦𝙪𝙞 𝙚𝙨𝙩𝙖 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 \n🔥 𝙏𝙞𝙩𝙪𝙡𝙤: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })   
m.react("✅")
} catch (e) {
await m.react('❌')
console.log(e)}
}

if (command == 'play3' || command == 'play4') {
if (!text) return conn.reply(m.chat, `*🤔Que esta buscado? 🤔*\n*Ingrese el nombre del la canción*\n\n*Ejemplo:*\n#play emilia 420`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
const yt_play = await search(args.join(' '))
const texto1 = `📌 *Título* : ${yt_play[0].title}\n📆 *Publicado:* ${yt_play[0].ago}\n⌚ *Duración:* ${secondString(yt_play[0].duration.seconds)}\n👀 *Vistas:* ${MilesNumber(yt_play[0].views)}`.trim()

await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `${usedPrefix}ytmp3 ${yt_play[0].url}`], ['video', `${usedPrefix}ytmp4 ${yt_play[0].url}`], ['Mas resultados', `${usedPrefix}yts ${text}`]], null, null, m)
}}
handler.help = ['play', 'play2'];
handler.tags = ['downloader'];
handler.command = ['play', 'play2', 'play3', 'play4', 'audio', 'video']
//handler.limit = 3
handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
                                }
