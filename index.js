// client ID = 828261871089221662
const { Client, Collection, MessageEmbed } = require('discord.js')
const bot = new Client({ disableMentions: 'everyone' })
const core = require('./JSON/core.json')
const prefix = core.prefix
const fs = require('fs')
require('dotenv').config()
bot.commands = new Collection();
const commandFolders = fs.readdirSync('./commands')
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    }
}
bot.on('ready', async () => {
    console.log('I am online')
    bot.user.setActivity(`with EJ in bed`, {
        type: 'PLAYING'
    })
    bot.channels.resolve('829369004564152390').send(new MessageEmbed()
    .setDescription('```diff\n+ Successful reboot```')
    .setTimestamp()).catch(console.error)
})
bot.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return
    const args = message.content.substring(prefix.length).split(" ")
    const commandname = args[0].toLowerCase()
    const command = bot.commands.get(commandname)
    if (!command) return
    try {
        command.execute(message, args , bot)
    } catch (error) {
        console.log(error)
    }
})

bot.on('message' , async message => {
    if (message.channel.id !== '829362442957357096') return;
    if (message.author.id !== '828261871089221662') return
    try {
        await message.react('👍')
        await message.react('👎')
    } catch (e) {
        console.log(e)
    }
})
bot.login(process.env.token)
