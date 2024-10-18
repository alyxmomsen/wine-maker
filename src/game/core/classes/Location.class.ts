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
    getRegions(): RegionLocation[]
    addRegions(regions: RegionLocation[]): RegionLocation[]
}

export class Country extends Location implements ICountry {
    reginons: RegionLocation[]
    appellations: Appellation[]

    getAppellations(): Appellation[] {
        return []
    }

    addAppellations(appellations: Appellation[]): Appellation[] {
        return []
    }

    getRegions(): RegionLocation[] {
        return []
    }

    addRegions(regions: RegionLocation[]): RegionLocation[] {
        return []
    }

    getCountryName(): string {
        return this.getTitle()
    }

    getCountry(): Country {
        return this
    }

    getRegion(): RegionLocation | null {
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
    getRegion(): RegionLocation
}

export class RegionLocation extends Location implements IRegion {
    getRegion(): RegionLocation {
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
    getRegion(): RegionLocation | null
}

export class Appellation extends Location implements IAppellation {
    protected region: RegionLocation | null
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

    getRegion(): RegionLocation | null {
        return this.region
    }

    getAppellation(): Appellation | null {
        return this
    }

    constructor(
        region: RegionLocation | null,
        country: Country,
        title: string
    ) {
        super(title)
        this.region = region
        this.country = country
    }
}
