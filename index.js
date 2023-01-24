const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({ intents: [
	Guilds, GuildMembers, GuildMessages
],
partials: [
	User, Message, GuildMember, ThreadMember
]});

client.config = require('./config.json');
client.events = new Collection();

client
	.login(client.config.token)
	.then(() => {
		console.log(`Logged in as ${client.user.tag}`);
		client.user.setActivity('with Discord.js');
	})
	.catch((err) => {
		console.error(err);
	});
