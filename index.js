const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const { responses } = require('./Lists/responses');
const { words } = require('./Lists/words');


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


const getRhyme = (word) => {
  const lastChar = word[word.length - 1];
  if (lastChar === "?" || lastChar === "!") {
    return responses[word.slice(0, -1)];
  }
  return responses[word];
};

client.on('messageCreate', message => {
  if (!message.author.bot) {
    for (const word of words) {
      const regex = new RegExp(`\\b${word}(\\b|[!?.,]?\\s*)[!?.,]?\\s*$`, "i");
      if (message.content.match(regex) && Math.random() <= 0.1) {
        message.reply(`${getRhyme(word)}`);
        break;
      }
    }
  }
});

