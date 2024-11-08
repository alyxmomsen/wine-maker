export class LogCreator {
    cntStr: string

    getLogStr() {
        return this.cntStr
    }

    addString(str: string) {
        this.cntStr += `\n${str}`
    }

    constructor() {
        this.cntStr = ''
    }
}
