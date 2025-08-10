import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://files.catbox.moe/f4ir6m.jpg`)).buffer()
let img = catalogo
 global.fake = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "",
      serverMessageId: 100,
      newsletterName: '',
    },
            externalAdReply: {
                                    showAdAttribution: true,
                                        title: botname,
                                        body: 'Hola',
                                        mediaUrl: null,
                                        description: null,
                                        previewType: "PHOTO",
                                        thumbnailUrl: 'https://qu.ax/FPVnV.jpg',
                           sourceUrl: canal,
                           mediaType: 1,
                   renderLargerThumbnail: false
            },
    },
  }

 global.adReply = {
            contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
                                    showAdAttribution: true,
                                        title: botname,
                                        body: textbot,
                                        mediaUrl: null,
                                        description: null,
                                        previewType: "PHOTO",
                                        thumbnailUrl: img,
                    thumbnail: img,
                           sourceUrl: canal,
                           mediaType: 1,
                   renderLargerThumbnail: true
                                }
                        }
                }

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "",
serverMessageId: 100,
newsletterName: '',
},
externalAdReply: { 
showAdAttribution: true,
title: '𝐁𝐨𝐭 𝐕𝐞𝐧𝐭𝐚𝐬𝐏𝐞𝐫𝐳𝐳𝐳',
body: '',
previewType: "PHOTO",
thumbnailUrl: 'https://qu.ax/FPVnV.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
},},}

}