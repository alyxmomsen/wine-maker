export class Updating {
    interval: number
    lastUpdate: number

    try() {
        const now = Date.now()
        if (now - this.lastUpdate > this.interval) {
            this.lastUpdate = now
            return true
        }
        return false
    }

    constructor(interval: number) {
        this.interval = interval
        this.lastUpdate = 0
    }
}
