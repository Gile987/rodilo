const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dad')
    .setDescription('Dad jokes!'),
  async execute(interaction = new ChatInputCommandInteraction()) {
    const jokes = [
      'I used to think the brain was the most important organ. Then I thought, look what’s telling me that.',
      'I’m reading a book about anti-gravity. It’s impossible to put down.',
      'Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!',
      'Did you hear about the guy whose whole left side was cut off? He’s all right now.',
      'Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels!',
      'Why did the scarecrow win an award? Because he was outstanding in his field.',
      'Why don’t skeletons ever go trick or treating? Because they have no body to go with.',
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await interaction.reply(joke);
  },
}
