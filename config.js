const fs = require('fs-extra');

if (fs.existsSync('.env')) {
    require('dotenv').config({ path: __dirname + '/.env' });
}

//═══════[Required Variables]════════\\
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";  // Put your app URL here
global.email = "saimsamsun789@gmail.com";
global.location = "Lahore, Pakistan";

global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://hassan:SRmq1H-6iGN8X-U3lEZYOQ@stormy-druid-15759.7tt.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full";

global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/itxhassan069/hassan-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website = process.env.WEBSITE || global.gurl;  // Use the same value for website if not provided separately
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/itxhassan069/hassan-md/blob/main/lib/assets/suhail.jpg?raw=true";  // Set logo for image
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙈𝙍.𝙃𝘼𝙎𝙎𝘼𝙉";

global.devs = "923187991068";  // Developer contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/\s+/g, '') : "null";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/\s+/g, '') : "923187991068";

//========================= [ BOT SETTINGS ] ========================\\
global.style = process.env.STYLE || Math.floor(Math.random() * 6) || '0';  // Randomly pick a bot style
global.flush = process.env.FLUSH || "false";  // Set to "true" if the bot doesn't respond
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false";
global.wlcm = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Disable welcome by setting to "false"

global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false";  // Disable bot in groups when in public mode

global.MsgsInLog = process.env.MSGS_IN_LOG || "false";  // Set to "true" to see messages, "log" to show logs, "false" to hide log messages
global.userImages = process.env.USER_IMAGES || "text";  // Set image/video URLs here
global.waPresence = process.env.WAPRESENCE || "null";  // Set WhatsApp presence status

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null,923xxxxxxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "923187991068,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com";  // API URL
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID || "";  // Put your SESSION_ID

module.exports = {
    menu: process.env.MENU || "",  // Available @MENU @Schemes: 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default
    HANDLERS: process.env.PREFIX || ".",
    BRANCH: process.env.BRANCH || "main",
    VERSION: process.env.VERSION || "1.3.8",
    caption: global.caption || "",

    author: process.env.PACK_AUTHOR || "",
    packname: process.env.PACK_NAME || "",
    botname: process.env.BOT_NAME || "𝙈𝙍/𝙃𝘼𝙎𝙎𝘼𝙉",
    ownername: process.env.OWNER_NAME || "𝙈𝙍 𝙃𝘼𝙎𝙎𝘼𝙉",

    errorChat: process.env.ERROR_CHAT || "",
    KOYEB_API: process.env.KOYEB_API || "false",

    REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
    HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
    antilink_values: process.env.ANTILINK_VALUES || "all",
    HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

    WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
    LANG: (process.env.THEME || "SUHAIL").toUpperCase(),
};

global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID || "37";

global.rank = "updated";
global.isMongodb = false;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});

// ========================= [ Disabled in V.1.2.8 ] =========================\\  
// Uncomment these lines if needed
// style : process.env.STYLE || "2",
// readmessage: process.env.READ_MESSAGE || "false",
// warncount: process.env.WARN_COUNT || 3,
// userImages: process.env.USER_IMAGES || "text",
// disablepm: process.env.DISABLE_PM || "false",
// MsgsInLog: process.env.MSGS_IN_LOG || "false",
// readcmds: process.env.READ_COMMANDS || "false",
// alwaysonline: process.env.WAPRESENCE || "unavailable",
// read_status: process.env.AUTO_READ_STATUS || "false",
// save_status: process.env.AUTO_SAVE_STATUS || "false",
// aitts_Voice_Id : process.env.AITTS_ID || "37",
// ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
