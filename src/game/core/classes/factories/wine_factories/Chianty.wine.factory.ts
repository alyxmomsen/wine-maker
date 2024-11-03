import { SangioveseGrape } from '../../Grape_concrete/Sangiovese.grape'
import { ILocation, Location } from '../../Location.class'
import { ItaliaCountry as ItaliaCountryLocation } from '../../Location.Country.concrete'
import { PlayerPerson } from '../../Player.class'
import { Wine } from '../../Wine.class'
import Winery, { IWinery } from '../../Winery.class'
import { IWineFactory } from './WineFactory'

export class ChiantyWineFactory implements IWineFactory {
    calculateCostPrice(): number {
        return 0
    }

    canCreateForLocation(player: PlayerPerson, location: Location): boolean {
        return location instanceof ItaliaCountryLocation
    }

    canCreateWineForPlayer(player: PlayerPerson, winery: IWinery): boolean {
        const grapes = player.getGrapes()

        // const isContainSanjovese:boolean = grapes.filter(grape => grape instanceof Sanjov)
        const wineryLocation: ILocation = winery.getLocation()

        if (!(wineryLocation instanceof ItaliaCountryLocation)) {
            return false
        }

        let grapePass = false

        for (const grape of grapes) {
            if (grape instanceof SangioveseGrape) {
                grapePass = true
                break
            }
        }

        if (!grapePass) {
            return false
        }

        return true
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
