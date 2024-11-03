import { Grape, IGrape } from './Grape.class'

export class Wine {
    private id: string
    private title: string
    private countryOrigin: string
    private regionOrigin: string
    private appellationOrigin: string
    private since: number
    // grape: Grape
    private grapes: IGrape[]

    getName(): string {
        return this.title
    }

    getTitle(): string {
        return this.title
    }

    getSince(): number {
        return this.since
    }

    constructor(
        title: string,
        // grape: Grape,
        grapes: IGrape[],
        countryOrigin: string,
        regionOrigin: string,
        appellationOrigin: string
    ) {
        this.id = 'no ID'
        this.title = title
        this.countryOrigin = countryOrigin
        this.regionOrigin = regionOrigin
        this.appellationOrigin = appellationOrigin
        // this.grape = grape
        this.grapes = grapes
        this.since = Date.now()
    }
}
