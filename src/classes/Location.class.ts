export interface ILocaction {
    getName(): string;
    getCountry(): Country|null;
    getAppelation(): Appellation|null;
    getRegion(): Region | null;
    makeLicense(): Lisence;
    checkLisense(lisence:Lisence): boolean;
}

export interface ICountry extends ILocaction {
    
}

export interface IRegion extends ICountry {

}

export interface IAppelation extends IRegion {

}



abstract  class Lisence  {
    
    private location: Location;

    check(token:number):boolean {
        return !!(token % 2);
    }

    constructor(location:Location) {
        this.location = location;
    }
}

export class LocationLisence extends Lisence {

    constructor(location: Location) {
        super(location);
    }
}

export abstract class Location implements ILocaction {
    protected lisences: Lisence[];
    protected name: string;
    getName(): string {
        return this.name;
    }

    makeLicense(): Lisence {
        return new LocationLisence(this);
    }

    checkLisense(lisence:Lisence): boolean {
        
        return lisence.check(199);
    }



    abstract getAppelation(): Appellation|null;
    abstract getRegion(): Region|null;
    abstract getCountry(): Country|null;
    constructor(name:string) {
        this.name = name;
        this.lisences = [];
    }
}

export class Country extends Location implements ICountry {
    getAppelation(): Appellation | null {
        return null;
    };

    getRegion(): Region | null {
        return null;
    };
    getCountry(): Country | null {
        return this;
    };
    getName(): string {
        return this.name;
    }
    constructor(name: string) {
        super(name);
    }
}

export class Region extends Location implements IRegion {
    protected country: Country;
    getAppelation(): Appellation | null {
        return null;
    };

    getRegion(): Region | null {
        return this;
    }

    getCountry(): Country | null {
        return this.country.getCountry();
    }

    getName(): string {
        return this.name;
    }

    constructor(country:Country , name:string){
        super(name);
        this.country = country;
    }
}

export abstract class Appellation extends Location implements IAppelation {

    region: Region;
    getAppelation(): Appellation | null {
        return this;
    };

    getRegion(): Region | null {
        return this.region.getRegion();
    };
    getCountry(): Country | null {

        const region:Region|null = this.region.getRegion();
        return region ? region.getCountry() : region;
    };

    constructor(region:Region , name:string) {
        super(name);
        this.region = region;
    }
}

