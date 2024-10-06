import { Appellation, Country, Location, Region } from './Location.class'
import { PortugalCountry } from './Location.Country.concrete'
import { VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'

export interface IGrape {
    getGrapeName(): string
    getLocation(): Location
    getAmount(): number
}

export class Grape implements IGrape {
    protected grapeName: string
    protected location: Location
    protected amount: number

    getAmount(): number {
        return this.amount
    }

    getGrapeName() {
        return this.grapeName
    }

    getLocation() {
        return this.location
    }

    constructor(title: string, location: Location) {
        this.location = location
        this.grapeName = title
        this.amount = 100
    }
}

export class GarganegaGrape extends Grape {
    constructor(location: Location) {
        super('Garganega', location)
    }
}

export class Muscadet extends Grape {
    constructor(location: Location) {
        super('Muskadet', location)
    }
}

export class SovingnonBlanGrape extends Grape {
    constructor(location: Location) {
        super('Sovignon Blan', location)
    }
}

export class MelonDeBourgogne extends Grape {
    constructor(location: Location) {
        super('Melon de Bourgogne', location)
    }
}
