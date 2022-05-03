const aoijs = require("aoi.js");
const axios = require('axios');
require('dotenv').config()

const bot = new aoijs.Bot({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  intents: "all",
});

bot.onMessage();

bot.status({
  text: "My Crush ❤️",
  type: "WATCHING",
  time: 12
})

bot.command({
  name: "serverping",
  code: `Ping Server KucingSMP ke Discord Adalah \`$ping ms\` `,
});

bot.loopCommand({
  code: `
  $djsEval[
  (async() => {

    const Discord = require('discord.js')
    const jsonfile = require('jsonfile')
    jsonfile.readFile('./data.json', function (err, obj) {

if(obj.date !== "$getObjectProperty[Infogempa.gempa.DateTime]") {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random() * 16777215))
    .setTitle(':warning: Gempabumi Dirasakan :warning: ')
    .addFields(
        { name: 'Waktu Gempa', value: '$getObjectProperty[Infogempa.gempa.Tanggal], $getObjectProperty[Infogempa.gempa.Jam]', inline: true },
        { name: 'Magnitudo', value: '$getObjectProperty[Infogempa.gempa.Magnitude]', inline: true },
        { name: 'Kedalaman', value: '$getObjectProperty[Infogempa.gempa.Kedalaman]', inline: true },
        { name: 'Koordinat', value: '$getObjectProperty[Infogempa.gempa.Coordinates]', inline: true },
        { name: 'Lintang', value: '$getObjectProperty[Infogempa.gempa.Lintang]', inline: true },
        { name: 'Bujur', value: '$getObjectProperty[Infogempa.gempa.Bujur]', inline: true },
        { name: 'Wilayah', value: '$getObjectProperty[Infogempa.gempa.Wilayah] ($getObjectProperty[Infogempa.gempa.Dirasakan])', inline: true },
        { name: 'Potensi', value: '$getObjectProperty[Infogempa.gempa.Potensi]', inline: true },
    )
    .setImage('https://data.bmkg.go.id/DataMKG/TEWS/$getObjectProperty[Infogempa.gempa.Shakemap]')
    .setTimestamp()
    .setFooter({ text: 'Data by BMKG | KucingSMP' });

channel.send({ content: '**Informasi Gempa Terkini**', embeds: [exampleEmbed] }).then(() => {

  const write = {
    date: "$getObjectProperty[Infogempa.gempa.DateTime]"
  }

 jsonfile.writeFile('./data.json', write, function (err) {
   if (err) console.error(err)
   console.log('updated')
 })

})
  } else {

  }

})
  $createObject[$jsonRequest[https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json;]]
  })()
  ]
  `,
  channel: process.env.CHANNEL_ID,
  executeOnStartup: true,
  every: 3000,
});

bot.command({
  name: "e",
  code: `$eval[$message]
$onlyForIDs[$botOwnerID;:eyes:]`,
});
