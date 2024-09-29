import { Grape } from './Grape.class'
import { ILocaction, Location } from './Location.class'
import { Player } from './Player.class'
import { AppellationProxy, CountryProxy, RegionProxy } from './Proxy.class'

export class GarganegaGrape extends Grape {
    constructor(
        amount: number,
        countryProxy: CountryProxy | null = null,
        regionProxy: RegionProxy | null = null,
        appellationProxy: AppellationProxy | null = null
    ) {
        super('Garganega', amount, countryProxy, regionProxy, appellationProxy)
    }
}

export class Arinto extends Grape {
    constructor(
        amount: number,
        countryProxy: CountryProxy | null = null,
        regionProxy: RegionProxy | null = null,
        appellationProxy: AppellationProxy | null = null
    ) {
        super('Arinto', amount, countryProxy, regionProxy, appellationProxy)
    }
}

export class Alvarinho extends Grape {
    constructor(
        amount: number,
        countryProxy: CountryProxy | null = null,
        regionProxy: RegionProxy | null = null,
        appellationProxy: AppellationProxy | null = null
    ) {
        super('Alvarinho', amount, countryProxy, regionProxy, appellationProxy)
    }
}
