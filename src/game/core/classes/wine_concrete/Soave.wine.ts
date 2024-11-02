import { ChardonnayGrape, GarganegaGrape, IGrape, PinotBlancGrape, TrebbianoGrape } from "../Grape.class"
import { ItaliaCountry } from "../Location.Country.concrete"
import { VenetoRegion } from "../Location.Region.concrete"
import { Wine } from "../Wine.class"

export class SoaveWine extends Wine {
    constructor(
        italiaCountry: ItaliaCountry,
        venetoRegion: VenetoRegion,
        garganegaGrape: GarganegaGrape,
        trebbianoGrape: TrebbianoGrape | null = null,
        chardonnay: ChardonnayGrape | null = null,
        pinoBlanc: PinotBlancGrape | null = null
    ) {
        const countryOriginName = italiaCountry.getTitle()
        const regionName = venetoRegion.getTitle()

        const grapes:IGrape[] = [garganegaGrape]

        if (trebbianoGrape) {
            grapes.push(trebbianoGrape)
        }
        if (chardonnay) {
            grapes.push(chardonnay)
        }
        if (pinoBlanc) {
            grapes.push(pinoBlanc)
        }

        super(
            'Soave',
            // garganegaGrape,
            [...grapes],
            countryOriginName,
            regionName, 
            ''
        )
    }
}