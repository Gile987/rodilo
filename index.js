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

const responses = {
  osam: "na kurcu te nosam",
  maja: "apis me za jaja",
	ulje: "srknes mi iz bulje"
};

const getRhyme = (word) => {
  const lastChar = word[word.length - 1];
  if (lastChar === "?" || lastChar === "!") {
    return responses[word.slice(0, -1)];
  }
  return responses[word];
};

client.on('messageCreate', message => {
  console.log(`${message.author.tag}: ${message.content}`);
  if (!message.author.bot) {
    const words = ['osam', 'maja', 'ulje'];
    for (const word of words) {
      const regex = new RegExp(`${word}(\\b|[!?.,]?\\s*)[!?.,]?\\s*$`, "i");
      if (message.content.match(regex)) {
        message.reply(getRhyme(word));
        break;
      }
    }
  }
});

