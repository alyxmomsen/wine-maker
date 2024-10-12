export interface ILocation {
    getTitle(): string
}

export abstract class Location implements ILocation {
    protected title: string

    getTitle() {
        return this.title
    }

    constructor(title: string) {
        this.title = title
    }
}

export interface ICountry extends ILocation {
    getCountry(): Country
    getCountryName(): string
    getAppellations(): Appellation[]
    addAppellations(appellations: Appellation[]): Appellation[]
    getRegions(): Region[]
    addRegions(regions: Region[]): Region[]
}

export class Country extends Location implements ICountry {
    reginons: Region[]
    appellations: Appellation[]

    getAppellations(): Appellation[] {
        return []
    }

    addAppellations(appellations: Appellation[]): Appellation[] {
        return []
    }

    getRegions(): Region[] {
        return []
    }

    addRegions(regions: Region[]): Region[] {
        return []
    }

    getCountryName(): string {
        return this.getTitle()
    }

    getCountry(): Country {
        return this
    }

    getRegion(): Region | null {
        return null
    }

    getAppellation(): Appellation | null {
        return null
    }

    constructor(title: string) {
        super(title)
        this.reginons = []
        this.appellations = []
    }
}

export interface IRegion extends ILocation {
    getRegionName(): string
    getRegion(): Region
}

export class Region extends Location implements IRegion {
    getRegion(): Region {
        return this
    }

    protected country: Country
    protected appellations: Appellation[]

    getAppellations(): Appellation[] {
        return this.appellations
    }

    addAppellation(appellations: Appellation[]): Appellation[] {
        return []
    }

    getRegionName(): string {
        return this.title
    }

    getCountryName(): string {
        return this.country ? this.country.getCountryName() : ''
    }

    getCountry(): Country {
        return this.country
    }

    constructor(country: Country, title: string) {
        super(title)
        this.country = country
        this.appellations = []
    }
}

interface IAppellation extends ILocation {
    getAppellationName(): string
    getRegion(): Region | null
}

export class Appellation extends Location implements IAppellation {
    protected region: Region | null
    protected country: Country

    getCountryName(): string {
        return this.country.getCountryName()
    }

    getAppellationName(): string {
        return this.getTitle()
    }

    getRegionName(): string {
        return this.region ? this.region.getTitle() : ''
    }

    getCountry(): Country {
        return this.country
    }

    getRegion(): Region | null {
        return this.region
    }

    getAppellation(): Appellation | null {
        return this
    }

    constructor(region: Region | null, country: Country, title: string) {
        super(title)
        this.region = region
        this.country = country
    }
}
