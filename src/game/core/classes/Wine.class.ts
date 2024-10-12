import { GarganegaGrape } from './Grape.class'
import {
    FranceCountry,
    ItaliaCountry as ItaliaCountry,
} from './Location.Country.concrete'
import { VenetoRegion as VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'

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
