const { MessageEmbed } = require("discord.js");



 exports.execute = async (client, message, args) => {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 4277660919;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLUE")
    return message.channel.send({embeds:[invite]});
  },
  module.exports.help = {
   
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "invite",
    category:'Misc',
    aliases: []
  }

