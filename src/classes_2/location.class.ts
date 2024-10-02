
interface ILocation {
    getCountry(): Country;
    getRegion(): Region|null;
    getAppellation(): Appellation|null;
}

abstract class Location implements ILocation {

    abstract getCountry(): Country;
    abstract getRegion(): Region | null;
    abstract getAppellation(): Appellation | null;

    constructor() {

    }
}

class Country extends Location {
    getCountry(): Country {
        return this;
    }

    getRegion(): Region | null {
        return null;
    }

    getAppellation(): Appellation | null {
        return null;
    }
}

class Region extends Location {

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

class Appellation extends Location {

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


class Portugal extends Country {

    static instance: Portugal|null = null;
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

class Medok extends Region {

    static instance: Medok | null;
    static Instance(): Medok {

        if (Medok.instance === null) {
            Medok.instance = new Medok();
        }
        
        return Medok.instance;

    }

    private constructor() {
        super(portugal);
    }
}

class Grape {

    title: string;

    constructor(title:string) {
        this.title = title;
    }
}

class GarganegaGrape extends Grape {
    constructor(title:string) {
        super(title);
    }
}

class SovingnonBlanGrape extends Grape {

    constructor(title:string) {
        super(title);
    }
}

const portugal = Portugal.Instance();
const medok = Medok.Instance();

const appellation = medok.getAppellation();
const country = medok.getCountry();
const region = medok.getRegion();

console.log(appellation , country , region);