import { Grape } from "./Grape.class"

export class Wine {
    title: string
    countryOrigin: string
    regionOrigin: string
    appellationOrigin: string
    grape: string
    grapes: Grape[];

    constructor(
        title: string,
        grape: string,
        countryOrigin: string,
        regionOrigin: string,
        appellationOrigin: string
    ) {
        this.title = title
        this.countryOrigin = countryOrigin
        this.regionOrigin = regionOrigin
        this.appellationOrigin = appellationOrigin
        this.grape = grape
        this.grapes = [
            
        ];
    }
}
