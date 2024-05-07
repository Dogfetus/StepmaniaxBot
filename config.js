class Config {
    constructor() {
        this.channels = new Map();
        this.regions = new Map();
        this.lastUpdate = "";
    }

    // load the correct channel whenever joining a new guild
    loadChannel(client) {
        client.guilds.cache.forEach(guild => {
            guild.channels.cache.some(channel => {
                if (channel.type === 0) {
                    this.channels.set(guild.id, channel.id);
                    return true;
                }
                return false;
            });
        });
    }

    // get the channels
    getChannels() {
        return this.channels;
    }
}


// create an instance and export it
let config = new Config();
export default config;
