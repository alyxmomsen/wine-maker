import { Location } from '../../Location.class'
import { PlayerPerson } from '../../Player.class'
import { Wine } from '../../Wine.class'
import { IWinery } from '../../Winery.class'

export interface IWineFactory {
    canCreateWineForPerson(player: PlayerPerson, winery: IWinery): boolean
    canCreateForLocation(player: PlayerPerson, location: Location): boolean
    getWineName(): string
    getTitle(): string
    tryCreate(player: PlayerPerson, winery: IWinery): Wine | null
    calculateCostPrice(): number
}

export class CraftWineFactory implements IWineFactory {
    price: number
    name: string

    calculateCostPrice(): number {
        return 0
    }

    canCreateForLocation(player: PlayerPerson, location: Location): boolean {
        return true
    }

    canCreateWineForPerson(player: PlayerPerson, winery: IWinery): boolean {
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

    tryCreate(player: PlayerPerson, winery: IWinery): Wine | null {
        let wineryOwnerPass = false

        let grapeMatchesPass = false

        const playerWineries = player.getWineries()

        for (const playerWinery of playerWineries) {
            if (playerWinery === winery) {
                wineryOwnerPass = true
                break
            }
        }

        if (!wineryOwnerPass) {
            return null
        }

        const playerGrapes = player.getVineyards().map((vineyard) => {})

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
