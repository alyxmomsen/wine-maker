export class LogCreator {
    cntStr: string

    getString() {
        return this.cntStr
    }

    addString(str: string) {
        this.cntStr += `\n${str}`
    }

    constructor() {
        this.cntStr = ''
    }
}
