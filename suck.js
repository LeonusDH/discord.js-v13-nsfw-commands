const Discord = require("discord.js");
const nekoapi = require('cacao_nekoapi');

module.exports = {
    name: 'suck',
    category: 'nsfw',
    async execute(message, args, MessageEmbed, Util, client){
        var errMessage = "El comando que intentas ver sólo puede mostrarse en un canal NSFW.";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
        const image = await nekoapi.rolplay_nsfw.suck()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Suck`)
        .setImage(image.url)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Request By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
        message.channel.send({ embeds: [embed] });
    },
};
