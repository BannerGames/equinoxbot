const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const evento = require(`./eventos/${file}`);
        let nomeEvento = file.split(".")[0];
        client.on(nomeEvento, evento.bind(null, client));
    });
})
client.commands = new Enmap()
fs.readdir("./comandos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./comandos/${file}`);
        let nomeComando = file.split(".")[0];
        console.log(`Carregando ${files.length} comandos.`);
        client.commands.set(nomeComando, props);
    });
})
client.login("no");
