# Canvafy
Make configurable canvas easily with Canvafy

# Installation
```sh
npm i canvafy
```

[![NPM](https://nodei.co/npm/canvafy.png)](https://nodei.co/npm/canvafy/)

# Documentation
* [Rank](https://github.com/squarfiuz-wellick/canvafy/edit/main/docs/Rank.md)
* [Welcome And Leave](https://github.com/squarfiuz-wellick/canvafy/edit/main/docs/WelcomeLeave.md)
* [Spotify](https://github.com/squarfiuz-wellick/canvafy/edit/main/docs/Spotify.md)

# Example of code

```js
const canvafy = require("canvafy");
const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on("ready", () => {
    console.log(`I connect to ${client.user.tag}`)
});
```
Rank card
```js
client.on("messageCreate", async message => {
    if (message.content === "!rankcard") {
        const rankcard = await new canvafy.RankCard()
        .setAvatar(message.author.displayAvatarURL({ format: "png" }))
        .setBackground("image", "https://th.bing.com/th/id/R.248b992f15fb255621fa51ee0ca0cecb?rik=K8hIsVFACWQ8%2fw&pid=ImgRaw&r=0")
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
        .setStatus(message.member.presence?.status)
        .setLevel(1)
        .setCurrentXp(200)
        .setRequiredXp(400)
        .build();

        message.reply({
            files: [{
                attachment: rankcard.toBuffer(),
                name: `rankcard-${message.member.id}.png`
            }]
        });
    }
});
```

![img](https://i.imgur.com/Tw6Upk2.png)

Welcome card
```js
client.on('guildMemberAdd', async member => {
    const welcome = await new canvafy.WelcomeLeave()
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setBackground("image", "https://th.bing.com/th/id/R.248b992f15fb255621fa51ee0ca0cecb?rik=K8hIsVFACWQ8%2fw&pid=ImgRaw&r=0")
    .setTitle("Welcome")
    .setDescription("Welcome to this server, go read the rules please!")
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.3)
    .build();

    member.guild.channels.cache.get("<channelId>").send({
        content: `Welcome to you ${member}!`,
        files: [{
            attachment: welcome.toBuffer(),
            name: `welcome-${member.id}.png`
        }]
    });
});
```

![img](https://i.imgur.com/qiopaJc.png)

Spotify card
```js
client.on("messageCreate", async message => {
    if (message.content === "!spotify") {
        const spotify = await new canvafy.Spotify()
        .setAuthor("Alan Walker, Ava Max")
        .setAlbum("Alan Walker Album")
        .setBackground("image", "https://th.bing.com/th/id/R.0bbabe949adc2ea6c853eddad2f38519?rik=jshX8YIYBDnF4w&pid=ImgRaw&r=0")
        .setImage("https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177")
        .setTimestamp(50000, 179000)
        .setTitle("Alone, Pt II")
        .build();

        message.reply({
            files: [{
                attachment: rankcard.toBuffer(),
                name: `spotify-${message.member.id}.png`
            }]
        });
    }
});
```

![img](https://i.imgur.com/RY6uXqZ.png)

Leave card
```js
client.on('guildMemberRemove', async member => {
    const leave = await new canvafy.WelcomeLeave()
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setBackground("image", "https://th.bing.com/th/id/R.248b992f15fb255621fa51ee0ca0cecb?rik=K8hIsVFACWQ8%2fw&pid=ImgRaw&r=0")
    .setTitle("Goodbye")
    .setDescription("Your departure makes us sad")
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.3)
    .build();

    member.guild.channels.cache.get("<channelId>").send({
        content: `Goodbye to you ${member}!`,
        files: [{
            attachment: leave.toBuffer(),
            name: `leave-${member.id}.png`
        }]
    });
});

client.login('YOUR_TOKEN');
```

# Note
This package is the continuation of discanvas package

# Server Support 
[![Discord Banner](https://discordapp.com/api/guilds/759432409400999967/widget.png?style=banner2)](https://discord.gg/SgfzZPckVT)
