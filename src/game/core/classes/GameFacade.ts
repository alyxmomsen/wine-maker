import { Updating } from '../updating/upd.class'
import { IGrape } from './Grape.class'
import {
    GarganegaGrapeFactory,
    IGrapeFactory,
    MelonDeBourgogneGrapeFactory,
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
import { ITransition } from './Transition.class'
import {
    CraftWineFactory,
    IWineFactory,
} from './factories/wine_factories/WineFactory'
import { IWineryFactory, WineryFactory } from './factories/Winery.factory'
import { VineyardFactory } from './factories/WineyardFactory'
import { SoaveWineFactory } from './factories/wine_factories/Soave.wine.factory'
import { VinhoVerdeWineFactory } from './factories/wine_factories/VinhoVerde.Wine.Factory'
import { ChiantyWineFactory } from './factories/wine_factories/Chianty.wine.factory'
import { SangioveseGrapeFactory } from './factories/grape_factories/Sangiovese.grape.factory'
import { UniqIdRegisty } from '../../../utils/Uniq-id-registry'
import { PlayerPerson } from './Player.class'
import { IVineyard, Vineyard } from './Vineyard.class'
import { VineyardInventory } from './Inventory'

// import { Inventory, VineyardInventory } from './Inventory-registry'

export class GameFacade {
    private refresher: React.Dispatch<React.SetStateAction<number>> | null
    countries: Country[]
    player: PlayerPerson
    grapes: IGrape[]
    // vineyards: VineyardInventory;
    vineyardFactory: VineyardFactory
    wineFactories: IWineFactory[]
    grapeFactories: IGrapeFactory[]
    wineryFactories: IWineryFactory[]
    observer: Observer

    uniqIdRegistry: UniqIdRegisty

    vineyardInventory: VineyardInventory;

    // ownerRegistry: OwnerRegistry

    private transitions: ITransition[]

    updater: Updating

    // addGrape(grape:IGrape) {
    //     this.grapes.push(grape);
    // }

    // getGrapes():IGrape[] {
    //     return this.grapes;
    // }

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
        this.uniqIdRegistry = new UniqIdRegisty()

        
        // this.ownerRegistry = new OwnerRegistry()
        
        this.grapes = []
        
        this.transitions = []
        
        this.vineyardFactory = new VineyardFactory(this.uniqIdRegistry)
        this.observer = new Observer()
        this.refresher = dispatcher
        const franceCountry = FranceCountry.Instance(this.uniqIdRegistry.gen())
        franceCountry.addRegions([
            Medok.Instance(this.uniqIdRegistry.gen()),
            BurgundyRegion.Instance(this.uniqIdRegistry.gen()),
        ])
        const italyCountry = ItaliaCountry.Instance(this.uniqIdRegistry.gen())
        
        italyCountry.addRegions([
            VenetoRegion.Instance(this.uniqIdRegistry.gen()),
            LoireValleyRegion.Instance(this.uniqIdRegistry.gen()),
        ])
        
        italyCountry.addAppellations([
            MuskadetAppellation.Instance(this.uniqIdRegistry.gen()),
        ])
        
        const portugalCountry = PortugalCountry.Instance(
            this.uniqIdRegistry.gen()
        )
        
        portugalCountry.addRegions([
            MinhoRegion.Instance(this.uniqIdRegistry.gen()),
        ])
        
        portugalCountry.addAppellations([
            VinhoVerdeAppellation.Instance(this.uniqIdRegistry.gen()),
        ])
        const germanyCountry = GermanyCountry.Instance(
            this.uniqIdRegistry.gen()
        )
        
        this.countries = [
            franceCountry,
            italyCountry,
            portugalCountry,
            germanyCountry,
        ]
        // this.vineyards = new 
        this.grapes = []
        this.player = new PlayerPerson()
        this.vineyardInventory = new VineyardInventory();
        this.wineFactories = [
            new SoaveWineFactory(),
            new VinhoVerdeWineFactory(),
            new CraftWineFactory('Craft Wine',100),
            new ChiantyWineFactory(),
        ]
        this.grapeFactories = [
            new GarganegaGrapeFactory(this.uniqIdRegistry),
            new MuscadetGrapeFactory(this.uniqIdRegistry),
            new SovingnonBlanGrapeFactory(this.uniqIdRegistry),
            new MelonDeBourgogneGrapeFactory(this.uniqIdRegistry),
            new SangioveseGrapeFactory(this.uniqIdRegistry),
        ]

        this.wineryFactories = [new WineryFactory()]

        this.update()
        this.updater = new Updating(1000)

        const upd = () => {
            if (this.updater.try()) {
                console.log('updated');
                this.update()
            }

            requestAnimationFrame(upd)
        }

        window.requestAnimationFrame(() => upd())
    }
}
