const { Client } = require('discord.js');
const client = new Client({ intents: ['Guilds'] });

client.config = require('./config.json');

client
	.login(client.config.token)
	.then(() => {
		console.log(`Logged in as ${client.user.tag}`);
		client.user.setActivity('with Discord.js', { type: 'PLAYING' });
	})
	.catch((err) => {
		console.error(err);
	});
