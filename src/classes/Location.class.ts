export interface ILocation {
    getCountry(): Country
    getRegion(): Region | null
    getAppellation(): Appellation | null
    getTitle(): string
}

export abstract class Location implements ILocation {
    protected title: string
    abstract getCountry(): Country
    abstract getRegion(): Region | null
    abstract getAppellation(): Appellation | null

    getTitle() {
        return this.title
    }

    constructor(title: string) {
        this.title = title
    }
}

export interface ICountry extends ILocation {
    getCountryName(): string
}

export class Country extends Location implements ICountry {
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
    }
}

export interface IRegion extends ICountry {
    getRegionName(): string
    getCountryName(): string
}

export class Region extends Location implements IRegion {
    protected country: Country

    getRegionName(): string {
        return this.title
    }

    getCountryName(): string {
        return this.country ? this.country.getCountryName() : ''
    }

    getCountry(): Country {
        return this.country
    }

    getRegion(): Region | null {
        return this
    }

    getAppellation(): Appellation | null {
        return null
    }

    constructor(country: Country, title: string) {
        super(title)
        this.country = country
    }
}

interface IAppellation extends IRegion {
    getAppellationName(): string
    getRegionName(): string
    getCountryName(): string
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
