import { GarganegaGrape, Grape } from './Grape.class'
import { Region as RegionLocation } from './Location.class'
import {
    FranceCountry,
    ItaliaCountry,
    PortugalCountry,
} from './Location.Country.concrete'
import { BurgundyRegion, VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'
import { Wine } from './Wine.class'

export class Soave extends Wine {
    static TryInstanceByPlayer(player: Player) {
        const grapes = player.getGrapes()
        const locations = player.getLocations()

        if (!grapes.length || !locations.length) {
            return null
        }

        for (let i = 0; i < locations.length; i++) {
            const location = locations[i]

            if (location instanceof ItaliaCountry) {
                for (let j = 0; j < grapes.length; j++) {
                    const grape = grapes[j]

                    if (grape instanceof GarganegaGrape) {
                        const grapeLocation = grape.getLocation()
                        const grapeRegion = grapeLocation.getRegion()

                        console.log('GRAPE REGION')

                        if (grapeRegion instanceof VenetoRegion) {
                            return new Soave(
                                ItaliaCountry.Instance(),
                                VenetoRegion.Instance(),
                                grape
                            )
                        }
                    } else {
                        console.log('sorry')
                    }
                }
            }
        }

        return null
    }

    constructor(
        italiaCountry: ItaliaCountry,
        venetoRegion: VenetoRegion,
        garganegaGrape: GarganegaGrape
    ) {
        const countryOriginName = italiaCountry.getTitle()
        const grapeName = garganegaGrape.getGrapeName()
        const regionName = venetoRegion.getTitle()
        super('Soave', grapeName, countryOriginName, regionName, '')
    }
}

export class Muskadet extends Wine {
    static TryInstanceByPlayer(player: Player) {
        const grapes = player.getGrapes()

        const locations = player.getLocations()

        if (!grapes.length || !locations.length) {
            return null
        }

        for (let i = 0; i < locations.length; i++) {
            const location = locations[i]

            if (location instanceof FranceCountry) {
                for (let j = 0; j < grapes.length; j++) {
                    const grape = grapes[j]

                    if (grape instanceof GarganegaGrape) {
                        const grapeLocation = grape.getLocation()
                        const grapeRegion = grapeLocation.getRegion()

                        console.log('GRAPE REGION')

                        if (grapeRegion instanceof VenetoRegion) {
                            return new Soave(
                                ItaliaCountry.Instance(),
                                VenetoRegion.Instance(),
                                grape
                            )
                        }
                    } else {
                        console.log('sorry')
                    }
                }
            }
        }

        return null
    }

    constructor(
        italiaCountry: ItaliaCountry,
        venetoRegion: VenetoRegion,
        garganegaGrape: GarganegaGrape
    ) {
        const countryOriginName = italiaCountry.getTitle()
        const grapeName = garganegaGrape.getGrapeName()
        const regionName = venetoRegion.getTitle()
        super('Soave', grapeName, countryOriginName, regionName, '')
    }
}

export class VinhoVerdeWine extends Wine {
    constructor(
        portugalCountry: PortugalCountry,
        minhoRegion: Location,
        minnoRegion: BurgundyRegion,
        grape: Grape
    ) {
        super('Vinho Verde', grape.getGrapeName(), '', '', '')
    }
}
