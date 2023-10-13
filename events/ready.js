import { XernerxEvent, ActivityType } from "xernerx";

export default class ReadyEvent extends XernerxEvent {
    constructor() {
        super('ready', {
            name: 'ready',
            emitter: 'client',
        })
    }

    run(client) {
        this.client.util.setPresence({
            text: 'grooves in a major pentatonic scale',
            type: ActivityType.Playing,
            status: 'idle',
            interval: 300000
        })
    }
} 