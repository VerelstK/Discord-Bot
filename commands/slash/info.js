import { XernerxSlashCommand, EmbedBuilder } from "xernerx";

export default class InfoCommand extends XernerxSlashCommand {
    constructor() {
        super('info', {
            name: 'info',
            description: 'Get information about this bot',
            category: 'Info',
        })
    }

    async exec(interaction, {args}) {
        const embed = new EmbedBuilder()
            .setTitle('Info')
            .setDescription('Funky information from a funky bot')
            .setColor('#AF5219')
            .addFields([{
                name: 'Bot info',
                value: `Users: ${this.client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a =+ b)}\nUptime: ${this.client.util.uptime()}`
            }])
            .setImage('https://cdn.mos.cms.futurecdn.net/TEDKxionGxt4HdBNBjuBdL.jpg')

        interaction.util.reply({embeds:[embed]})
    }
}
