// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();


client.login(token);
