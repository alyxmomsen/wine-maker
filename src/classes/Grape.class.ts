
import { Appellation, Country, ILocation, Location, Region } from "./Location.class"
import { Portugal } from "./Location.Country.concrete"
import { Medok } from "./Location.Region.concrete"

export interface IGrape {
    getGrapeName(): string
}

export class Grape implements ILocation {

    protected grapeName: string
    protected location: Location

    getGrapeName() {
        return this.grapeName;
    }

    getAppellation(): Appellation | null {
        return this.location.getAppellation()
    }

    getRegion (): Region | null {
        return this.location.getRegion()
    }

    getCountry (): Country {
        return this.location.getCountry()
    }

    constructor (title: string, location: Location) {
        this.location = location
        this.grapeName = title
    }
}

export class GarganegaGrape extends Grape {
    constructor () {
        super ('Garganega', Medok.Instance())
    }
}

export class SovingnonBlanGrape extends Grape {
    constructor () {
        super ('Sovignon Blan', Portugal.Instance())
    }
}

