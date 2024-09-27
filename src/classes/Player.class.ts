import { Grape } from "./Grape.class";
import { Appellation, Country, Location, Region } from "./Location.class";

// Singletone
export class Player {

    private appellations: Appellation[];
    private countries: Country[];
    private regions: Region[];
    /* --- */
    private grapes: Grape[];

    addAppellation(newAppellation: Appellation) {
        
        for (const appellation of this.appellations) {

            if (appellation === newAppellation) {
                return false;
            }
        }

        this.appellations.push(newAppellation);
    }

    addRegion(region:Region) {
        this.regions.push(region);
    }

    addCountry(country:Country) {
        this.countries.push(country);
    }

    makeGrape(grape:Grape) {
        this.grapes.push(grape);
    }

    getGrapes() {
        return this.grapes;
    }

    static instance: Player | null = null;
    static Instance () : Player {
    
        if (Player.instance === null) {
            Player.instance = new Player();
            return Player.instance;
        }
        else {
            return Player.instance;
        }
    }
    
    private constructor() {
        this.appellations = [] ;
        this.regions = [] ;
        this.countries = [];
        /* --- */
        this.grapes = [] ;
    }
}

