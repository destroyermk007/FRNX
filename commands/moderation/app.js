const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'apply',
    execute: async (message, args, bot) => {
        let apparray = []
        if (message.guild) {
            const filter = m => m.author.id === message.author.id
            message.author.send(new MessageEmbed()
                .setDescription('Please state your IGN')).then(ignmessage => {
                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                        apparray.push(collected.first().content)
                    })
                        //level
                        .then(() => {
                            ignmessage.channel.send(new MessageEmbed()
                                .setDescription('Please state your `Level`')).then(() => {
                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                        apparray.push(collected.first().content)
                                    })
                                        //kdr
                                        .then(() => {
                                            ignmessage.channel.send(new MessageEmbed()
                                                .setDescription('Please state your `KDR`')).then(() => {
                                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                                        apparray.push(collected.first().content)
                                                    })
                                                        //accuracy
                                                        .then(() => {
                                                            ignmessage.channel.send(new MessageEmbed()
                                                                .setDescription('Please state your `Accuracy`')).then(() => {
                                                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                                                        apparray.push(collected.first().content)
                                                                    })
                                                                        //play time per week
                                                                        .then(() => {
                                                                            ignmessage.channel.send(new MessageEmbed()
                                                                                .setDescription('Please state your `Playtime` per week')).then(() => {
                                                                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                                                                        apparray.push(collected.first().content)
                                                                                    })
                                                                                        //main class
                                                                                        .then(() => {
                                                                                            ignmessage.channel.send(new MessageEmbed()
                                                                                                .setDescription('Please state your `Main class`')).then(() => {
                                                                                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                                                                                        apparray.push(collected.first().content)
                                                                                                    })
                                                                                                        //region
                                                                                                        .then(() => {
                                                                                                            ignmessage.channel.send(new MessageEmbed()
                                                                                                                .setDescription('Please state your `Region`')).then(() => {
                                                                                                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                                                                                                        apparray.push(collected.first().content)
                                                                                                                    })
                                                                                                                        //nukes
                                                                                                                        .then(() => {
                                                                                                                            ignmessage.channel.send(new MessageEmbed()
                                                                                                                                .setDescription('Please state your `Nuke count`')).then(() => {
                                                                                                                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                                                                                                                        apparray.push(collected.first().content)
                                                                                                                                    })
                                                                                                                                        //link
                                                                                                                                        .then(() => {
                                                                                                                                            ignmessage.channel.send(new MessageEmbed()
                                                                                                                                                .setDescription('Please provide your `Profile Link`')).then(() => {
                                                                                                                                                    ignmessage.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                                                                                                                                                        if (!collected.first().content.includes('https://krunker.io/social.html?p=profile&q=')) {
                                                                                                                                                            ignmessage.channel.send(new MessageEmbed().setColor('RED').setDescription('Your application was cancelled for : `missing profile link`'))
                                                                                                                                                        } else {
                                                                                                                                                            apparray.push(collected.first().content)
                                                                                                                                                            ignmessage.channel.send(new MessageEmbed()
                                                                                                                                                                .setColor('GREEN')
                                                                                                                                                                .setDescription('Your application has been submitted!'))
                                                                                                                                                        }
                                                                                                                                                    })



                                                                                                                                                        .then(() => {
                                                                                                                                                            if (!apparray.includes('https://krunker.io/social.html?p=profile&q=')) return
                                                                                                                                                            bot.channels.resolve('828263291590803491').send(new MessageEmbed()
                                                                                                                                                                .setTitle(`Application by ${message.author.username} (${message.author.id})`)
                                                                                                                                                                .setColor('RANDOM')
                                                                                                                                                                .addFields(
                                                                                                                                                                    { name: 'IGN', value: `${apparray[0]}` },
                                                                                                                                                                    { name: 'Level', value: `${apparray[1]}` },
                                                                                                                                                                    { name: 'KDR', value: `${apparray[2]}` },
                                                                                                                                                                    { name: 'Accuracy', value: `${apparray[3]}` },
                                                                                                                                                                    { name: 'Playtime per week', value: `${apparray[4]}` },
                                                                                                                                                                    { name: 'Main class', value: `${apparray[5]}` },
                                                                                                                                                                    { name: 'Region', value: `${apparray[6]}` },
                                                                                                                                                                    { name: 'Nukes', value: `${apparray[7]}` },
                                                                                                                                                                    { name: 'Profile Link', value: `${apparray[8]}` }
                                                                                                                                                                )
                                                                                                                                                                .setFooter('Bot made by EJ BEAN#3961'))

                                                                                                                                                        })



                                                                                                                                                })
                                                                                                                                        })



                                                                                                                                })
                                                                                                                        })



                                                                                                                })
                                                                                                        })
                                                                                                })
                                                                                        })
                                                                                })
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                }).catch(err => {
                    message.channel.send(new MessageEmbed()
                        .setColor('RED')
                        .setDescription(`\`\`\`diff\n- ${err}\`\`\`Open your DM's and try again`)).catch(console.error)
                })

        }

    }
}
/*.then(() => {
                                                                    bot.channels.resolve('828263291590803491').send(new MessageEmbed()
                                                                    .setTitle(`Application by ${message.author.username} (${message.author.id})`)
                                                                    .setColor('RANDOM')
                                                                    .addFields(
                                                                        {name: 'IGN', value: `${apparray[0]}`},
                                                                        {name: 'Level',value:`${apparray[1]}`},
                                                                        {name:'KDR', value:`${apparray[2]}`},
                                                                        {name:'Accuracy', value:`${apparray[3]}`},
                                                                        {name: 'Playtime per week',value:`${apparray[4]}`},
                                                                        {name: 'Main class', value: `${apparray[5]}`},
                                                                        {name: 'Region' , value: `${apparray[6]}`}
                                                                    )
                                                                    .setFooter('Bot made by EJ BEAN#3961'))
                                                                })*/