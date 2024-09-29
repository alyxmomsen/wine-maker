import { Grape } from './Grape.class'
import { Alvarinho, Arinto, GarganegaGrape } from './Grape.spicific.class'
import { MuscadetAppelation } from './Location.Appellation.Specific.class'
import { Country, IAppelation, ILocaction, IRegion } from './Location.class'
import {
    FranceCountry,
    ItalyCountry,
    PortugalCountry,
} from './Location.Country.specific.class'
import {
    LoireValleyRegion,
    MinhoRegion,
    VenettoRegion,
} from './Location.specific.class'
import { Player } from './Player.class'

export interface IAmount {
    getAmount(): number
    setAmount(value: number): number
}

export interface IPrice {
    getPrice(): number
    setPrice(value: number): number
}

export class Application {
    private grapes: Grape[]
    private countries: ILocaction[]
    private regions: IRegion[]
    private appellations: IAppelation[]

    private player: Player
    private timing: Timing
    private variativity: Variativity

    update() {
        

        console.log(
            'player:',
            this.player,
            'grapes:',
            this.grapes,
            'countries:',
            this.countries,
            'regions:',
            this.regions,
            'appellations:',
            this.appellations
        )

        // if (this.timing.tick()) {

        // }
    }

    addRegion() {}

    addAppellation() {}

    getAppellations() {
        return this.appellations
    }

    getCountries() {
        return this.countries
    }

    getRegions() {
        return this.regions
    }

    getGrapes(): Grape[] {
        return this.grapes
    }

    getPlayer() {
        return this.player
    }

    constructor() {
        this.timing = new Timing(1000)
        this.variativity = new Variativity(100)
        this.variativity.setVariativity(50)

        this.player = Player.Instance()
        this.countries = [
            FranceCountry.Instance(),
            ItalyCountry.Instance(),
            PortugalCountry.Instance(),
        ]

        this.regions = []
        this.appellations = []
        this.grapes = []

        for (const country of this.countries) {
            if (country instanceof ItalyCountry) {
                this.regions.push(VenettoRegion.Instance(country))
            } else if (country instanceof FranceCountry) {
                this.regions.push(LoireValleyRegion.Instance(country))
            } else if (country instanceof PortugalCountry) {
                this.regions.push(MinhoRegion.Instance(country))
            }
        }

        for (const region of this.regions) {
            if (region instanceof VenettoRegion) {
                this.appellations.push(MuscadetAppelation.Instance(region))
            } else if (region instanceof LoireValleyRegion) {
            } else if (false) {
            }
        }

        //  adding Arinto & Alvarinho
        for (const country of this.countries) {
            if (country instanceof PortugalCountry) {
                const arintoGrape = new Arinto(100)
                const alvarinhoGrape = new Alvarinho(100)
                const arintoPortugalBearer =
                    country.makeCountryProxy(arintoGrape)
                const alvarinhoPortugalBearer =
                    country.makeCountryProxy(alvarinhoGrape)
                arintoGrape.setCountryProxy(arintoPortugalBearer)
                alvarinhoGrape.setCountryProxy(alvarinhoPortugalBearer)
                this.grapes.push(arintoGrape)
                this.grapes.push(alvarinhoGrape)
                break
            }
        }
    }
}

class Variativity {
    variativity: number

    setVariativity(value: number) {
        if (value > 100) {
            this.variativity = 100
        } else if (value < 0) {
            this.variativity = 0
        } else {
            this.variativity = value
        }
    }

    gen(variate: number | undefined = undefined) {
        const b = this.variativity

        if (variate !== undefined) {
            this.variativity = variate
        }
        const rowValue = Math.random() * 100
        const value = Math.floor(rowValue)
        console.log('row value: ' + rowValue + ' floored value: ' + value)
        if (value >= 0 && value <= this.variativity) {
            return true
        }

        this.variativity = b

        return false
    }

    constructor(variativity: number) {
        if (variativity > 100) {
            this.variativity = 100
        } else if (variativity < 0) {
            this.variativity = 0
        } else {
            this.variativity = variativity
        }
    }
}

class Timing {
    private last: number
    private interval: number

    tick() {
        const now = Date.now()
        if (now - this.last > this.interval) {
            this.last = now
            return true
        } else {
            return false
        }
    }

    constructor(interval: number) {
        this.last = 0
        this.interval = interval
    }
}
