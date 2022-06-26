module.exports = {
    name: 'save',
    aliases: [],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

  if (!queue || !queue.playing) return message.channel.send(`${message.author}, çalan şarkı yok  !. ❌`);

        message.author.send(`Registered track: **${queue.current.title}** | ${queue.current.author}, Saved server: **${message.guild.name}** ✅`) .then(() => {
            message.channel.send(`ne istiyosan attım özel den. ✅`);
        }).catch(error => {
            message.channel.send(`${message.author}, Size özel mesaj gönderilemiyor. ❌`);
        });
    },
};