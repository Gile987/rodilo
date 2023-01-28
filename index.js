const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;


const client = new Client({
	intents: [
		Guilds, GuildMembers, GuildMessages, 'MessageContent'
	],
	partials: [
		User, Message, GuildMember, ThreadMember
	]
});

const { loadEvents } = require('./Handlers/eventHandler');

client.config = require('./config.json');
client.events = new Collection();
client.commands = new Collection();


client.login(client.config.token)
loadEvents(client);

client.on('messageCreate', message => {
	console.log(`${message.author.tag}: ${message.content}`);
	if (!message.author.bot) {
		if (message.content.endsWith('osam')) {
			message.reply('na kurcu te nosam');
		}
	}
});

