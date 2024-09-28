import { Grape } from './Grape.class'
import { Appellation, Country, Region } from './Location.class';
import { Player } from './Player.class'

// I do not know what to choose

export interface IGrapeProxy {
    getGrapeName(): string
    getGrapeId(): string
    checkOwner(player:Player):boolean
}

export interface ICountryProxy  {
    getCountryName(): string;
    getCountryId(): string;
    checkCountry(country:Country): boolean;
}

export interface IRegionProxy {
    getRegionName(): string;
    getRegionId(): string;
    checkRegion(region:Region): boolean;
}

export interface IAppellationProxy {
    getAppellationName(): string;
    getAppellationId(): string;
    checkAppellation(appellation:Appellation): boolean;
}

export class GrapeProxy implements IGrapeProxy {
    private grape: Grape
    private bierer: Player

    getGrapeName() {
        return this.grape.getName()
    }

    getGrapeId(): string {
        let id = this.grape.getId()

        return id
    }

    checkOwner(player:Player):boolean {
        if (this.bierer === player) {
            return true;
        }
        return false;
    }

    constructor(user: Player, grape: Grape) {
        this.grape = grape
        this.bierer = user
    }
}

export class CountryProxy implements ICountryProxy {
    private country: Country;
    private bierer: Grape;  

    getCountryId(): string {
        return "";
    }

    getCountryName(): string {
        return this.country.getName();
    }

    checkCountry(country: Country): boolean {

        return this.country===country;
    }

    constructor(country:Country, bierer:Grape) {
        this.country = country ;
        this.bierer = bierer ;
    }
}

export class RegionProxy implements IRegionProxy {
    private region: Region;
    private bierer: Grape;  

    getRegionId(): string {
        return "";
    }

    getRegionName(): string {
        return this.region.getName();
    }

    checkRegion(region: Region): boolean {
        return this.region === region;
    }

    constructor(region:Region, bierer:Grape) {
        this.region = region ;
        this.bierer = bierer ;
    }
}

export class AppellationProxy implements IAppellationProxy {
    private appellation: Appellation;
    private bierer: Grape;  

    checkAppellation(appellation: Appellation): boolean {
        return appellation === this.appellation;
    }

    getAppellationId(): string {
        return "";
    }

    getAppellationName(): string {
        return this.appellation.getName();
    }

    constructor(appellation:Appellation, bierer:Grape) {
        this.appellation = appellation ;
        this.bierer = bierer ;
    }
}