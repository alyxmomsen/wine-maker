import { UniqIdRegisty } from '../../../utils/Uniq-id-registry'
import {
    Grape,
    IGrape,
    MelonDeBourgogneGrape,
    MuscadetGrape,
    SovingnonBlanGrape,
} from './Grape.class'
import { GarganegaGrape } from './Grape_concrete/Garganega.grape'
import { OwnerRegistry } from './OnwnerRightsRegister'
import { PlayerPerson } from './Player.class'
import { Vineyard } from './Vineyard.class'

export interface IGrapeFactory {
    canCreateGrape(player: PlayerPerson, vineyard: Vineyard): boolean
    create(player: PlayerPerson, vineyard: Vineyard , ownerRegistry:OwnerRegistry): IGrape | null
    getTitle(): string
}

export abstract class GrapeFactory implements IGrapeFactory {
    protected uniqIdRegistry: UniqIdRegisty;
    //override
    abstract canCreateGrape(player: PlayerPerson, vineyard: Vineyard): boolean;
    //override
    abstract getTitle(): string;
    //override
    abstract create(player: PlayerPerson, vineyard: Vineyard, ownerRegistry: OwnerRegistry): IGrape | null;

    constructor(uniqIdRegistry:UniqIdRegisty) {
        this.uniqIdRegistry = uniqIdRegistry;
    }
}

export class GarganegaGrapeFactory extends GrapeFactory {
    canCreateGrape(player: PlayerPerson, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: Vineyard , ownerRegistry:OwnerRegistry): Grape | null {
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

        if (isEqual) {

            const newId = this.uniqIdRegistry.gen();

            const grape = new GarganegaGrape(newId , vineyard.getLocation())
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Garganega'
    }

    constructor(uniqIdRegistry:UniqIdRegisty) {
        super(uniqIdRegistry);
    }
}

export class MuscadetGrapeFactory extends GrapeFactory {
    canCreateGrape(player: PlayerPerson, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: Vineyard): Grape | null {
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

        if (isEqual) {
            const newId = this.uniqIdRegistry.gen();
            const grape = new MuscadetGrape(newId, vineyard.getLocation())
            

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
    canCreateGrape(player: PlayerPerson, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: Vineyard): IGrape | null {
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

        if (isEqual) {
            const newId = this.uniqIdRegistry.gen();
            const grape = new SovingnonBlanGrape(newId , vineyard.getLocation())
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
    canCreateGrape(player: PlayerPerson, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: PlayerPerson, vineyard: Vineyard): Grape | null {
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

        if (isEqual) {
            const newId = this.uniqIdRegistry.gen();
            const grape = new MelonDeBourgogneGrape(newId , vineyard.getLocation())
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Melon De Bourgogne'
    }
}

