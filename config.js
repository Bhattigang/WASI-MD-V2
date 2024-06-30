//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "96878768812";
global.owner = process.env.OWNER_NUMBER || "96878768812";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5KK2lud1I1S2lIOE5jS2lqTUYyUFFyY1pXQlR3RDRNTVRMREhEME1HST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVVNQ2VVRUUwU09WTUtDSzAyRzVwaTNNdXBNVnpHSDR3L2pUYkpkQ1N3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSkdtYkJPNUl5dnEzK2tTL3kwRDVXUCt1dXIrbkhvV2kvdkZpM0w5cVZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtazZEUFN2OVZScVRtNFpOb0dJTldKOUdQRUtDR1pKcHl2RTNmNzZMZlhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLVWRFOHlMakhqWFFMNDk3Y3NwR0g4RDJoUlNvNzhXOXhjN3d5U3N5SHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllpVDFqTFNLWjNJRmI3cGxaeWJLY1FOY01lRGdYMGozdERGTFNqbzNtd289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05kVVl0VjJVUkdIM1RrdlY2TUxqMjgwNmR2OGpMdy9vWXJDZHQxSlVuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjVqa2lKWS9XQVNJTXZVZzVudVcrNDllQ0l1cnVXYUYzeWVqRTlVNnlTRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo3S0FueFFhcTlpMmZrR3ViMkMyUStuYUVOM3RHcVRmL3hCa1RpVUJqM1R1Zlp4NlRMVmdPZ0hSd05DUllJOEpnSTloQytaMGJiMmxHaXp6Wkh3bkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJxQWllOWp4V3hiVmVueTFuRW5XbHV6bExrOElSVEM3aUxObTk2UnFoWDJFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk2ODc4NzY4ODEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA4RDY1NjkxNzY3Mjc4QTlDQzE5MzBFOEEyOTE2OTM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MjI0MzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk2ODc4NzY4ODEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjczQTg5MzRFQjFDMDFEM0YwM0YwNzhFOUFFRjk3RkE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MjI0MzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRXOHdPMDFxUmphUU44dWc1MDNucUEiLCJwaG9uZUlkIjoiZDYxMzEwYzUtMWMyZi00ZjRmLWI3ZGQtNTMwYjFlZTE0ZjZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im83T01UbmhBMGNBRUJtOUI1MGVoUDRyakgyYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4WFJWZy9xcnA5L1RRRzFyN0tvS3g4QlR0Ukk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVYxM0dMNFMiLCJtZSI6eyJpZCI6Ijk2ODc4NzY4ODEyOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTkFNRSBLQSBLSUEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0txYTViMERFTEREZzdRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1GS2dpUStJSnd1SXFMdkhTT2w4U05yN282cUx0eGIzZTBtMm44T0g0Mnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhrWTZ6dUgwZFErdVlnZ2EyR1FzSE1SeGtBZ1FjREhQc0UxbHhQNnFQR0xHWjdvaURvc29Bb1QvQTZ1SGhnbTZHYXByb0JCRkRGTEc4RVgvdXExVUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvNENhSytMeXIwcDRQbVd0QURpd1AzOTBkTEhnUGpPeU1jeEJOcXdpSnplQWpEaC81ZWhXWDdMSFR6a3VkTXFCUWtYU3JhZHQzQ2IxYUNoMVJ6dFpEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk2ODc4NzY4ODEyOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmhTb0lrUGlDY0xpS2k3eDBqcGZFamErNk9xaTdjVzkzdEp0cC9EaCtOcyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTcyMjQyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMdTMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
