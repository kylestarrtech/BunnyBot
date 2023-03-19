const { SlashCommandBuilder } = require('discord.js');

const fs = require('node:fs');
const path = require('node:path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bunny')
    .setDescription('Responds with a random image of a bunny!'),
  async execute(interaction) {
    const bunnyFiles = fs.readDirSync('../Bunnies');

    let randomIndex = Math.floor()
  }
};