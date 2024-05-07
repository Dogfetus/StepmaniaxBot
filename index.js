import dotenv from 'dotenv';
dotenv.config();
import discord from 'discord.js';
const { Client, GatewayIntentBits, Partials } = discord;

import { commands, handleCommand } from './Commands/Commands.js';
import config from './config.js'


// make the client 
const client = new Client({
    // read messages (not needed)
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        // GatewayIntentBits.GuildChannels,
        GatewayIntentBits.MessageContent
    ],

    //idk
    partials: [
        Partials.Message,
        Partials.Channel
    ]
});


// when the client receives an interaction
client.on('interactionCreate', async (ir) => {
    if (!ir.isCommand()) return;

    try{

        // handle any incomming commmands
        await handleCommand(ir);
        
        try {
            await ir.reply({content: 'ait', ephemeral: true});
            await ir.deleteReply();
        }
        catch (err) {}
    }
    catch(err){
        console.log(err);
    }

});



// when the client receives a message
client.on("messageCreate", (m) => {
    if (m.author.bot) {
        return;
    }
});



// Event triggered when the bot joins a new guild
client.on('guildCreate', guild => {
    console.log(`Joined a new guild: ${guild.name} - ${guild.id}`);
    config.loadChannel(client);
});



// when the client is ready
client.on("ready", async () => {
    console.log(commands);
    console.log("Ready!");
    for (const c of commands) {
        const command = await client.application?.commands.create(c);
        console.log(`Registered slash command: ${command.name}`);
    }
    config.loadChannel(client);
});



// login
client.login(process.env.TOKEN);