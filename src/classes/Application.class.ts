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
import { Vineyard } from './Vineyard.class'
import { Soave } from './Wine.concrete'

export abstract class CreateWineStrategy {
    title: string;
    abstract canCreate(player: Player): boolean
    getTitle() {
        return this.title;
    }

    abstract factory(): any;

    constructor(title:string) {
        this.title = title;
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
        super('Soave');
    }
}

export class Application {
    countries: Country[]
    regions: Region[]
    appellations: Appellation[]
    player: Player
    grapes: Grape[]
    vineyards: Vineyard[]

    createWineStrategies: CreateWineStrategy[]

    update() {
        this.createWineStrategies.forEach(createStrategy => {
            const canCreate = createStrategy.canCreate(this.player);
            if (canCreate) {
                return {
                    factory: () => createStrategy.factory(), 
                    title: createStrategy.title,
                }
            }
        });
    }

    // hello world  , this is my love, and my love is long and as long as i am living  while
    // Hello world, this is my love, and my love will last as long as I live.

    constructor() {
        this.createWineStrategies = [new SoaveCreateWineStrategy()]

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

        this.player = new Player()

        // const garganega = new GarganegaGrape(VenetoRegion.Instance())
        const garganega = new GarganegaGrape(LoireValleyRegion.Instance())
        this.player.addGrape(garganega)
        this.player.addLocation(ItaliaCountry.Instance())
        this.player.addLocation(VenetoRegion.Instance())
        console.log(this.player)
        const result = Soave.TryInstanceByPlayer(this.player)
        const vnieyard = new Vineyard('My Vineyard', ItaliaCountry.Instance())
        console.log({ result })
    }
}

const str = `
    3.10.2024
    Sirens were wailing today.
    I could hear them muffled. From a distance.
    Earlier, I received an SMS that there would be a check of the notification systems.
`
