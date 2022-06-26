module.exports = {
        px: '.',
        playing: 'Aslı ❤️ Rencia ',

    opt: {
        DJ: {
            enabled: true, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: '『👑』Kurucu', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        maxVol: 250, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
        }
    }
};
