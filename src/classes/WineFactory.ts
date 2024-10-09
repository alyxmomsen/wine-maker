import { Factory, IFactory } from './Factory.class'
import { GarganegaGrape } from './Grape.class'
import { ItaliaCountry } from './Location.Country.concrete'
import { VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'
import { Wine } from './Wine.class'
import { SoaveWine } from './Wine.concrete'

export interface IWineFactory {
    canCreateVineFor(player: Player): boolean
    getWineName(): string
    getTitle(): string
    createFor(player:Player): Wine;
}

export class WineFactory extends Factory implements IWineFactory {
    canCreateVineFor(player: Player): boolean {
        console.log('hello world');
        return false
    }
    getWineName(): string {
        return ''
    }
    getTitle(): string {
        return ''
    }

    createFor(player:Player): Wine {
        return new Wine('','','','','');
    }
}

export class SoaveWineFactory extends WineFactory {
    canCreateVineFor(player: Player): boolean {
        const locations = player.getLocations()
        const grapes = player.getGrapes()
        let italia: boolean = false
        let garganega: boolean = false
        let money: number = player.getMoneyAmount();

        console.log(
            'fac', money
        );

        if (money < 100) {
            console.log('money:' , money);
            return false;
        }

        if (locations.length <= 0) {
            return false
        }

        for (const location of locations) {
            if (location instanceof ItaliaCountry) {
                italia = true
                break
            }
        }

        for (const grape of grapes) {
            if (grape instanceof GarganegaGrape) {
                garganega = true
                break
            }
        }

        if (garganega && italia) {
            return true
        } else {
            return false
        }
    }

    getWineName() {
        return 'Soave'
    }

    createFor(player:Player): SoaveWine {
        const italy = ItaliaCountry.Instance();
        const soaveInstance = new SoaveWine(italy, VenetoRegion.Instance(), new GarganegaGrape(italy));
        player.addWine(soaveInstance);
        player.decrementMoneyAmountByValue(100);
        return soaveInstance;
    }

    constructor() {
        super()
    }
}
