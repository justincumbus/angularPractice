const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    let userName = message.author.username;
    if (userName=="Logarithmic") {
        message.reply("");
    }
    if (message.content.toLowerCase().indexOf("singham") !==-1 ){
        message.reply("https://www.youtube.com/watch?v=GDH-vwVCKdU&t=223s");
  }
});

client.login('MzQxMzQ3MjYwNDc2NDI0MTky.DF_v-A.-T-iAU5TcXrhpyiAlcoiLWTi1OE');

