
export class Wine {
    title: string
    countryOrigin: string
    regionOrigin: string
    appellationOrigin: string
    grape: string

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
    }
}
