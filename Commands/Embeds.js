import discord, { EmbedBuilder } from 'discord.js';
const { MessageEmbed } = discord;
import dotenv from 'dotenv';
dotenv.config();


// this is just an exampel embed from https://discordjs.guide/popular-topics/embeds.html#embed-preview
export const historyEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });






export const scoreFeedEmbed = (scorefeed) => {
    if (!scorefeed) return null;

    let embedColor    = 'ffffff';
    const createdTime = new Date(scorefeed.created_at).toString().split(' ');

    switch (scorefeed.difficulty) {
        case 'Beginner':
            embedColor = '#00ff00';
            break;
        case 'Easy':
            embedColor = '#00ffff';
            break;
        case 'hard':
            embedColor = '#ff0000';
            break;
        case 'wild':
            embedColor = '#ff00ff';
            break;
        case 'dual':
            embedColor = '#ffff00';
            break;
        case 'full':
            embedColor = '#0000ff';
            break;
    }

    return new EmbedBuilder()
        .setTitle(scorefeed.song?.title)
        .setDescription(scorefeed.song?.artist + ' (' + scorefeed.song?.bpm + ' BPM)')
        .setColor(embedColor)
        .setAuthor({name: scorefeed.user.username, iconURL: process.env.EP_BASE + scorefeed.user.picture,  url: process.env.EP_SCORE_BASE + scorefeed.id})
        .addFields({ name: 'Score', value: scorefeed.score?.toString()},
                   { name: '\u200B', value: '\u200B' })
        .addFields({ name: 'Difficulty', value: scorefeed.difficulty,  inline: true },
                    { name: 'Level', value: scorefeed.song.difficulty?.toString(), inline: true },
                    { name: 'SmxMachine', value: scorefeed.smx_system_id?.toString(), inline: true })
        .setImage(process.env.EP_BASE + scorefeed.song?.cover_thumb)
        .setThumbnail(process.env.EP_BASE + scorefeed.user?.picture)
        .setFooter({text: createdTime[1] + " " + createdTime[2] + " " + createdTime[4], iconURL: process.env.EP_BASE + scorefeed.song?.cover_thumb});
        // .setTimestamp();
        // .addFields({ name: 'Perfect!!', value: scorefeed.perfect.toString(),  inline: true },
        //             { name: 'Perfect', value: scorefeed.semiperfect.toString(), inline: true },
        //             { name: 'Late', value: scorefeed.late.toString(), inline: true },
        //             { name: 'Early', value: scorefeed.early.toString(), inline: true },
        //             { name: 'Miss', value: scorefeed.misses.toString(), inline: true })
}