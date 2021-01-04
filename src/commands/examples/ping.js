const { Command } = require('discord-akairo');

module.exports = class PingCommand extends Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "examples"
        });
    };

    exec = async (message) => {
        return message.util.send(`Pong.`)
    };
};