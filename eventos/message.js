module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    if(!message.guild) return;
    // Ignore messages not starting with the prefix (in config.json)
    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : 'e!';    
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
    const moment = require("moment");
    moment.locale("pt")
    const Discord = require("discord.js");
    let embed = new Discord.RichEmbed()
    let hora = moment(embed.timestamp).format("LT")
    // Run the command
    cmd.run(client, message, args);
  };