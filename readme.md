# Canvafy
Make configurable canvas easily with Canvafy

# Installation
```sh
npm i canvafy
```

[![NPM](https://nodei.co/npm/canvafy.png)](https://nodei.co/npm/canvafy/)

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
        .build()

        message.reply({
            files: [{
                attachment: rankcard.toBuffer(),
                name: `rankcard-${message.member.id}.png`
            }]
        });
    }
});
```

[Documentation](https://github.com/squarfiuz-wellick/canvafy/edit/main/docs/Rank.md)
![img](https://i.imgur.com/Tw6Upk2.png)

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
    .build()

    member.guild.channels.cache.get("<channelId>").send({
        content: `Welcome to you ${member}!`,
        files: [{
            attachment: welcome.toBuffer(),
            name: `welcome-${member.id}.png`
        }]
    });
});
```

[Documentation](https://github.com/squarfiuz-wellick/canvafy/edit/main/docs/WelcomeLeave.md)
![img](https://i.imgur.com/qiopaJc.png)

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
    .build()

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

[Documentation](https://github.com/squarfiuz-wellick/canvafy/edit/main/docs/WelcomeLeave.md)

# Note
This package is the continuation of discanvas package

# Server Support 
[![Discord Banner](https://discordapp.com/api/guilds/759432409400999967/widget.png?style=banner2)](https://discord.gg/SgfzZPckVT)
