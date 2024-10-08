import { title } from 'process'
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
import { Appellation, Country, Region } from './Location.class'
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
import { CanCreateVineyardStrategy, Vineyard } from './Vineyard.class'
import { Soave } from './Wine.concrete'
import { CanCreateStrategy } from './Strategy.class'

export abstract class CreateWineStrategy {
    title: string
    abstract canCreate(player: Player): boolean
    getTitle() {
        return this.title
    }

    abstract factory(): any

    constructor(title: string) {
        this.title = title
    }
}

export class SoaveCreateWineStrategy extends CreateWineStrategy {
    factory() {
        return (
            italiaCountry: ItaliaCountry,
            venettonRegion: VenetoRegion,
            garganegaGrape: GarganegaGrape
        ) => new Soave(italiaCountry, venettonRegion, garganegaGrape)
    }

    canCreate(player: Player): boolean {
        const grapes = player.getGrapes()
        let amount = 0

        grapes.forEach((grape) => {
            if (grape instanceof GarganegaGrape) {
                amount += grape.getAmount()
            }
        })

        return amount >= 100
    }

    constructor() {
        super('Soave')
    }
}

export class Application {
    private refresher: React.Dispatch<React.SetStateAction<number>> | null
    countries: Country[]
    regions: Region[]
    appellations: Appellation[]
    player: Player
    grapes: Grape[]
    vineyards: Vineyard[]
    canCreateStrategies: CanCreateStrategy[]

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

        this.canCreateStrategies = [new CanCreateVineyardStrategy()]

        this.countries = [
            FranceCountry.Instance(),
            ItaliaCountry.Instance(),
            PortugalCountry.Instance(),
        ]
        this.regions = [
            VenetoRegion.Instance(),
            LoireValleyRegion.Instance(),
            Medok.Instance(),
            BurgundyRegion.Instance(),
            MinhoRegion.Instance(),
        ]
        this.appellations = [
            MuskadetAppellation.Instance(),
            VinhoVerdeAppellation.Instance(),
        ]
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
        const garganega = new GarganegaGrape(LoireValleyRegion.Instance())
        const muskadeGrape = new MuscadetGrape(LoireValleyRegion.Instance())
        this.player.addGrape(garganega)
        this.player.addGrape(muskadeGrape)
        this.player.addLocation(ItaliaCountry.Instance())
        this.player.addLocation(VenetoRegion.Instance())
        console.log(this.player)
        const result = Soave.TryInstanceByPlayer(this.player)
        const vnineyard = new Vineyard('My Vineyard', ItaliaCountry.Instance())
        console.log({ result })

        this.update()
    }
}
