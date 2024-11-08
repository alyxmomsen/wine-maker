import { LogCreator } from '../../../utils/logger.class'
import { Location } from './Location.class'

export interface IProduct {
    
}

export interface IGrape extends IProduct {
    getGrapeName(): string
    getOrigin(): Location
    getAmount(): number
    rejectAmount(value: number): number
    getId(): number
}

export class Grape implements IGrape {
    private since: number
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

    constructor(id: number , title: string, location: Location) {
        /* create id */

        this.id = id;

        /* ========= */

        this.since = Date.now()

        this.origin = location
        this.grapeName = title
        this.amount = 1000
        // this.locationName = 'no location';
        this.originLocationId = ''

        const logCreator = new LogCreator()

        logCreator.addString(`created new Grape: `)
        logCreator.addString(`new Grape Id: ${this.id}`)
        logCreator.addString(
            `new Grape Location Id: ${location.getIdLikeString()}`
        )

        console.log(logCreator.getLogStr())
    }
}

export class ChardonnayGrape extends Grape {
    constructor(id:number ,location: Location) {
        super(id , 'Chardonnay', location)
    }
}

export class PinotBlancGrape extends Grape {
    constructor(id:number ,location: Location) {
        super(id , 'Pinot blanc', location)
    }
}

export class MuscadetGrape extends Grape {
    constructor(id:number , location: Location) {
        super(id , 'Muskadet', location)
    }
}

export class SovingnonBlanGrape extends Grape {
    constructor(id:number , location: Location) {
        super(id , 'Sovignon Blan', location)
    }
}

export class MelonDeBourgogneGrape extends Grape {
    constructor(id:number , location: Location) {
        super(id , 'Melon de Bourgogne', location)
    }
}
