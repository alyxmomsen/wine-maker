import { LogCreator } from '../../../utils/logger.class'
import { Location } from './Location.class'

export interface IGrape {
    getGrapeName(): string
    getOrigin(): Location
    getAmount(): number
    rejectAmount(value: number): number
    getId(): number
}

export class Grape implements IGrape {
    private static iDs: number[] = []

    // protected originId: string;
    protected originLocationId: string
    protected id: number
    protected grapeName: string
    protected origin: Location
    protected amount: number

    getId(): number {
        return this.id
    }

    getAmount(): number {
        return this.amount
    }

    getGrapeName() {
        return this.grapeName
    }

    getOrigin() {
        return this.origin
    }

    /**
     *
     * @param value
     * @returns value that is >= this.amount
     */
    rejectAmount(value: number): number {
        const result = this.amount - value
        if (result >= 0) {
            this.amount -= value
            return value
        } else {
            this.amount = 0
            return value - this.amount
        }
    }

    constructor(title: string, location: Location) {
        /* create id */

        const allIDsLen = Grape.iDs.length
        const newId: number = allIDsLen ? Grape.iDs[allIDsLen - 1] : 0
        this.id = newId
        Grape.iDs.push(newId)

        /* ========= */

        this.origin = location
        this.grapeName = title
        this.amount = 1000
        // this.locationName = 'no location';
        this.originLocationId = ''

        const logCreator = new LogCreator()

        logCreator.addString(`created new Grape: `)
        logCreator.addString(`new Grape Id: ${newId}`)
        logCreator.addString(
            `new Grape Location Id: ${location.getIdLikeString()}`
        )

        console.log(logCreator.getString())
    }
}

export class ChardonnayGrape extends Grape {
    constructor(location: Location) {
        super('Chardonnay', location)
    }
}

export class PinotBlancGrape extends Grape {
    constructor(location: Location) {
        super('Pinot blanc', location)
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
