const { AkairoClient, CommandHandler } = require("discord-akairo");
const { token, prefix, owners: ownerID } = require('./config.json').core
const { join } = require('path');

module.exports = class Client extends AkairoClient {
    constructor() {
        super({
            ownerID
        },
            {
                disableMentions: "everyone"
            });
    };

    commandHandler = new CommandHandler(this, {
        directory: join("src", "commands"),
        prefix,
        commandUtil: true, // Optional
        handleEdits: true // Optional, handles edited commands. Requires commandUtil to work.
    });

    start() {
        return this.login(token)
    };
};