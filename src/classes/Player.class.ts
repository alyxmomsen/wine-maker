import { IAmount, IPrice } from "./Application.class";
import { Grape } from "./Grape.class";
import { Appellation, Country, Location, Region } from "./Location.class";

// Singletone
export class Player {

    private money: number;

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

    addGrape(grape: Grape) {
        
        this.grapes.push(grape);
    }

    getGrapes() {
        return this.grapes;
    }

    setMoney(value:number) {
        this.money = value;
        return this.money;
    }

    getMoney() {
        return this.money;
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
        this.grapes = [];
        /*  */
        this.money = 1_000_000;
    }
}

