import { SangioveseGrape } from '../../Grape_concrete/Sangiovese.grape'
import { ILocation, Location } from '../../Location.class'
import { ItaliaCountry as ItaliaCountryLocation } from '../../Location.Country.concrete'
import { PlayerPerson } from '../../Player.class'
import { Wine } from '../../Wine.class'
import { ChiantiWine } from '../../wine_concrete/Chianti.wine'
import Winery, { IWinery } from '../../Winery.class'
import { IWineFactory } from './WineFactory'

export class ChiantyWineFactory implements IWineFactory {
    calculateCostPrice(): number {
        return 0
    }

    canCreateForLocation(player: PlayerPerson, location: Location): boolean {
        return location instanceof ItaliaCountryLocation
    }

    canCreateWineForPerson(player: PlayerPerson, winery: IWinery): boolean {
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

    tryCreate(player: PlayerPerson, winery: IWinery): Wine | null {
        let wineryPass = false
        for (const playerWinery of player.getWineries()) {
            if (winery === playerWinery) {
                wineryPass = true
                break
            }
        }

        if (!wineryPass) {
            return null
        }

        const newWine = new ChiantiWine()

        winery.addWine(newWine)

        return newWine
    }
}
