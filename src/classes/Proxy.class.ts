import { Grape } from './Grape.class'
import { Appellation, Country, Region } from './Location.class'
import { Player } from './Player.class'

// I do not know what to choose

export interface IGrapeProxy {
    getGrapeName(): string
    getGrapeId(): string
    checkOwner(player: Player): boolean
}

export interface ICountryProxy {
    getCountryName(): string
    getCountryId(): string
    checkCountry(country: Country): boolean
}

export interface IRegionProxy {
    getRegionName(): string
    getRegionId(): string
    checkRegion(region: Region): boolean
}

export interface IAppellationProxy {
    getAppellationName(): string
    getAppellationId(): string
    checkAppellation(appellation: Appellation): boolean
}

export class GrapeProxy implements IGrapeProxy {
    private grape: Grape
    private bearer: Player

    getGrapeName() {
        return this.grape.getName()
    }

    getGrapeId(): string {
        let id = this.grape.getId()

        return id
    }

    checkOwner(player: Player): boolean {
        if (this.bearer === player) {
            return true
        }
        return false
    }

    constructor(user: Player, grape: Grape) {
        this.grape = grape
        this.bearer = user
    }
}

export class CountryProxy implements ICountryProxy {
    private country: Country
    private bearer: Grape

    getCountryId(): string {
        return this.country.getId()
    }

    getCountryName(): string {
        return this.country.getName()
    }

    checkCountry(country: Country): boolean {
        return this.country === country
    }

    constructor(country: Country, bearer: Grape) {
        this.country = country
        this.bearer = bearer
    }
}

export class RegionProxy implements IRegionProxy {
    private region: Region
    private bearer: Grape

    getRegionId(): string {
        return this.region.getId()
    }

    getRegionName(): string {
        return this.region.getName()
    }

    checkRegion(region: Region): boolean {
        return this.region === region
    }

    constructor(region: Region, bearer: Grape) {
        this.region = region
        this.bearer = bearer
    }
}

export class AppellationProxy implements IAppellationProxy {
    private appellation: Appellation
    private bearer: Grape

    checkAppellation(appellation: Appellation): boolean {
        return appellation === this.appellation
    }

    getAppellationId(): string {
        return this.appellation.getId()
    }

    getAppellationName(): string {
        return this.appellation.getName()
    }

    constructor(appellation: Appellation, bearer: Grape) {
        this.appellation = appellation
        this.bearer = bearer
    }
}
