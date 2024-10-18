import { GarganegaGrape, MelonDeBourgogneGrape } from './Grape.class'

import {
    ItaliaCountry,
    PortugalCountry,
} from './Location.Country.concrete'
import { BurgundyRegion, VenetoRegion } from './Location.Region.concrete'
import { Wine } from './Wine.class'

export class SoaveWine extends Wine {
    constructor(
        italiaCountry: ItaliaCountry ,
        venetoRegion: VenetoRegion ,
        garganegaGrape: GarganegaGrape ,
    ) {
        const countryOriginName = italiaCountry.getTitle()
        const grapeName = garganegaGrape.getGrapeName()
        const regionName = venetoRegion.getTitle()
        super('Soave', grapeName, countryOriginName, regionName, '')
    }
}

export class MuskadetWine extends Wine {
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
        minnoRegion: BurgundyRegion,
        grape: MelonDeBourgogneGrape ,
    ) {
        super('Vinho Verde', grape.getGrapeName(), '', '', '')
    }
}

export class AstiWine extends Wine {}

export class ProseccoWine extends Wine {}
