import { Grape } from "./Grape.class";
import { ILocaction, Location } from "./Location.class";
import { Player } from "./Player.class";

export class GarganegaGrape extends Grape {
    constructor(location: Location, amount: number, owner: Player|null = null
     ) {
        super('Garganega' , location , amount , owner );
    }
}

class Arinto extends Grape {
    constructor(location:ILocaction , amount:number, owner: Player|null = null) {
        super('Garganega' , location , amount , owner );
    }
}

class Alvarinho extends Grape {
    constructor(location:Location , amount:number, owner: Player|null = null) {
        super('Garganega' , location , amount , owner );
    }
}
