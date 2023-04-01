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
  ulje: "srknes mi iz bulje",
  audi: "moj ti naudi",
  ipo: "moj te pipo",
  molim: "dupe ti posolim",
  ladja: "u dupe te gadja",
  mastilo: "dupe te pocastilo",
  city: "sedis mi na kiti",
  jedi: "na kitu mi sedi",
  gari: "sedis mi na kari",
  stari: "sedis mi na kari",
  baru: "apis me za karu",
  hulu: "apis me za lulu",
  druze: "moj te struze",
  sala: "u guzi ti moja kita mala",
  staru: "sednes mi na karu",
  stara: "srknes nam iz kara",
  rupe: "ljubi me u dupe",
  nole: "poljubi me dole",
  spakovo: "u dupe ti se zakovo",
  spakovao: "u dupe ti se zakovao",
  zakovo: "u usta ti spakovo",
  zakovao: "u usta ti spakovao",
  solo: "jebem te u dupe golo",
  polo: "jebem te u dupe golo",
  yolo: "jebem te u dupe golo",
  krug: "primi kobas dug",
  valja: "rokijeva bulja kitu ti kalja",
  vala: "miluje te moja kita mala",
  paru: "skocis mi na karu",
  ormaru: "bulja ti na udaru",
  goku: "sednes mi na djoku",
  chodi: "moj te plodi",
  vodi: "moj te plodi",
  naucio: "moj ti kurac na ramenu cucio",
  zasto: "o mom si masto",
  dvojka: "poljubis mi stojka",
  dvojku: "sedis mi na stojku",
  trojka: "sednes mi na stojka",
  trojku: "skaces mi na stojku",
  sony: "moja te kita goni",
  soni: "moj te goni",
  roki: "u kitu me coki",
  vic: "moj ti kurac bio stric",
  slic: "moj ti tuki bio stric",
  blic: "moj ti kurac bio stric",
  glas: "apis me za kobas",
  pakao: "mog si zvakao",
  nolo: "poljubi me u dupe golo",
};

const getRhyme = (word) => {
  const lastChar = word[word.length - 1];
  if (lastChar === "?" || lastChar === "!") {
    return responses[word.slice(0, -1)];
  }
  return responses[word];
};

client.on('messageCreate', message => {
  // console.log(`${message.author.tag}: ${message.content}`);
  if (!message.author.bot) {
    const words = [
      'osam','maja', 'ulje', 'audi', 'ipo', 'molim', 'ladja', 'mastilo', 'city', 'jedi', 'gari', 'stari', 'baru',
      'hulu', 'druze', 'sala', 'staru', 'rupe', 'nole', 'spakovo', 'solo', 'polo', 'yolo', 'spakovao', 'zakovo', 'zakovao',
      'krug', 'valja', 'vala', 'paru', 'stara', 'ormaru', 'goku', 'chodi', 'vodi', 'naucio', 'zasto',
      'dvojka', 'dvojku', 'trojka', 'trojku', 'sony', 'soni', 'roki', 'vic', 'slic', 'blic', 'glas', 'pakao', 'nolo'
    ];
    for (const word of words) {
      const regex = new RegExp(`\\b${word}(\\b|[!?.,]?\\s*)[!?.,]?\\s*$`, "i");
      if (message.content.match(regex)) {
        message.reply(getRhyme(word));
        break;
      }
    }
  }
});

