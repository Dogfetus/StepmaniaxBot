import dotenv from 'dotenv';
dotenv.config();
import discord from 'discord.js';
const { Client, GatewayIntentBits, Partials } = discord;

import { commands, handleCommand } from './Commands/Commands.js';
import register, {lastUpdate, loadNewGuildChannel, relogChannels, updateTime} from './config.js'
import { historyEmbed, scoreFeedEmbed } from './Commands/Embeds.js';
import scoreFeedElement from './Stepmania/Classes/ScoreFeedElement.js';
import { GetHistory } from './Stepmania/Stepmaniax.js';




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
    loadNewGuildChannel(guild);
});



// when the client is ready
client.on("ready", async () => {
    console.log(commands);
    console.log("Ready!");
    for (const c of commands) {
        const command = await client.application?.commands.create(c);
        console.log(`Registered slash command: ${command.name}`);
    }
    
    // load the correct channels
    relogChannels(client);

    // intervall timer that updates the feed every 30 sek
    setInterval(async () => {
        let historyJson = await GetHistory();
        let embeds = [];
        
        console.log("sending");

        // loops through the json data from stempaniax and creates an embed for each entry (stops at 10 entries)
        for (let index = 0; (index < historyJson.history.length) && (embeds.length < 10); index++) {
                let scorefeed = new scoreFeedElement();
                scorefeed.parseJsonToValues(historyJson, index); 

                if (lastUpdate && lastUpdate === scorefeed.created_at)
                    break;
                else 
                    embeds.push(scoreFeedEmbed(scorefeed));
        }



        // if the scorefeed has any new entries
        if (embeds.length > 0){

            // update the last recorded value to the last item in the score feed
            console.log(lastUpdate);
            updateTime(historyJson.history[0].created_at);


            // then we loop through each guild and send the new embeds
            register.forEach(async (guild) => {
                // if guild has disabled the bot            
                if (!guild.enabled) return;
                
                try {
                    console.log(`Sending message to channel ${guild.channel}`);
                    const channel = await client.channels.fetch(guild.channel);
                    await channel.send({embeds: embeds});



                } catch (error) {
                    console.error(`Failed to send message to channel ${guild.channel}: ${error}`);
                }
            });
        }



    }, 3000);  // Time interval in milliseconds (e.g., 30000 ms = 30 sek)
});



// login
client.login(process.env.TOKEN);