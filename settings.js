
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['94714382877'] //ur owner number
global.ownername = "maliya" //ur owner name
global.ytname = "malin" //ur yt chanel name
global.socialm = "maliya bot" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.ownernomer = "94714382877" //ur number
global.premium = ['94714382877'] //ur premium number
global.botname = 'gon botaa' //ur bot name
global.linkz = "https://chat.whatsapp.com/DVBUVexIVm9AJaGYyjexeE" //your theme url which will be displayed on whatsapp
global.websitex = "https:// no" //ur website to be displayed
global.botscript = 'https://github.com/DarkMakerofc/Queen-Elisa-MD' //script link
global.themeemoji = "🛸" //ur theme emoji
global.packname = "   👸🏻maliya bot" //ur sticker watermark packname
global.author = "   👸🏻maliya bot👸🏻\n\n\nA whatsapp bot developed by\nCYBORG ROBOT" //ur sticker watermark author
global.wm = "👸🏻maliya bot👸🏻." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: '*👸🏻💭Here you go!*',
    admin: '*👸🏻💭මෙම විශේෂාංගය පරිපාලකයින්ට පමණක් භාවිතා කළ හැකිය!*',
    botAdmin: '*👸🏻💭Bot මුලින්ම Admin විය යුතුය!*',
    premime: '*👸🏻💭ඔබට ලියාපදිංචි වීමට අවශ්‍ය නම් වාරික විශේෂ විශේෂාංග කුලියට*',
    owner: '*👸🏻💭මෙම විශේෂාංගය භාවිතා කළ හැක්කේ හිමිකරුට පමණි*',
    group: '*👸🏻💭කණ්ඩායම් සඳහා පමණක් භාවිතා කරන විශේෂාංග!*',
    private: '*👸🏻💭පුද්ගලික කතාබස් සඳහා පමණක් භාවිතා කරන විශේෂාංග!*',
    bot: '*👸🏻💭මෙම විශේෂාංගය භාවිතා කළ හැක්කේ bot හට පමණි*',
    wait: '*👸🏻💭ඉදපන් පගො පොඩ්ඩක්t...*',
    linkm: '*👸🏻💭කො හුත්තො ලින්ක් එක?*',
    endLimit: '*👸🏻💭ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12 කට වරක් නැවත සකසනු ලැබේ*',
    nsfw: '*👸🏻💭nsfw විශේෂාංගය සක්‍රිය කර නැත, කරුණාකර සක්‍රිය කිරීමට පරිපාලක අමතන්න(මට කියපන් පගො)*',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
