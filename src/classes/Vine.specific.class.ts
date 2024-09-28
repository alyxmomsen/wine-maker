import { Grape } from './Grape.class'
import { GarganegaGrape } from './Grape.spicific.class'
import { MinhoRegion, VenettoRegion } from './Location.specific.class'
import { GrapeProxy, RegionProxy } from './Proxy.class'
import { Vine } from './Vine.class'

export interface IGrapeSingletone {}

export class Soave extends Vine implements IGrapeSingletone {

    static Instance(
        grape:Grape,
        region:RegionProxy,
    ) {
        
        if (true) {
            return new Soave()
        } else {
            return null;
        }
    }

    private constructor() {
        
        super('Soave')
    }
}

export class Muscadet extends Vine implements IGrapeSingletone {
    static Instance(
        venetto: VenettoRegion | null,
        garganega: GarganegaGrape | null
    ) {
        if (venetto && garganega) {
            return new Muscadet()
        } else {
            return null
        }
    }

    private constructor() {
        super('Soave')
    }
}

export class VinhoVerdeVine extends Vine implements IGrapeSingletone {
    static Instance(venetto: VenettoRegion | null, grape: Grape | null) {
        if (MinhoRegion && grape) {
            return new VinhoVerdeVine()
        } else {
            return null
        }
    }

    private constructor() {
        super('Vinho Verde')
    }
}
