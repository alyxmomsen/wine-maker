export interface ILocation {
    getCountry(): Country
    getRegion(): Region | null
    getAppellation(): Appellation | null
}

export abstract class Location implements ILocation {
    protected title: string;
    abstract getCountry(): Country
    abstract getRegion(): Region | null
    abstract getAppellation(): Appellation | null

    getLocationName() {
        return this.title;
    }

    constructor(title:string) {
        this.title = title;
    }
}

export class Country extends Location {
    getCountry(): Country {
        return this
    }

    getRegion(): Region | null {
        return null
    }

    getAppellation(): Appellation | null {
        return null
    }

    constructor(title:string) {
        super(title)
    }
}

export class Region extends Location {
    protected country: Country

    getCountry(): Country {
        return this.country
    }

    getRegion(): Region | null {
        return this
    }

    getAppellation(): Appellation | null {
        return null
    }

    constructor(country: Country , title:string) {
        super(title)
        this.country = country
    }
}

export class Appellation extends Location {
    protected region: Region | null
    protected country: Country

    getCountry(): Country {
        return this.country
    }

    getRegion(): Region | null {
        return this.region
    }

    getAppellation(): Appellation | null {
        return this
    }

    constructor(region: Region | null, country: Country , title:string) {
        super(title)
        this.region = region
        this.country = country
    }
}
