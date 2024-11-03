import Grape from '../../../../../components/grape'
import { MelonDeBourgogneGrape } from '../../Grape.class'
import { Location } from '../../Location.class'
import { PortugalCountry as PortugalCountryLocation } from '../../Location.Country.concrete'
import { MinhoRegion } from '../../Location.Region.concrete'
import { PlayerPerson } from '../../Player.class'
import { Wine } from '../../Wine.class'
import { VinhoVerdeWine } from '../../wine_concrete/Wine.concrete'
import { IWinery } from '../../Winery.class'
import { IWineFactory } from './WineFactory'

export class VinhoVerdeWineFactory implements IWineFactory {
    private price: number
    private name: string

    calculateCostPrice(): number {
        return this.price
    }

    canCreateForLocation(player: PlayerPerson, location: Location): boolean {
        return location instanceof PortugalCountryLocation
    }

    canCreateWineForPlayer(player: PlayerPerson, winery: IWinery): boolean {
        const playerGrapes = player.getGrapes()
        const playerCurrentLocation = player.getCurrentLocation()
        const wineryLocation = winery.getLocation()
        const playerWineries = player.getWineries()

        let grapeINeed: MelonDeBourgogneGrape | null = null

        if (!(playerCurrentLocation instanceof PortugalCountryLocation)) {
            return false
        }

        if (!(wineryLocation instanceof PortugalCountryLocation)) {
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
                if (location instanceof PortugalCountryLocation) {
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

    tryCreateFor(player: PlayerPerson, winery: IWinery): Wine | null {
        const decrementedValue = player.decrementMoneyAmountByValue(299)

        const loc = winery.getLocation()

        const wine = new VinhoVerdeWine(
            PortugalCountryLocation.Instance(),
            MinhoRegion.Instance(),
            new MelonDeBourgogneGrape(loc)
        )

        player.addWine(wine)

        return wine
    }

    constructor() {
        this.price = 299
        this.name = 'Vinho Verde'
    }
}
