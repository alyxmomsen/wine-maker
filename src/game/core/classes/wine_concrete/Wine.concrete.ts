import {
    ChardonnayGrape,
    GarganegaGrape,
    Grape,
    MelonDeBourgogneGrape,
    PinotBlancGrape,
    TrebbianoGrape,
} from '../Grape.class'
import { ItaliaCountry, PortugalCountry } from '../Location.Country.concrete'
import { BurgundyRegion, VenetoRegion } from '../Location.Region.concrete'
import { Wine } from '../Wine.class'

export class MuskadetWine extends Wine {
    constructor(
        italiaCountry: ItaliaCountry,
        venetoRegion: VenetoRegion,
        garganegaGrape: GarganegaGrape
    ) {
        const countryOriginName = italiaCountry.getTitle()
        const grapeName = garganegaGrape.getGrapeName()
        const regionName = venetoRegion.getTitle()
        super(
            'Soave',
            // garganegaGrape,
            [garganegaGrape],
            countryOriginName,
            regionName,
            ''
        )
    }
}

export class VinhoVerdeWine extends Wine {
    constructor(
        portugalCountry: PortugalCountry,
        minnoRegion: BurgundyRegion,
        grape: MelonDeBourgogneGrape
    ) {
        super('Vinho Verde', [grape], '', '', '')
    }
}

export class AstiWine extends Wine {}

export class ProseccoWine extends Wine {}
