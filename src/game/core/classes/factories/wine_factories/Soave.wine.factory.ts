import { GarganegaGrape } from '../../Grape_concrete/Garganega.grape'
import { ItaliaCountry } from '../../Location.Country.concrete'
import { VenetoRegion } from '../../Location.Region.concrete'
import { PlayerPerson } from '../../Player.class'
import { Wine } from '../../Wine.class'
import { SoaveWine } from '../../wine_concrete/Soave.wine'
import { IWinery } from '../../Winery.class'
import { IWineFactory } from './WineFactory'

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

    tryCreateFor(player: PlayerPerson, winery: IWinery): Wine | null {
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

        const wine = new SoaveWine(
            currentPlayerLocation,
            VenetoRegion.Instance(),
            grapeMatches[0]
        )

        player.addWine(wine)

        return wine
    }

    canCreateWineForPlayer(player: PlayerPerson, winery: IWinery): boolean {
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
            return false
        }

        if (!(wineryLocation instanceof ItaliaCountry)) {
            return false
        }

        if (playerCurrentLocation !== wineryLocation) {
            return false
        }

        const matchedGrapes: GarganegaGrape[] = []

        for (const playerGrape of playerGrapes) {
            const grapeLocation = playerGrape.getOrigin()
            if (
                playerGrape instanceof GarganegaGrape &&
                grapeLocation instanceof ItaliaCountry
            ) {
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
