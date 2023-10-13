import XernerxClient, {XernerxIntents} from 'xernerx';
import XernerxCommands from 'xernerx-commands';

import config from './config/config.js'

new class Client extends XernerxClient {
    constructor() {
        super({
            intents: XernerxIntents.All
        }, {
            local:'784094726432489522',
            ownerId: ['621699885321682977', '482513687417061376'],
            global: false,
            log: true
        })

        this.modules.commandHandler.loadMessageCommands({
            directory: './commands/message',
            prefix: ['ray'],
            allowMention: true,
            handleEdits:true,
            handleDeletes:true,
            handleTyping:true
        })

        this.modules.commandHandler.loadSlashCommands({
            directory: './commands/slash'
        })

        this.modules.eventHandler.loadEvents({
            directory: './events'
        })

        this.modules.extensionHandler.loadExtensions(new XernerxCommands(this, {}))

        this.connect(config.token)
    }
}



