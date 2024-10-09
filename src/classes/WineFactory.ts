import { Factory, IFactory } from './Factory.class'
import { GarganegaGrape } from './Grape.class';
import { ItaliaCountry } from './Location.Country.concrete';
import { VenetoRegion } from './Location.Region.concrete';
import { Player } from './Player.class'
import { SoaveWine } from './Wine.concrete';

export interface IWineFactory {
    canCreateVineFor(player: Player): boolean;
    getWineName(): string;
}

export class WineFactory extends Factory implements IWineFactory {
    canCreateVineFor(player: Player): boolean {
        return false;
    }
    getWineName(): string {
        return '';
    }
}

export class SoaveWineFactory extends WineFactory {
    canCreateVineFor(player: Player): boolean {

        return true;
    }

    getWineName() {
        return "Soave";
    }

    instanceFor(player: Player): SoaveWine | null {
        
        const playerLocations = player.getLocations();
        let i = 0;
        let isItalia:ItaliaCountry|null = null;
        while (playerLocations.length && (i < playerLocations.length)) {
            if ((i + 1) >= playerLocations.length) {
                break;
            }
            const location = playerLocations[i];
            if (location instanceof ItaliaCountry) {
                isItalia = location;
                break;
            }

            i++;
        }

        if (isItalia) {
            
            return new SoaveWine(isItalia , VenetoRegion.Instance() , new GarganegaGrape(isItalia));
        }
        else {
            return null
        }
    }

    constructor() {
        super();
    }
}
