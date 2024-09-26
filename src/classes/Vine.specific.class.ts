import { GarganegaGrape } from "./Grape.spicific.class";
import { VenettoRegion } from "./Location.specific.class";
import { Vine } from "./Vine.class";

export interface IGrapeSingletone {

}

export class Soave extends Vine implements IGrapeSingletone {

    static Instance(venetto: VenettoRegion | null, garganega:GarganegaGrape|null) {
        if (venetto && garganega) {
            return new Soave();
        }
        else {
            return null;
        }
    }

    private constructor() {
        super("Soave");
    }
}

export class Muscadet extends Vine implements IGrapeSingletone {

    static Instance(venetto: VenettoRegion | null, garganega:GarganegaGrape|null) {
        if (venetto && garganega) {
            return new Muscadet();
        }
        else {
            return null;
        }
    }

    private constructor() {
        super("Soave");
    }
}