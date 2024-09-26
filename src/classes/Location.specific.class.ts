import { Country, Region } from "./Location.class";
import { FranceCountry, ItalyCountry } from "./Location.Country.specific.class";

// Singletone
export class VenettoRegion extends Region {

    static instance: VenettoRegion | null = null;
    static Instance(italy: ItalyCountry): VenettoRegion {
    
        if (VenettoRegion.instance === null) {
            VenettoRegion.instance = new VenettoRegion(italy);
            return VenettoRegion.instance;
        }
        else {
            return VenettoRegion.instance;
        }
    }

    private constructor(italy:ItalyCountry) {
        super(italy , "Venetto");
    }
}

// Singletone
export class LoireValleyRegion extends Region {

    static instance: LoireValleyRegion | null = null;
    static Instance(france: FranceCountry): LoireValleyRegion {
    
        if (LoireValleyRegion.instance === null) {
            LoireValleyRegion.instance = new LoireValleyRegion(france);
            return LoireValleyRegion.instance;
        }
        else {
            return LoireValleyRegion.instance;
        }
    }

    private constructor(france:FranceCountry) {
        super(france, "Loire Valley");
    }
}