import { GarganegaGrape } from "./Grape.class";
import { Italia as ItaliaCountry } from "./Location.Country.concrete";
import { Player } from "./Player.class";
import { Soave } from "./Wine.class";

export class WineFactory  {

    createWine() {

    }

    createSoaveWine (player: Player) {
        
        const grapes = player.getGrapes();
        const locations = player.getLocations();
        
        let garganega:GarganegaGrape|null = null;
        let italia:ItaliaCountry|null = null;

        for (let i = 0; i < locations.length; i++) {
            const country = locations[i].getCountry();

            if (!italia) {
                if (country.getCountry() instanceof ItaliaCountry) {
                    italia = country ;
                    break;
                }
            }            
        }

        for (let i = 0; i < grapes.length; i++) {
            
            const grape = grapes[i];

            if (!garganega) {
                if (grape instanceof GarganegaGrape) {
                    garganega = grape;
                    break;
                }
            }
        }

        if (garganega && italia) {
            return new Soave(italia , garganega);
        }
        else {
            return null;
        }
    }

    constructor() {

    }
}