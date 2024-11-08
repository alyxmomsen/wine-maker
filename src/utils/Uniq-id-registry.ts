export class UniqIdRegisty {
    private ids: number[]

    gen() {
        if (this.ids.length) {
            let newId = this.ids[this.ids.length - 1] + 1
            if (this.ids.includes(newId)) {
                newId = this.gen()
                return newId
            } else {
                this.ids.push(newId)
                return newId
            }
        }
        this.ids.push(1)
        return 1
    }

    private newId(): number {
        return 0
    }

    constructor() {
        this.ids = []
    }
}
