import { GarganegaGrape } from './Grape.class'
import { ItaliaCountry } from './Location.Country.concrete'
import { VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'
import { Wine } from './Wine.class'
import { SoaveWine } from './Wine.concrete'
import Winery from './Winery.class'

export interface IWineFactory {
    canCreateWineForPlayer(player: Player, winery: Winery): boolean
    getWineName(): string
    getTitle(): string
    tryCreateFor(player: Player, winery: Winery): Wine | null
    calculateCostPrice(): number
}

export class CraftWineFactory implements IWineFactory {
    price: number
    name: string

    calculateCostPrice(): number {
        return 0
    }

    canCreateWineForPlayer(player: Player, winery: Winery): boolean {
        const playerWineries = player.getWineries()
        return false
    }

    tryCreateFor(player: Player): Wine | null {
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

export class SoaveWineFactory implements IWineFactory {
    getTitle(): string {
        return ''
    }

    getWineName(): string {
        return 'Soave'
    }

    calculateCostPrice(): number {
        return 199
    }

    tryCreateFor(player: Player, winery: Winery): Wine | null {
        const playerMoney = player.getMoneyAmount()
        const wineCostPrice = this.calculateCostPrice()
        if (playerMoney < wineCostPrice) {
            return null
        }

        if (!this.canCreateWineForPlayer(player, winery)) {
            return null
        }

        const currentPlayerLocation = player.getCurrentLocation()
        const playerGrapes = player.getGrapes()

        if (!(currentPlayerLocation instanceof ItaliaCountry)) {
            return null
        }

        const grapeMatches: GarganegaGrape[] = []
        for (const playerInventoryGrape of playerGrapes) {
            if (playerInventoryGrape instanceof GarganegaGrape) {
                grapeMatches.push(playerInventoryGrape)
            }
        }

        if (!grapeMatches.length) {
            return null
        }

        const moneyRest = player.decrementMoneyAmountByValue(wineCostPrice)

        if (moneyRest < 0) {
            return null
        }

        return new SoaveWine(
            currentPlayerLocation,
            VenetoRegion.Instance(),
            grapeMatches[0]
        )
        // this.canCreateWineForPlayer();
    }

    canCreateWineForPlayer(player: Player, winery: Winery): boolean {
        console.log('can that')

        const playerCurrentLocation = player.getCurrentLocation()
        const wineryLocation = winery.getLocation()
        const playerGrapes = player.getGrapes()
        let ifPlayerWineryEqual = false
        for (const playerWinery of player.getWineries()) {
            if (playerWinery === winery) {
                ifPlayerWineryEqual = true
            }
        }

        if (ifPlayerWineryEqual === false) {
            console.log('not')
            return false
        }

        if (playerCurrentLocation !== wineryLocation) {
            console.log('not')
            return false
        }

        const matchedGrapes: GarganegaGrape[] = []

        for (const playerGrape of playerGrapes) {
            const grapeLocation = playerGrape.getLocation()
            if (grapeLocation instanceof ItaliaCountry) {
                matchedGrapes.push(playerGrape)
            }
        }

        if (!matchedGrapes.length) {
            return false
        }

        console.log('approved')

        return true
    }

    constructor() {}
}
