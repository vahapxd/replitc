const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('💖💖💖 :, Rencia & Aslı nın Müzik Botu  ') ;
        embed.addField(`Komutlar - ${commands.size} Komut bulundu`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));
        
        embed.setTimestamp();
     
        embed.setFooter('GÖKNUR 💖 - Developed by Rencia  ❤️', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
      
    },
};
