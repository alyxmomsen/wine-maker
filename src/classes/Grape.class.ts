import { Appellation, Country, Location, Region } from './Location.class'
import { PortugalCountry } from './Location.Country.concrete'
import { VenetoRegion } from './Location.Region.concrete'

export interface IGrape {
    getGrapeName(): string
    getLocation(): Location
}

export class Grape implements IGrape {
    protected grapeName: string
    protected location: Location

    getGrapeName() {
        return this.grapeName
    }

    getLocation() {
        return this.location
    }

    constructor(title: string, location: Location) {
        this.location = location
        this.grapeName = title
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

// Melon de Bourgogne

// export class MelonDeBourgogne extends Grape {

//     constructor() {
//         super("Melon de Bourgogne" , France.);
//     }
// }
