import { Grape } from "./Grape.class";
import { ILocaction, Location } from "./Location.class";

export class GarganegaGrape extends Grape {
    constructor(location:Location , amount:number ) {
        super('Garganega' , location , 100_000 , amount);
    }
}

class Arinto extends Grape {
    constructor(location:ILocaction , amount:number) {
        super('Garganega' , location , 100_000 , amount);
    }
}

class Alvarinho extends Grape {
    constructor(location:Location , amount:number) {
        super('Garganega' , location , 100_000 , amount);
    }
}
