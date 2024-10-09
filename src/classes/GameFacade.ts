import { Grape } from './Grape.class'
import {
    GarganegaGrapeFactory,
    IGrapeFactory,
    MuscadetGrapeFactory,
} from './GrapeFactory'
import {
    MuskadetAppellation,
    VinhoVerdeAppellation,
} from './Location.Appellation.concrete'
import { Country } from './Location.class'
import {
    FranceCountry,
    GermanyCountry,
    ItaliaCountry,
    PortugalCountry,
} from './Location.Country.concrete'
import {
    LoireValleyRegion,
    Medok,
    BurgundyRegion,
    VenetoRegion,
    MinhoRegion,
} from './Location.Region.concrete'
import { Observer } from './Observer.class'
import { Player } from './Player.class'
import { Vineyard } from './Vineyard.class'
import {
    MuskadetWineFactory,
    SoaveWineFactory,
    WineFactory,
} from './WineFactory'
import { VineyardFactory } from './WineyardFactory'

export class GameFacade {
    private refresher: React.Dispatch<React.SetStateAction<number>> | null
    countries: Country[]
    player: Player
    grapes: Grape[]
    vineyards: Vineyard[]
    wineFactories: WineFactory[]
    vineyardFactory: VineyardFactory
    grapeFactories: IGrapeFactory[]
    observer: Observer
    update(): boolean {
        const refresher = this.refresher
        if (refresher) {
            refresher((current) => current + 1)
        }
        return true
    }

    setUIRefresher(fn: React.Dispatch<React.SetStateAction<number>>) {
        this.refresher = fn
    }

    constructor(
        dispatcher: React.Dispatch<React.SetStateAction<number>> | null = null
    ) {
        this.vineyardFactory = new VineyardFactory()
        this.observer = new Observer()
        this.refresher = dispatcher
        const franceCountry = FranceCountry.Instance()
        franceCountry.addRegions([Medok.Instance(), BurgundyRegion.Instance()])
        const italyCountry = ItaliaCountry.Instance()

        italyCountry.addRegions([
            VenetoRegion.Instance(),
            LoireValleyRegion.Instance(),
        ])

        italyCountry.addAppellations([MuskadetAppellation.Instance()])

        const portugalCountry = PortugalCountry.Instance()

        portugalCountry.addRegions([MinhoRegion.Instance()])

        portugalCountry.addAppellations([VinhoVerdeAppellation.Instance()])
        const germanyCountry = GermanyCountry.Instance()

        this.countries = [
            franceCountry,
            italyCountry,
            portugalCountry,
            germanyCountry,
        ]
        this.vineyards = []
        this.grapes = []
        this.player = new Player()
        this.wineFactories = [new SoaveWineFactory(), new MuskadetWineFactory()]
        this.grapeFactories = [
            new GarganegaGrapeFactory(),
            new MuscadetGrapeFactory(),
        ]
        this.update()
    }
}
