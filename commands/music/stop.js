module.exports = {
    name: 'stop',
    aliases: ['st'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, çalan şarkı yok!. ❌`);

        queue.destroy();

        message.channel.send(`çalan Müzik kapatıldı  ne güzel dinliyoduk neyse görüşmek üzere ✅`);
    },
};