const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'h-midriff',
    category: 'nsfw',
    async execute(message, args, MessageEmbed, Util, client){
        var errMessage = "El comando que intentas ver sólo puede mostrarse en un canal NSFW.";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
        const image = await nsfw.hmidriff();

        const embed = new Discord.MessageEmbed()
        .setTitle(`Hentai Midriff`)
        .setImage(image)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Request By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
        message.channel.send({ embeds: [embed] });
    },
};
