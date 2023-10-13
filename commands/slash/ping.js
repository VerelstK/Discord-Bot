import { XernerxSlashCommand } from "xernerx";

export default class PingCommand extends XernerxSlashCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'ping',
            category: 'Info',
        })
    }

    async exec(interaction, {args}) {
        return await interaction.util.reply({content: `${this.client.ws.ping}ms.`})
    }
}