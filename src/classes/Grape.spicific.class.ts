import { Grape } from "./Grape.class";
import { ILocaction, Location } from "./Location.class";

export class GarganegaGrape extends Grape {
    constructor(location:Location) {
        super('Garganega' , location);
    }
}

class Arinto extends Grape {
    constructor(location:ILocaction) {
        super('Garganega' , location);
    }
}

class Alvarinho extends Grape {
    constructor(location:Location) {
        super('Garganega' , location);
    }
}

// class GarganegaGrape extends Grape {
//     constructor() {
//         super('Garganega');
//     }
// }