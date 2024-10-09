import { Factory, IFactory } from './Factory.class'
import { GarganegaGrape } from './Grape.class'
import { ItaliaCountry } from './Location.Country.concrete'
import { VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'
import { Vineyard } from './Vineyard.class'
import { Wine } from './Wine.class'
import { SoaveWine } from './Wine.concrete'

export interface IWineFactory {
    canCreateVineForPlayer(player: Player): boolean
    getWineName(): string
    getTitle(): string
    createFor(player: Player): Wine
}

export class WineFactory extends Factory implements IWineFactory {
    canCreateVineForPlayer(player: Player): boolean {
        console.log('hello world')
        return false
    }
    getWineName(): string {
        return ''
    }
    getTitle(): string {
        return ''
    }

    createFor(player: Player): Wine {
        return new Wine('', '', '', '', '')
    }
}

export class SoaveWineFactory extends WineFactory {
    canCreateVineForPlayer(player: Player): boolean {
        const vineyards = player.getVineyards()

        let vineyardItaliaLocation: boolean = false
        let vineyardGarganegaGrape: boolean = false
        let money: number = player.getMoneyAmount()

        if (money < 100) {
            console.log('money:', money)
            return false
        }

        if (vineyards.length < 1) {
            return false
        }

        if (vineyardGarganegaGrape && vineyardItaliaLocation) {
            return true
        } else {
            return false
        }
    }

    getWineName() {
        return 'Soave'
    }

    createFor(player: Player): SoaveWine {
        const italy = ItaliaCountry.Instance()
        const soaveInstance = new SoaveWine(
            italy,
            VenetoRegion.Instance(),
            new GarganegaGrape(italy)
        )
        player.addWine(soaveInstance)
        player.decrementMoneyAmountByValue(100)
        return soaveInstance
    }

    constructor() {
        super()
    }
}
