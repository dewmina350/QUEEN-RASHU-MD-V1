const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝐐𝐔𝐄𝐄𝐍-𝐑𝐀𝐒𝐇𝐔-𝐌𝐃=ophWHQDZ#YV_ln-FqV7kvEJrmesMEomH5UeIE4716g8ZPF55lMNs",
//උඩ ☝️ තියෙන Past Sesion Id කියන එක අයින් කරලා ඔයාගෙ Sesion Id එක Past කරන්න 😁
MONGODB: process.env.MONGODB || "mongodb://mongo:DvuEpMNKdVgIsAHcmOcIlDNZtpPcDYVG@junction.proxy.rlwy.net:48762",
//උඩ ☝️ තියෙන Past MongoDB Url කියන එක අයින් කරලා ඔයාගෙ MongoDB Url එක Past කරන්න 😁
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BsjkCDP/9555.jpg",
BOT_NAME: process.env.BOT_NAME || "QUEEN-RASHU-MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
};
