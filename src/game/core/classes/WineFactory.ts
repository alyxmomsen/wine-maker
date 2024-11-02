import { GarganegaGrape, Grape, MelonDeBourgogneGrape } from './Grape.class'
import { ItaliaCountry, PortugalCountry } from './Location.Country.concrete'
import { MinhoRegion, VenetoRegion } from './Location.Region.concrete'
import { PlayerPerson } from './Player.class'
import { Wine } from './Wine.class'
import { SoaveWine, VinhoVerdeWine } from './Wine.concrete'
import Winery, { IWinery } from './Winery.class'

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

        // for (const grape ) {

        // }

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

    tryCreateFor(player: PlayerPerson, winery: Winery): Wine | null {
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

    canCreateWineForPlayer(player: PlayerPerson, winery: Winery): boolean {
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

export class VinhoVerdeWineFactory implements IWineFactory {
    private price: number
    private name: string

    calculateCostPrice(): number {
        return this.price
    }

    canCreateWineForPlayer(player: PlayerPerson, winery: Winery): boolean {
        const playerGrapes = player.getGrapes()
        const playerCurrentLocation = player.getCurrentLocation()
        const wineryLocation = winery.getLocation()
        const playerWineries = player.getWineries()

        let grapeINeed: MelonDeBourgogneGrape | null = null

        if (!(playerCurrentLocation instanceof PortugalCountry)) {
            return false
        }

        if (!(wineryLocation instanceof PortugalCountry)) {
            return false
        }

        let isOwnerOfTheWinery: boolean = false
        for (const playerWinery of playerWineries) {
            if (playerWinery === winery) {
                isOwnerOfTheWinery = true
                break
            }
        }

        if (!isOwnerOfTheWinery) {
            return false
        }

        if (playerGrapes.length === 0) {
            return false
        }

        for (const grape of playerGrapes) {
            if (grape instanceof MelonDeBourgogneGrape) {
                const location = grape.getOrigin()
                if (location instanceof PortugalCountry) {
                    grapeINeed = grape
                }
            }
        }

        if (grapeINeed === null) {
            return false
        }

        return true
    }

    getTitle(): string {
        return 'Vinho Verde title'
    }

    getWineName(): string {
        return this.name
    }

    tryCreateFor(player: PlayerPerson, winery: Winery): Wine | null {
        const decrementedValue = player.decrementMoneyAmountByValue(299)

        const wine = new VinhoVerdeWine(
            PortugalCountry.Instance(),
            MinhoRegion.Instance(),
            new Grape('The Grape', PortugalCountry.Instance())
        )

        player.addWine(wine)

        return wine
    }

    constructor() {
        this.price = 299
        this.name = 'Vinho Verde'
    }
}
