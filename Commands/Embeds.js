import discord, { EmbedBuilder } from 'discord.js';
const { MessageEmbed } = discord;

export const historyEmbed = new EmbedBuilder()
    .setTitle('History')
    .setDescription('Here is the history of the task')
    .setColor('#ffffff')
    .setAuthor({name: 'test', url: 'https://discord.js.org'})
    .addFields({ name: 'field', value: "value", inline: true })
    .addFields({ name: 'field', value: "value", inline: true })
    .addFields({ name: 'field', value: "value", inline: true })