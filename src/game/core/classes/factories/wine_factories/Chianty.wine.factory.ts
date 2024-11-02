import { SangioveseGrape } from '../../Grape_concrete/Sangiovese.grape'
import { ILocation } from '../../Location.class'
import { ItaliaCountry } from '../../Location.Country.concrete'
import { PlayerPerson } from '../../Player.class'
import { Wine } from '../../Wine.class'
import { ChiantiWine } from '../../wine_concrete/Chianti.wine'
import Winery, { IWinery } from '../../Winery.class'
import { IWineFactory } from './WineFactory'

export class ChiantyWineFactory implements IWineFactory {
    calculateCostPrice(): number {
        return 0
    }

    canCreateWineForPlayer(player: PlayerPerson, winery: IWinery): boolean {
        const grapes = player.getGrapes()

        // const isContainSanjovese:boolean = grapes.filter(grape => grape instanceof Sanjov)
        const wineryLocation: ILocation = winery.getLocation();
        
        if (!(wineryLocation instanceof ItaliaCountry)) {
            return false;
        }

        let grapePass = false;

        for (const grape of grapes) {
            if (grape instanceof SangioveseGrape) {
                grapePass = true;
                break;
            }
        }

        if (!grapePass) {
            return false;
        }

        return true;
    }

    getTitle(): string {
        return 'title: Chianty'
    }

    getWineName(): string {
        return 'Chianty'
    }

    tryCreateFor(player: PlayerPerson, winery: Winery): Wine | null {
        return null
    }

    // constructor() {

    // }
}
