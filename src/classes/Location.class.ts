
export interface ILocation {
    getCountry(): Country;
    getRegion(): Region|null;
    getAppellation(): Appellation|null;
}

export abstract class Location implements ILocation {

    abstract getCountry(): Country;
    abstract getRegion(): Region | null;
    abstract getAppellation(): Appellation | null;

    constructor() {

    }
}

export class Country extends Location {
    getCountry(): Country {
        return this;
    }

    getRegion(): Region | null {
        return null;
    }

    getAppellation(): Appellation | null {
        return null;
    }

    constructor() {
        super();
    }
}

export class Region extends Location {

    protected country: Country;

    getCountry(): Country {
        return this.country;
    }

    getRegion(): Region | null {
        return this;
    }

    getAppellation(): Appellation | null {
        return null;
    }

    constructor(country: Country) {
        super();
        this.country = country;
    }
}

export class Appellation extends Location {

    protected region: Region|null;
    protected country: Country;

    getCountry(): Country {
        return this.country;
    }

    getRegion(): Region | null {
        return this.region;
    }

    getAppellation(): Appellation | null {
        return this;
    }

    constructor(region: Region | null, country: Country) {
        super();
        this.region = region;
        this.country = country;
    }
}

export class Portugal extends Country {

    private static instance: Portugal|null = null;
    static Instance(): Portugal {

        if (Portugal.instance === null) {
            Portugal.instance = new Portugal();
        }
        
        return Portugal.instance;
    }


    private constructor() {
        super();
    }
}

export class Medok extends Region {

    private static instance: Medok | null = null;
    static Instance(): Medok {

        if (Medok.instance === null) {
            Medok.instance = new Medok();
        }
        
        return Medok.instance;
    }

    private constructor() {
        super(Portugal.Instance());
    }
}