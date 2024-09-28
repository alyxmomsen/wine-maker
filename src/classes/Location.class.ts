import { Grape } from "./Grape.class";
import { Player } from "./Player.class";

export interface ILocaction {
    getName(): string;
    getCountry(): Country|null;
    getAppelation(): Appellation|null;
    getRegion(): Region | null;
    makeLicense(owner:Player|null ,subj:Grape): Lisence;
    checkLisense(lisence:Lisence ,owner:Player): boolean;
}

export interface ICountry extends ILocaction {
    
}

export interface IRegion extends ICountry {

}

export interface IAppelation extends IRegion {

}



export abstract class Lisence  {
    
    abstract check(owner:Player): boolean;

    constructor() {}
}

export class LocationLisence extends Lisence {

    private location: Location;
    private owner: Player|null;
    private subject: Grape;

    check(owner:Player):boolean {
        return this.owner === owner;
    }

    constructor(location: Location , owner:Player|null , subj:Grape) {
        super();
        this.location = location;
        this.owner = owner;
        this.subject = subj;
    }
}

export abstract class Location implements ILocaction {
    protected lisences: Lisence[];
    protected name: string;
    getName(): string {
        return this.name;
    }

    makeLicense(owner:Player|null ,subj:Grape): Lisence {
        return new LocationLisence(this , owner , subj );
    }

    checkLisense(lisence:Lisence ,owner:Player): boolean {
        
        return lisence.check(owner);
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

