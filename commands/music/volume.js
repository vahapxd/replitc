const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Çalan Şarkı yok!. ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Current volume: **${queue.volume}** 🔊\n**ile ses seviyesini değiştirmek için \`1\` to \`${maxVol}\` arasında bir sayı yazın.**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, Değiştirmek istediğiniz ses düzeyi zaten mevcut ses düzeyidir ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **Şuradan bir sayı yazın: \`1\` to \`${maxVol}\` ses seviyesini değiştirmek için .** ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Ses seviyesi ayarlandı: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Something went wrong. ❌`) ;
    },
};