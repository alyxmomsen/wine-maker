import { Appellation, Country, ILocation, Location, Medok, Portugal, Region } from "./Location.class";


export interface IGrape {
    getGrapeName(): string;
    
}

export class Grape implements ILocation {

    protected title: string;
    protected location: Location;

    getAppellation(): Appellation | null {
        return this.location.getAppellation();
    }

    getRegion(): Region | null {
        return this.location.getRegion();
    }

    getCountry(): Country {
        return this.location.getCountry();
    }

    constructor(title: string , location:Location) {
        this.location = location;
        this.title = title;
    }
}

export class GarganegaGrape extends Grape {
    constructor() {
        super('Garganega' , Medok.Instance());
    }
}

export class SovingnonBlanGrape extends Grape {

    constructor() {
        super('Sovignon Blan', Portugal.Instance());
    }
}

// const garganega = new GarganegaGrape();
// const sovignon = new SovingnonBlanGrape();

// const appellation = garganega.getAppellation();
// const country = garganega.getCountry();
// const region = garganega.getRegion();

// console.log(appellation , country , region);
