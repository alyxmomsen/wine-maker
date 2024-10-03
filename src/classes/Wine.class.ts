
import { GarganegaGrape } from './Grape.class'
import { France, Italia as ItaliaCountry } from './Location.Country.concrete'
import { VenetoRegion as VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'

export class Wine {
    title: string
    countryOrigin: string
    regionOrigin: string
    appellationOrigin: string
    grape: string

    constructor(
        title: string,
        grape: string,
        countryOrigin: string,
        regionOrigin: string,
        appellationOrigin: string
    ) {
        this.title = title
        this.countryOrigin = countryOrigin
        this.regionOrigin = ''
        this.appellationOrigin = ''
        this.grape = grape
    }
}

export class Soave extends Wine {
    static TryInstanceByPlayer(player: Player) {

        const grapes = player.getGrapes()
        const locations = player.getLocations()

        if (!grapes.length || !locations.length) {
            return null;
        }

        for (let i = 0; i < locations.length; i++) {
            const location = locations[i]

            if (location instanceof ItaliaCountry) {
                for (let j = 0; j < grapes.length; j++) {
                    const grape = grapes[j]

                    if (grape instanceof GarganegaGrape) {
                        const grapeRegion = grape.getRegion()

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

            if (location instanceof France) {
                for (let j = 0; j < grapes.length; j++) {
                    const grape = grapes[j]

                    if (grape instanceof GarganegaGrape) {
                        const grapeRegion = grape.getRegion()

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
