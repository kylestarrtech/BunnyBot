const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const { taglines } = require('../taglines.json');

const fs = require('node:fs');
const path = require('node:path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bunny')
    .setDescription('Responds with a random image of a bunny!'),
  async execute(interaction) {
    const bunnyFiles = fs.readdirSync('Bunnies');

    let randomIndex = Math.floor(Math.random() * bunnyFiles.length);
    let randomBunny = bunnyFiles[randomIndex];
    let bunnyPath = path.join(__dirname, '..', 'Bunnies', randomBunny);

    // console.log(`Bunny file: ${randomBunny}`);
    // console.log(`Bunny index: ${randomIndex}`);
    // console.log(`Bunny path: ${bunnyPath}`);

    const attachment = new AttachmentBuilder(bunnyPath);

    const embed = new EmbedBuilder()
        .setTitle(taglines[Math.floor(Math.random() * taglines.length)])
        .setColor('#0099ff')
        .setImage(`attachment://${randomBunny}`);
        
    await interaction.reply({ embeds: [embed], files: [attachment] });
  }
};