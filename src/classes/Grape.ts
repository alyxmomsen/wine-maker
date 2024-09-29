
interface ILocaction {
    getCountry(): Country;
    getRegion(): Region | null;
    getAppellation(): Appellation|null;
}

abstract class Location implements ILocaction {
    abstract getCountry(): Country;
    abstract getRegion(): Region | null;
    abstract getAppellation(): Appellation | null;
}

abstract class Country extends Location {
    abstract getCountry(): Country;
    abstract getRegion(): Region | null;
    abstract getAppellation(): Appellation | null;
}

abstract class Region extends Location {
    abstract getCountry(): Country;
    abstract getRegion(): Region | null;
    abstract getAppellation(): Appellation | null;
}

abstract class Appellation extends Location {
    abstract getCountry(): Country ;
    abstract getRegion(): Region | null ;
    abstract getAppellation(): Appellation | null ;
}


class SukaAppellation extends Appellation {

    country: Country;

    getAppellation(): Appellation | null {
        return null;
    }

    getCountry(): Country {
        return this.country;
    }

    getRegion(): Region | null {
        return null;
    }

    constructor(country: Country) {
        super();
        this.country = country;      
    }
}

abstract class AppellationDecorator implements ILocaction {

    abstract getCountry(): Country;
    abstract getRegion(): Region | null;
    abstract getAppellation(): Appellation | null;    
    
    protected appellation: Appellation;

    protected location: Location;

    constructor(location:Location, appellation:Appellation) {
        this.location = location;
        this.appellation = appellation;
    }
}

abstract class RegionDecorator implements ILocaction {
    abstract getCountry(): Country;
    abstract getRegion(): Region | null;
    abstract getAppellation(): Appellation | null;

    protected location: Location;
    constructor(location:Location) {
        this.location = location;
    }
}

class ConcreteAppellationDecorator extends AppellationDecorator {

    getAppellation(): Appellation | null {
        return this.appellation; 
    }

    getCountry(): Country {
        return this.location.getCountry();
    }

    getRegion(): Region | null {
        return this.location.getRegion();
    }

    constructor(location: Location) {
        super(location,new SukaAppellation(location));
    }
}

class ConcreteRegionDecorator extends RegionDecorator {

    getAppellation(): Appellation | null {
        return this.location.getAppellation(); 
    }

    getCountry(): Country {
        return this.location.getCountry();
    }

    getRegion(): Region | null {
        return this.location.getRegion();
    }

    constructor(location: Location) {
        super(location);
    }
}

class USACountry extends Country {

    getAppellation(): Appellation | null {
        return null;
    }

    getCountry(): Country {
        return this
    }

    getRegion(): Region | null {
        return null;        
    }

    constructor() {
        super();
    }
}

let usa  = new USACountry();

usa = new ConcreteAppellationDecorator(usa);

console.log(
    usa.getAppellation(),
    usa.getCountry(),
    usa.getRegion(),
)
