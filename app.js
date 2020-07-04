const Discord = require('discord.js');
const client = new Discord.Client();

// Bot Requirements
const fs = require('fs');
const Enmap = require('enmap');
const config = require('./config');

// Const Defining
const prefix = config.prefix;
const token = config.token;

// Defining Commands Execution
client.commands = new Enmap();

// Importing Events for Activation
fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Évenement '${evtName}' chargé.`);
        client.on(evtName, evt.bind(null, client));
    });
});

// Importing Commands for Activation
fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Commande '${cmdName}' chargé.`);
        client.commands.set(cmdName, props);
    });
});

// Starting Bot
client.login(token);