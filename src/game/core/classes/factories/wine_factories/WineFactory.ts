import { UniqIdRegisty } from '../../../../../utils/Uniq-id-registry'
import { MuskadetAppellation } from '../../Location.Appellation.concrete'
import { Location } from '../../Location.class'
import { MinhoRegion } from '../../Location.Region.concrete'
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

export abstract class WineFactory implements IWineFactory {
    protected uniqIdRegistry: UniqIdRegisty

    abstract calculateCostPrice(): number
    abstract canCreateForLocation(
        player: PlayerPerson,
        location: Location
    ): boolean
    abstract canCreateWineForPerson(
        player: PlayerPerson,
        winery: IWinery
    ): boolean
    abstract getTitle(): string
    abstract getWineName(): string
    abstract tryCreate(player: PlayerPerson, winery: IWinery): Wine | null

    constructor() {
        this.uniqIdRegistry = new UniqIdRegisty()
    }
}

export class CraftWineFactory extends WineFactory {
    // this.price = price;
    // this.name = name;
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

        const playerGrapes = player.getGrapes()

        if (!playerGrapes.length) {
            return null
        }

        const playerCurrentLocation = player.getCurrentLocation()

        if (!playerCurrentLocation) {
            return null
        }

        const wine = new Wine(
            'craft wine',
            [],
            playerCurrentLocation.getTitle(),
            '',
            ''
        )

        winery.addWine(wine)

        return wine
    }

    getTitle(): string {
        return ''
    }

    getWineName(): string {
        return this.name
    }

    constructor(name: string, price: number) {
        super()
        this.name = name
        this.price = price
    }
}
