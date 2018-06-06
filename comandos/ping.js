exports.run = (client, message, args) => {
    message.channel.send(`Pong! 🏓 (${Math.round(client.ping)} ms)`).catch(console.error);
}
