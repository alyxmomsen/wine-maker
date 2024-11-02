import { Grape } from './Grape.class'

export class Wine {
    id: string
    title: string
    countryOrigin: string
    regionOrigin: string
    appellationOrigin: string
    grape: Grape
    grapes: Grape[]

    constructor(
        title: string,
        grape: Grape,
        grapes: Grape[],
        countryOrigin: string,
        regionOrigin: string,
        appellationOrigin: string
    ) {
        this.id = 'no ID'
        this.title = title
        this.countryOrigin = countryOrigin
        this.regionOrigin = regionOrigin
        this.appellationOrigin = appellationOrigin
        this.grape = grape
        this.grapes = grapes
    }
}
