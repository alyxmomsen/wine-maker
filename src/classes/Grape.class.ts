import { randomId } from '../utils/utils'
import { IAmount } from './Application.class'
import {
    Appellation,
    Country,
    Region,
} from './Location.class'
import {
    AppellationProxy,
    CountryProxy,
    GrapeProxy,
    RegionProxy,
} from './Proxy.class'
import { Player } from './Player.class'

export interface IGrape {
    getName(): string
    createProxy(owner: Player): GrapeProxy
    getId(): string
    getOriginId(): string
    checkCountry(country: Country): boolean
    checkRegion(region: Region): boolean
    checkAppellation(appellation: Appellation): boolean
    setCountryProxy(proxy: CountryProxy): boolean
    setRegionProxy(proxy: RegionProxy): boolean
    setAppellationProxy(proxy: AppellationProxy): boolean
}

export class Grape implements IGrape, IAmount {
    static Ids: string[] = []
    private id: string
    private name: string
    private amount: number
    private countryBearer: CountryProxy | null
    private regionBearer: RegionProxy | null
    private appellationBearer: AppellationProxy | null

    setAppellationProxy(proxy: AppellationProxy): boolean {
        this.appellationBearer = proxy
        return true
    }

    setCountryProxy(proxy: CountryProxy): boolean {
        this.countryBearer = proxy
        return true
    }

    setRegionProxy(proxy: RegionProxy): boolean {
        this.regionBearer = proxy
        return true
    }

    checkAppellation(appellation: Appellation): boolean {
        if (this.appellationBearer) {
            return this.appellationBearer?.checkAppellation(appellation)
        }

        return false
    }

    checkCountry(country: Country): boolean {
        if (this.countryBearer) {
            return this.countryBearer.checkCountry(country)
        }

        return false
    }

    checkRegion(region: Region): boolean {
        if (this.regionBearer) {
            return this.regionBearer.checkRegion(region)
        }
        return false
    }

    getOriginId(): string {
        return ''
    }

    setAmount(value: number): number {
        this.amount = value
        return this.amount
    }

    getAmount(): number {
        return this.amount
    }

    getName(): string {
        return this.name
    }

    createProxy(owner: Player): GrapeProxy {
        return new GrapeProxy(owner, this)
    }

    getId(): string {
        return this.id
    }

    constructor(
        name: string,
        amount: number,
        countryBearer: CountryProxy | null,
        regionBearer: RegionProxy | null,
        appellationBearer: AppellationProxy | null
    ) {
        this.name = name
        this.amount = amount
        this.id = randomId(50)
        Grape.Ids.push(this.id)
        this.countryBearer = countryBearer
        this.regionBearer = regionBearer
        this.appellationBearer = appellationBearer
    }
}
