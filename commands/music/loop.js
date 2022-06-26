const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şu anda çalan müzik yok!. ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, Önce mevcut müziğin döngü modunu devre dışı bırakmalısınız **(${client.config.px}loop)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, Tüm liste durmadan tekrar edecek 🔁` : `${message.author}, Something went wrong. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, Döngü modunda önce mevcut kuyruğu devre dışı bırakmalısınız **(${client.config.px}loop queue)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, Mevcut müzik kesintisiz olarak tekrarlanacak (listedeki tüm müzikler **${client.config.px}loop queue**  You can repeat it with the option.) 🔂` : `${message.author}, Something went wrong ❌`);
};
    },
};