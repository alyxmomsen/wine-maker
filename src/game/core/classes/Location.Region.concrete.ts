import { RegionLocation } from './Location.class'
import {
    FranceCountry,
    ItaliaCountry,
    PortugalCountry,
} from './Location.Country.concrete'

export class Medok extends RegionLocation {
    private static instance: Medok | null = null
    static Instance(id:number): Medok {
        if (Medok.instance === null) {
            Medok.instance = new Medok(id)
        }

        return Medok.instance
    }

    private constructor(id:number) {
        super(id , FranceCountry.Instance(id), 'Medok')
    }
}

export class VenetoRegion extends RegionLocation {
    private static instance: VenetoRegion | null = null
    static Instance(id:number): VenetoRegion {
        if (VenetoRegion.instance === null) {
            VenetoRegion.instance = new VenetoRegion(id)
        }

        return VenetoRegion.instance
    }

    private constructor(id:number) {
        super(id , ItaliaCountry.Instance(id), 'Veneto')
    }
}

export class LoireValleyRegion extends RegionLocation {
    private static instance: LoireValleyRegion | null = null
    static Instance(id:number): LoireValleyRegion {
        if (LoireValleyRegion.instance === null) {
            LoireValleyRegion.instance = new LoireValleyRegion(id)
        }

        return LoireValleyRegion.instance
    }

    private constructor(id:number) {
        super(id , FranceCountry.Instance(id), 'Loire Valley')
    }
}

export class BurgundyRegion extends RegionLocation {
    static instance: BurgundyRegion | null = null
    static Instance(id:number): BurgundyRegion {
        if (BurgundyRegion.instance === null) {
            BurgundyRegion.instance = new BurgundyRegion(id)
        }
        return BurgundyRegion.instance
    }

    private constructor(id:number) {
        super(id , FranceCountry.Instance(id), 'Burgundy')
    }
}

export class MinhoRegion extends RegionLocation {
    static instance: MinhoRegion | null = null
    static Instance(id:number): MinhoRegion {
        if (MinhoRegion.instance === null) {
            MinhoRegion.instance = new MinhoRegion(id)
        }

        return MinhoRegion.instance
    }

    private constructor(id:number) {
        super(id , PortugalCountry.Instance(id), 'Minho')
    }
}
