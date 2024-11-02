import { GarganegaGrape, Grape, MelonDeBourgogneGrape } from '../../Grape.class'
import { ItaliaCountry, PortugalCountry } from '../../Location.Country.concrete'
import { MinhoRegion, VenetoRegion } from '../../Location.Region.concrete'
import { PlayerPerson } from '../../Player.class'
import { Wine } from '../../Wine.class'
import { VinhoVerdeWine } from '../../wine_concrete/Wine.concrete'
import Winery, { IWinery } from '../../Winery.class'

export interface IWineFactory {
    canCreateWineForPlayer(player: PlayerPerson, winery: IWinery): boolean
    getWineName(): string
    getTitle(): string
    tryCreateFor(player: PlayerPerson, winery: Winery): Wine | null
    calculateCostPrice(): number
}

export class CraftWineFactory implements IWineFactory {
    price: number
    name: string

    calculateCostPrice(): number {
        return 0
    }

    canCreateWineForPlayer(player: PlayerPerson, winery: Winery): boolean {
        const playerWineries = player.getWineries()

        const playerGrapes = player.getGrapes()

        if (playerGrapes.length <= 0) {
            return false
        }

        let isWineryEqual = false
        for (const playerWinery of playerWineries) {
            if (playerWinery === winery) {
                isWineryEqual = true
                break
            }
        }

        return isWineryEqual
    }

    tryCreateFor(player: PlayerPerson): Wine | null {
        return null
    }

    getTitle(): string {
        return ''
    }

    getWineName(): string {
        return this.name
    }

    constructor(name: string) {
        this.price = 100
        this.name = name
    }
}
