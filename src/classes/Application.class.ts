
import { GarganegaGrape, Grape, Muscadet as MuscadetGrape, SovingnonBlanGrape } from './Grape.class'
import { MuskadetAppellation } from './Location.Appellation.concrete.class'
import { Appellation, Country, Region } from './Location.class'
import { France as FranceCountry, Italia as ItaliaCountry, PortugalCountry } from './Location.Country.concrete'
import { LoireValleyRegion, Medok, VenetoRegion } from './Location.Region.concrete'
import { Player } from './Player.class'
import { Vineyard } from './Vineyard.class'
import { Soave } from './Wine.class'

export class Application {

    countries: Country[];
    regions: Region[];
    appellations: Appellation[];
    player: Player
    grapes: Grape[];
    vineyards: Vineyard[];

    update() {

    }

    constructor() {
        this.countries = [
            FranceCountry.Instance(), 
            ItaliaCountry.Instance(),
            PortugalCountry.Instance(),
        ];

        this.regions = [
            VenetoRegion.Instance(),
            LoireValleyRegion.Instance(),
            Medok.Instance(),
        ];

        this.appellations = [
            MuskadetAppellation.Instance() ,
        ]

        this.vineyards = [];

        this.grapes = [
            new GarganegaGrape(VenetoRegion.Instance()),
            new SovingnonBlanGrape(LoireValleyRegion.Instance()),
            new MuscadetGrape(MuskadetAppellation.Instance()),
        ];

        this.player = new Player()
        
        // const garganega = new GarganegaGrape(VenetoRegion.Instance())
        const garganega = new GarganegaGrape(LoireValleyRegion.Instance());
        this.player.addGrape(garganega);
        this.player.addLocation(ItaliaCountry.Instance());
        this.player.addLocation(VenetoRegion.Instance());
        console.log(this.player);
        const result = Soave.TryInstanceByPlayer(this.player);
        const vnieyard = new Vineyard("My Vineyard" , ItaliaCountry.Instance());
        console.log({ result });
    }
}
