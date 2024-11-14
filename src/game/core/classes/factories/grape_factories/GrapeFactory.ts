import { UniqIdRegisty } from '../../../../../utils/Uniq-id-registry'
import {
    Grape,
    IGrape,
    MelonDeBourgogneGrape,
    MuscadetGrape,
    SovingnonBlanGrape,
} from '../../Grape.class'
import { GarganegaGrape } from '../../Grape_concrete/Garganega.grape'
import { GrapeInventory, VineyardInventory } from '../../Inventory'
import { IPerson, PlayerPerson } from '../../Player.class'
import { VineyardRegistry } from '../../registry'
import { IVineyard } from '../../Vineyard.class'

export interface IGrapeFactory {
    canCreateGrape(
        player: IPerson,
        vineyard: IVineyard,
        vineyardsInventory: VineyardInventory,
        vineyardRegistry: VineyardRegistry
    ): boolean
    create(
        player: IPerson,
        vineyard: IVineyard,
        grapeInventory: GrapeInventory
        // grape
    ): IGrape | null
    getTitle(): string
}

export abstract class GrapeFactory implements IGrapeFactory {
    protected uniqIdRegistry: UniqIdRegisty

    //override
    abstract canCreateGrape(
        player: PlayerPerson,
        vineyard: IVineyard,
        vineyardsInventory: VineyardInventory,
        vineyardRegistry: VineyardRegistry
    ): boolean
    //override
    abstract getTitle(): string
    //override
    abstract create(
        player: PlayerPerson,
        vineyard: IVineyard,
        grapeInventory: GrapeInventory
    ): IGrape | null

    constructor(uniqIdRegistry: UniqIdRegisty) {
        this.uniqIdRegistry = uniqIdRegistry
    }
}




