import { UniqIdRegisty } from '../../../utils/Uniq-id-registry'
import {
    Grape,
    IGrape,
    MelonDeBourgogneGrape,
    MuscadetGrape,
    SovingnonBlanGrape,
} from './Grape.class'
import { GarganegaGrape } from './Grape_concrete/Garganega.grape'
import { GrapeInventory, VineyardInventory } from './Inventory'
import { IPerson, PlayerPerson } from './Player.class'
import { VineyardRegistry } from './registry'
import { IVineyard } from './Vineyard.class'

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

export class GarganegaGrapeFactory extends GrapeFactory {
    canCreateGrape(
        player: PlayerPerson,
        vineyard: IVineyard,
        vineyardsInventory: VineyardInventory,
        veineyardRegistry: VineyardRegistry
    ): boolean {
        let vineyardOwnerPass = false
        const playerCurrentLocation = player.getCurrentLocation()

        if (vineyard.getLocation() !== playerCurrentLocation) {
            return false
        }

        for (const inventoryVineyard of vineyardsInventory.getItems()) {
            const inventoryVineyardId = inventoryVineyard.getId()
        }
        return vineyardOwnerPass
        return vineyardOwnerPass && player.getMoneyAmount() >= 100
    }

    create(
        player: PlayerPerson,
        vineyard: IVineyard,
        grapeInventory: GrapeInventory
    ): Grape | null {
        if (player.getMoneyAmount() < 100) {
            return null
        }

        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        if (true) {
            const newId = this.uniqIdRegistry.gen()
            const grape = new GarganegaGrape(newId, vineyard.getLocation())
            grapeInventory.addItem(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Garganega'
    }
}

export class MuscadetGrapeFactory extends GrapeFactory {
    canCreateGrape(
        player: PlayerPerson,
        vineyard: IVineyard,
        vineyardsInventory: VineyardInventory
    ): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }
        return true
        return isEqual && player.getMoneyAmount() >= 100
    }

    create(
        player: PlayerPerson,
        vineyard: IVineyard,
        grapeInventory: GrapeInventory
    ): Grape | null {
        if (player.getMoneyAmount() < 100) {
            return null
        }
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        if (/* isEqual */ true) {
            const newId = this.uniqIdRegistry.gen()
            const grape = new MuscadetGrape(newId, vineyard.getLocation())
            grapeInventory.addItem(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Muscadet'
    }
}

export class SovingnonBlanGrapeFactory extends GrapeFactory {
    canCreateGrape(
        player: PlayerPerson,
        vineyard: IVineyard,
        vineyardsInventory: VineyardInventory
    ): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }
        return true
        return isEqual && player.getMoneyAmount() >= 100
    }

    create(
        player: PlayerPerson,
        vineyard: IVineyard,
        grapeInventory: GrapeInventory
    ): IGrape | null {
        if (player.getMoneyAmount() < 100) {
            return null
        }
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        if (/* isEqual */ true) {
            const newId = this.uniqIdRegistry.gen()
            const grape = new SovingnonBlanGrape(newId, vineyard.getLocation())
            grapeInventory.addItem(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Sovingnon Blan'
    }
}

export class MelonDeBourgogneGrapeFactory extends GrapeFactory {
    canCreateGrape(
        player: PlayerPerson,
        vineyard: IVineyard,
        vineyardsInventory: VineyardInventory
    ): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return true

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(
        player: PlayerPerson,
        vineyard: IVineyard,
        grapeInventory: GrapeInventory
    ): Grape | null {
        if (player.getMoneyAmount() < 100) {
            return null
        }
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        if (/* isEqual */ true) {
            const newId = this.uniqIdRegistry.gen()
            const grape = new MelonDeBourgogneGrape(
                newId,
                vineyard.getLocation()
            )
            grapeInventory.addItem(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Melon De Bourgogne'
    }
}
