import { Updating } from '../updating/upd.class'
import { Grape } from './Grape.class'
import {
    GarganegaGrapeFactory,
    IGrapeFactory,
    MelonDeBourgogneFactory,
    MuscadetGrapeFactory,
    SovingnonBlanGrapeFactory,
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
    SoaveWineFactory,
    CraftWineFactory,
    IWineFactory,
    VinhoVerdeWineFactory,
} from './WineFactory'
import { IWineryFactory, WineryFactory } from './Winery.factory'
import { VineyardFactory } from './WineyardFactory'

export class GameFacade {
    private refresher: React.Dispatch<React.SetStateAction<number>> | null
    countries: Country[]
    player: Player
    grapes: Grape[]
    vineyards: Vineyard[]
    vineyardFactory: VineyardFactory
    wineFactories: IWineFactory[]
    grapeFactories: IGrapeFactory[]
    wineryFactories: IWineryFactory[]
    observer: Observer

    updater: Updating

    update(): boolean {
        this.player.update()

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
        this.wineFactories = [
            new SoaveWineFactory(),
            new VinhoVerdeWineFactory(),
        ]
        this.grapeFactories = [
            new GarganegaGrapeFactory(),
            new MuscadetGrapeFactory(),
            new SovingnonBlanGrapeFactory(),
            new MelonDeBourgogneFactory(),
        ]

        this.wineryFactories = [new WineryFactory()]

        this.update()
        this.updater = new Updating(1000)

        const upd = () => {
            if (this.updater.try()) {
                this.update()
            }

            requestAnimationFrame(upd)
        }

        window.requestAnimationFrame(() => upd())
    }
}
