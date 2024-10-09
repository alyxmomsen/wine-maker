
import {
    GarganegaGrape,
    Grape,
    MelonDeBourgogne,
    Muscadet as MuscadetGrape,
    SovingnonBlanGrape,
} from './Grape.class'
import {
    MuskadetAppellation,
    VinhoVerdeAppellation,
} from './Location.Appellation.concrete'
import { Country } from './Location.class'
import {
    FranceCountry as FranceCountry,
    ItaliaCountry as ItaliaCountry,
    PortugalCountry,
} from './Location.Country.concrete'
import {
    LoireValleyRegion,
    Medok,
    BurgundyRegion,
    VenetoRegion,
    MinhoRegion,
} from './Location.Region.concrete'
import { Player } from './Player.class'
import { Vineyard } from './Vineyard.class'
import { SoaveWineFactory, WineFactory } from './WineFactory'

export class GameFacade {
    private refresher: React.Dispatch<React.SetStateAction<number>> | null
    countries: Country[]
    player: Player
    grapes: Grape[]
    vineyards: Vineyard[]

    wineFactories: WineFactory[];

    update() {
        this.refresh()
    }

    refresh(): void {
        if (this.refresher) {
            this.refresher((current) => current + 1)
            console.log('updateted')
        } else {
            console.log('not updated')
        }
    }

    setRefresher(dispatcher: React.Dispatch<React.SetStateAction<number>>) {
        this.refresher = dispatcher
    }

    constructor(
        dispatcher: React.Dispatch<React.SetStateAction<number>> | null = null
    ) {
        this.refresher = dispatcher
        const france = FranceCountry.Instance()
        france.addRegions([Medok.Instance(), BurgundyRegion.Instance()])
        const italy = ItaliaCountry.Instance()
        italy.addRegions([
            VenetoRegion.Instance(),
            LoireValleyRegion.Instance(),
        ])
        italy.addAppellations([
            MuskadetAppellation.Instance()
        ])
        const portugal = PortugalCountry.Instance()
        portugal.addRegions([MinhoRegion.Instance()])
        portugal.addAppellations([
            VinhoVerdeAppellation.Instance()
        ]);

        this.countries = [france, italy, portugal]
        this.vineyards = [
            new Vineyard('Deep Six Vineyard', MuskadetAppellation.Instance()),
            new Vineyard(
                'Tourniket Vineyard',
                VinhoVerdeAppellation.Instance()
            ),
        ]
        this.grapes = [
            new GarganegaGrape(VenetoRegion.Instance()),
            new SovingnonBlanGrape(LoireValleyRegion.Instance()),
            new MuscadetGrape(MuskadetAppellation.Instance()),
            new MelonDeBourgogne(MuskadetAppellation.Instance()),
        ]
        this.player = new Player(this.refresher)

        this.wineFactories = [
            new SoaveWineFactory()
        ];

        const garganega = new GarganegaGrape(LoireValleyRegion.Instance())
        const muskadeGrape = new MuscadetGrape(LoireValleyRegion.Instance())
        this.player.addGrape(garganega)
        this.player.addGrape(muskadeGrape)
        this.player.addLocation(ItaliaCountry.Instance())
        this.player.addLocation(VenetoRegion.Instance())
        console.log(this.player)
        this.update()
    }
}
