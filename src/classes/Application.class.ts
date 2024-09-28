import { IGrape } from "./Grape.class";
import { GarganegaGrape } from "./Grape.spicific.class";
import { MuscadetAppelation } from "./Location.Appelation.Specific.class";
import { Country, IAppelation, ILocaction, IRegion } from "./Location.class";
import {FranceCountry, ItalyCountry } from "./Location.Country.specific.class";
import { LoireValleyRegion, VenettoRegion } from "./Location.specific.class";
import { Player } from "./Player.class";

export interface IAmount  {
    getAmount(): number;
    setAmount(value:number): number;
}

export interface IPrice {
    getPrice(): number;
    setPrice(value:number): number;
}

export class Application {

    private grapes: IGrape[];
    private countries: ILocaction[];
    private regions: IRegion[];
    private appellations: IAppelation[];

    private player: Player;

    private timing: Timing;

    update() {

        const grape = new GarganegaGrape(new Country('Some Country'), 100);
        this.player.setMoney(this.player.getMoney());
        this.player.addGrape(grape);
        
        console.log(
            this.player
        );

        // if (this.timing.tick()) {

            
        // }
    }

    addRegion() {
        
    }

    addAppellation() {

    }

    getAppellations() {
        return this.appellations ;
    }

    getCountries() {
        return this.countries ;
    }

    getRegions() {
        return this.regions ;
    }

    getGrapes() {
        return this.grapes;
    }

    getPlayer() {
        return this.player;
    }
    
    constructor() {

        this.timing = new Timing(1000);

        this.player = Player.Instance();
        this.countries = [
            FranceCountry.Instance() ,
            ItalyCountry.Instance() ,
        ];
        this.regions = [];
        this.appellations = [];
        this.grapes = [];

        for (const country of this.countries) {
            if (country instanceof ItalyCountry) {
                this.regions.push(VenettoRegion.Instance(country));
            }
            else if(country instanceof FranceCountry) {
                this.regions.push(LoireValleyRegion.Instance(country));
            }
        }

        for (const region of this.regions) {
            if (region instanceof VenettoRegion) {
                this.appellations.push(MuscadetAppelation.Instance(region));
            }
            else if(region instanceof LoireValleyRegion) {
                
            }
        }
        
    }
}

class Timing {

    private last: number;
    private interval: number;

    tick() {

        const now = Date.now();
        if (now - this.last > this.interval) {
            this.last = now;
            return true;
        }
        else {
            return false;
        }
    }

    constructor(interval:number) {
        this.last = 0;
        this.interval = interval;
    }
}