import { Grape } from './Grape.class'
import { AppellationProxy, CountryProxy, IAppellationProxy, ICountryProxy, IRegionProxy, RegionProxy } from './Proxy.class'
import { Player } from './Player.class'
import { randomId } from '../utils/utils'

export interface ILocaction {
    getName(): string
    getCountry(): Country | null
    getAppelation(): Appellation | null
    getRegion(): Region | null
    makeLicense(owner: Player | null, subj: Grape): LisenceMediator
    checkLisense(lisence: LisenceMediator, owner: Player): boolean
    getId(): string;
}

export interface ICountry extends ILocaction {
    makeCountryProxy(bearer:Grape): ICountryProxy|null;
}

export interface IRegion extends ICountry {
    makeRegionProxy(bearer: Grape): IRegionProxy | null;
}

export interface IAppelation extends IRegion {
    makeAppellationProxy(bearer:Grape): AppellationProxy | null;
}

export abstract class LisenceMediator {
    abstract checkIfOwner(owner: Player): boolean
    abstract checkIfEmmiter(emmiter: Location): boolean
    abstract setOwner(owner: Player): boolean

    constructor() {}
}

export class LocationPlayerGrapeLisenceMediator extends LisenceMediator {
    private location: Location
    private owner: Player | null
    private subject: Grape

    checkIfOwner(owner: Player): boolean {
        return this.owner === owner
    }

    checkIfEmmiter(emmiter: Location): boolean {
        return emmiter === this.location
    }

    setOwner(owner: Player): boolean {
        this.owner = owner
        return true
    }

    constructor(location: Location, owner: Player | null, subj: Grape) {
        super()
        this.location = location
        this.owner = owner
        this.subject = subj
    }
}

export abstract class Location implements ILocaction {
    protected lisences: LisenceMediator[]
    protected name: string
    protected Id: string;

    getId(): string {
        return this.Id;
    }

    getName(): string {
        return this.name
    }

    makeLicense(owner: Player | null, subj: Grape): LisenceMediator {
        return new LocationPlayerGrapeLisenceMediator(this, owner, subj)
    }

    checkLisense(lisence: LisenceMediator, owner: Player): boolean {
        return lisence.checkIfOwner(owner)
    }

    abstract getAppelation(): Appellation | null
    abstract getRegion(): Region | null
    abstract getCountry(): Country | null
    constructor(name: string) {
        this.name = name
        this.lisences = []
        this.Id = randomId(50);
    }
}

export class Country extends Location implements ICountry {

    makeCountryProxy(bearer:Grape): CountryProxy {
        return new CountryProxy(this , bearer);
    }

    getAppelation(): Appellation | null {
        return null
    }

    getRegion(): Region | null {
        return null
    }
    getCountry(): Country | null {
        return this
    }
    getName(): string {
        return this.name
    }
    constructor(name: string) {
        super(name)
    }
}

export class Region extends Location implements IRegion {

    makeRegionProxy(bearer: Grape): IRegionProxy | null {
        return new RegionProxy(this ,bearer);
    }

    makeCountryProxy(bearer: Grape): ICountryProxy|null {
        return null;
    }

    protected country: Country
    getAppelation(): Appellation | null {
        return null
    }

    getRegion(): Region | null {
        return this
    }

    getCountry(): Country | null {
        return this.country.getCountry()
    }

    getName(): string {
        return this.name
    }

    constructor(country: Country, name: string) {
        super(name)
        this.country = country
    }
}

export abstract class Appellation extends Location implements IAppelation {
    region: Region;

    makeAppellationProxy(bearer: Grape): AppellationProxy | null {
        return null;
    }

    makeRegionProxy(bearer: Grape): IRegionProxy | null {
        return null;
    }

    makeCountryProxy(bearer: Grape): ICountryProxy | null {
        return null;
    }

    getAppelation(): Appellation | null {
        return this
    }

    getRegion(): Region | null {
        return this.region.getRegion()
    }
    getCountry(): Country | null {
        const region: Region | null = this.region.getRegion()
        return region ? region.getCountry() : region
    }

    constructor(region: Region, name: string) {
        super(name)
        this.region = region
    }
}
