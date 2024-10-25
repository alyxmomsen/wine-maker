import { Location } from './Location.class'

export interface IGrape {
    getGrapeName(): string
    getOrigin(): Location
    getAmount(): number
    rejectAmount(value:number): number;
}

export class Grape implements IGrape {
    protected grapeName: string
    protected origin: Location
    protected amount: number

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
    rejectAmount(value:number): number {
        const result = this.amount - value;
        if (result >= 0) {
            this.amount -= value;
            return value;
        }
        else {
            this.amount = 0;
            return value - this.amount;
        }
    }

    constructor(title: string, location: Location) {
        this.origin = location
        this.grapeName = title
        this.amount = 1000;
    }
}

export class GarganegaGrape extends Grape {
    constructor(location: Location) {
        super('Garganega', location)
    }
}

export class TrebbianoGrape extends Grape {
    constructor(location:Location) {
        super('Trebbiano' , location);
    }
}

export class ChardonnayGrape extends Grape {
    constructor(location:Location) {
        super('Chardonnay' , location);
    }
}

export class PinotBlancGrape extends Grape {
    constructor(location:Location) {
        super('Pinot blanc' , location);
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
