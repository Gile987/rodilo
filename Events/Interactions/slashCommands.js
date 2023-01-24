const { ChatInputCommandInteraction } = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  /**
   * 
   * @param {ChatInputCommandInteraction} interaction 
   */
  execute(interaction, client) {
    if(!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if(!command) return interaction.reply({
      content: "Command not found",
      ephemeral: true
    });

    if(command.developer && interaction.user.id!=="219201628782329867")
    return interaction.reply({
      content: "This command is only for the developer",
      ephemeral: true
    });

    command.execute(interaction, client);
  }
}