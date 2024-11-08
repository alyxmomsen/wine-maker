import { UniqIdRegisty } from '../../../utils/Uniq-id-registry'
import {
    Grape,
    IGrape,
    MelonDeBourgogneGrape,
    MuscadetGrape,
    SovingnonBlanGrape,
} from './Grape.class'
import { GarganegaGrape } from './Grape_concrete/Garganega.grape'
import { IInventory } from './Inventory-registry'
import { PlayerPerson } from './Player.class'
import { IVineyard } from './Vineyard.class'

export interface IGrapeFactory {
    canCreateGrape(player: PlayerPerson, vineyard: IVineyard , vineyardsInventory:IInventory<IVineyard>): boolean;
    create(player: PlayerPerson, vineyard: IVineyard , grapeInventory:IInventory<IGrape>): IGrape | null
    getTitle(): string
}



export abstract class GrapeFactory implements IGrapeFactory {
    protected uniqIdRegistry: UniqIdRegisty;
    
    //override
    abstract canCreateGrape(player: PlayerPerson, vineyard: IVineyard, vineyardsInventory:IInventory<IVineyard>): boolean;
    //override
    abstract getTitle(): string;
    //override
    abstract create(player: PlayerPerson, vineyard: IVineyard , grapeInventory:IInventory<IGrape>): IGrape | null;

    constructor(uniqIdRegistry: UniqIdRegisty , ) {
        this.uniqIdRegistry = uniqIdRegistry;
    }
}

export class GarganegaGrapeFactory extends GrapeFactory {
    canCreateGrape(player: PlayerPerson, vineyard: IVineyard , vineyardsInventory:IInventory<IVineyard>): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }
        return true;
        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: IVineyard , grapeInventory:IInventory<IGrape>): Grape | null {
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

            const newId = this.uniqIdRegistry.gen();
            const grape = new GarganegaGrape(newId, vineyard.getLocation())
            grapeInventory.addItem(grape);
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
    canCreateGrape(player: PlayerPerson, vineyard: IVineyard , vineyardsInventory:IInventory<IVineyard> ,): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }
        return true;
        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: IVineyard , grapeInventory:IInventory<IGrape>): Grape | null {
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

        if (/* isEqual */true) {
            const newId = this.uniqIdRegistry.gen();
            const grape = new MuscadetGrape(newId, vineyard.getLocation())
            grapeInventory.addItem(grape);
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
    canCreateGrape(player: PlayerPerson, vineyard: IVineyard , vineyardsInventory:IInventory<IVineyard>): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }
        return true;
        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: IVineyard , grapeInventory:IInventory<IGrape>): IGrape | null {
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

        if (/* isEqual */true) {
            const newId = this.uniqIdRegistry.gen();
            const grape = new SovingnonBlanGrape(newId, vineyard.getLocation())
            grapeInventory.addItem(grape);
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
    canCreateGrape(player: PlayerPerson, vineyard: IVineyard , vineyardsInventory:IInventory<IVineyard>): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return true;

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: IVineyard ,grapeInventory:IInventory<IGrape>): Grape | null {
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

        if (/* isEqual */true) {
            const newId = this.uniqIdRegistry.gen();
            const grape = new MelonDeBourgogneGrape(newId, vineyard.getLocation())
            grapeInventory.addItem(grape);
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Melon De Bourgogne'
    }
}

