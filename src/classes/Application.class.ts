import { GarganegaGrape, SovingnonBlanGrape } from "./Grape.class";
import { Italia } from "./Location.Country.concrete";
import { Player } from "./Player.class";
import { Soave } from "./Wine.class";
import { WineFactory } from "./WineFactory.class";

export class Application {

    player: Player;

    update() {

    }

    constructor() {
        this.player = new Player;
        const garganega = new GarganegaGrape();
        const sovignon = new SovingnonBlanGrape();
        
        const player = new Player();

        player.addGrape(garganega);
        player.addLocation(Italia.Instance());

        console.log(player);

        const result = Soave.TryInstanceByPlayer(player);

        if (result) {
            
        } 

        console.log(result);

    }
}

