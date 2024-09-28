import { randomId } from '../utils/utils'
import { IAmount } from './Application.class'
import { Appellation, Country, LisenceMediator, Location, Region } from './Location.class'
import { AppellationProxy, CountryProxy, GrapeProxy, RegionProxy } from './Proxy.class'
import { Player } from './Player.class'

export interface IGrape {
    getName(): string
    createProxy(owner: Player): GrapeProxy
    getId(): string
    getOriginId(): string;
    checkCountry(country:Country): boolean;
    checkRegion(region:Region): boolean;
    checkAppellation(appellation:Appellation): boolean;
}

export class Grape implements IGrape, IAmount {
    static Ids: string[] = []
    private id: string
    private name: string
    private amount: number
    private countryBierer: CountryProxy | null;
    private regionBierer: RegionProxy | null;
    private appellationBierer: AppellationProxy | null;

    checkAppellation(appellation: Appellation): boolean {

        if (this.appellationBierer) {

            return this.appellationBierer?.checkAppellation(appellation);
        }

        return false;
    }

    checkCountry(country: Country): boolean {
        if (this.countryBierer) {
            return this.countryBierer.checkCountry(country);
        }

        return false;
    }

    checkRegion(region: Region): boolean {
        if (this.regionBierer) {
            return this.regionBierer.checkRegion(region);
        }
        return false;
    }

    getOriginId(): string {
        return ""
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
        countryBierer:CountryProxy|null,
        regionBierer:RegionProxy|null,
        appellationBierer:AppellationProxy|null,
    ) {
        this.name = name;
        this.amount = amount;
        this.id = randomId(50)
        Grape.Ids.push(this.id)
        this.countryBierer = countryBierer;
        this.regionBierer = regionBierer;
        this.appellationBierer = appellationBierer;
    }
}
