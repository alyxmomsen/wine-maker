import { Region } from './Location.class'
import {
    FranceCountry,
    ItaliaCountry,
    PortugalCountry,
} from './Location.Country.concrete'

export class Medok extends Region {
    private static instance: Medok | null = null
    static Instance(): Medok {
        if (Medok.instance === null) {
            Medok.instance = new Medok()
        }

        return Medok.instance
    }

    private constructor() {
        super(PortugalCountry.Instance(), 'Medok')
    }
}

export class VenetoRegion extends Region {
    private static instance: VenetoRegion | null = null
    static Instance(): VenetoRegion {
        if (VenetoRegion.instance === null) {
            VenetoRegion.instance = new VenetoRegion()
        }

        return VenetoRegion.instance
    }

    private constructor() {
        super(ItaliaCountry.Instance(), 'Veneto')
    }
}

export class LoireValleyRegion extends Region {
    private static instance: LoireValleyRegion | null = null
    static Instance(): LoireValleyRegion {
        if (LoireValleyRegion.instance === null) {
            LoireValleyRegion.instance = new LoireValleyRegion()
        }

        return LoireValleyRegion.instance
    }

    private constructor() {
        super(FranceCountry.Instance(), 'Loire Valley')
    }
}

export class MinhoRegion extends Region {
    static instance: MinhoRegion | null = null
    static Instance(): MinhoRegion {
        if (MinhoRegion.instance === null) {
            MinhoRegion.instance = new MinhoRegion()
        }
        return MinhoRegion.instance
    }

    private constructor() {
        super(PortugalCountry.Instance(), 'Minho')
    }
}
