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
import { PlayerPerson } from './Player.class'
import { ITransition } from './Transition.class'
import { Vineyard } from './Vineyard.class'
import {
    CraftWineFactory,
    IWineFactory,
} from './factories/wine_factories/WineFactory'
import { IWineryFactory, WineryFactory } from './factories/Winery.factory'
import { VineyardFactory } from './factories/WineyardFactory'
import { SoaveWineFactory } from './factories/wine_factories/Soave.wine.factory'
import { VinhoVerdeWineFactory } from './factories/wine_factories/VinhoVerde.Wine.Factory'
import { ChiantyWineFactory } from './factories/wine_factories/Chianty.wine.factory'
import { SangioveseGrape } from './Grape_concrete/Sangiovese.grape'
import { SangioveseGrapeFactory } from './factories/grape_factories/Sangiovese.grape.factory'

export class GameFacade {
    private refresher: React.Dispatch<React.SetStateAction<number>> | null
    countries: Country[]
    player: PlayerPerson
    grapes: Grape[]
    vineyards: Vineyard[]
    vineyardFactory: VineyardFactory
    wineFactories: IWineFactory[]
    grapeFactories: IGrapeFactory[]
    wineryFactories: IWineryFactory[]
    observer: Observer

    private transitions: ITransition[]

    updater: Updating

    addTransition(transition: ITransition | null) {
        if (transition) {
            this.transitions.push(transition)
            return true
        }

        return false
    }

    getTransitions(subj: PlayerPerson | null = null) {
        return this.transitions
    }

    update(): boolean {
        /* ----- */

        this.transitions.forEach((transition) => {
            transition.update()
        })

        // clear finished transition

        this.transitions = this.transitions.filter(
            (transition) => !transition.isDone()
        )

        /* ---- */

        this.player.decrementHealth(1)
        this.player.decrementMoneyAmountByValue(1)
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
        this.transitions = []

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
        this.player = new PlayerPerson()
        this.wineFactories = [
            new SoaveWineFactory(),
            new VinhoVerdeWineFactory(),
            new CraftWineFactory('Craft Wine'),
            new ChiantyWineFactory(),
        ]
        this.grapeFactories = [
            new GarganegaGrapeFactory(),
            new MuscadetGrapeFactory(),
            new SovingnonBlanGrapeFactory(),
            new MelonDeBourgogneFactory(),
            new SangioveseGrapeFactory(),
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
