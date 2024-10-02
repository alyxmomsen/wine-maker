import { GarganegaGrape, Grape } from "./Grape.class";
import { Country } from "./Location.class";
import { Italia as ItaliaCountry, Portugal as PortugalCountry } from "./Location.Country.concrete";
import { Player } from "./Player.class";

export class Wine {

    title: string;
    origin: string;
    grape: string;

    constructor(title:string , grape:string , origin:string) {
        this.title = title;
        this.origin = origin;
        this.grape = grape;
    }
}

export class Soave extends Wine {

    static TryInstanceByPlayer(player:Player) {
        
        const locations = player.getLocations();
        const grapes = player.getGrapes();

        if (!locations.length || !grapes.length) {
            return null;
        }

        for (let i = 0; i < locations.length; i++) {

            const country = locations[i];

            if (country instanceof ItaliaCountry) {
                
                for (let j = 0; j < grapes.length; j++) {
    
                    const grape = grapes[j];

                    if (grape instanceof GarganegaGrape) {
                        return new Soave(country , grape);
                    }
                }
            }

            return null;
            
        }

        if (locations instanceof ItaliaCountry && grapes instanceof GarganegaGrape) {
            
            return new Soave(locations, grapes);
        }

        return null
    }

    constructor(italiaCountry:ItaliaCountry , garganegaGrape:GarganegaGrape) {
        const origin = italiaCountry.getLocationName();
        const grape = garganegaGrape.getGrapeName();
        super('Soave', grape, origin);
    }
}


