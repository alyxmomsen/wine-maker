import { Location } from './Location.class'

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

export class MuscadetGrape extends Grape {
    constructor(location: Location) {
        super('Muskadet', location)
    }
}

export class SovingnonBlanGrape extends Grape {
    constructor(location: Location) {
        super('Sovignon Blan', location)
    }
}

export class MelonDeBourgogneGrape extends Grape {
    constructor(location: Location) {
        super('Melon de Bourgogne', location)
    }
}
