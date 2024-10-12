import {
    GarganegaGrape,
    Grape,
    MelonDeBourgogne,
    MuscadetGrape,
    SovingnonBlanGrape,
} from './Grape.class'
import { ItaliaCountry } from './Location.Country.concrete'
import { Player } from './Player.class'
import { Vineyard } from './Vineyard.class'

export interface IGrapeFactory {
    canCreateGrape(player: Player, vineyard: Vineyard): boolean
    create(player: Player, vineyard: Vineyard): Grape | null
    getTitle(): string
}

export class GarganegaGrapeFactory implements IGrapeFactory {
    canCreateGrape(player: Player, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: Player, vineyard: Vineyard): Grape | null {
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
            const grape = new GarganegaGrape(vineyard.getLocation())
            player.addGrape(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Garganega'
    }

    constructor() {}
}

export class MuscadetGrapeFactory implements IGrapeFactory {
    canCreateGrape(player: Player, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: Player, vineyard: Vineyard): Grape | null {
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
            const grape = new MuscadetGrape(vineyard.getLocation())
            player.addGrape(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Muscadet'
    }

    constructor() {}
}

export class SovingnonBlanGrapeFactory implements IGrapeFactory {
    canCreateGrape(player: Player, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: Player, vineyard: Vineyard): Grape | null {
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
            const grape = new SovingnonBlanGrape(vineyard.getLocation())
            player.addGrape(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Sovingnon Blan'
    }

    constructor() {}
}

export class MelonDeBourgogneFactory implements IGrapeFactory {
    canCreateGrape(player: Player, vineyard: Vineyard): boolean {
        let isEqual = false
        for (const playerVineyard of player.getVineyards()) {
            if (playerVineyard === vineyard) {
                isEqual = true
                break
            }
        }

        return isEqual && player.getMoneyAmount() >= 100
    }

    create(player: Player, vineyard: Vineyard): Grape | null {
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
            const grape = new MelonDeBourgogne(vineyard.getLocation())
            player.addGrape(grape)
            player.decrementMoneyAmountByValue(100)
            return grape
        }

        return null
    }

    getTitle(): string {
        return 'Melon De Bourgogne'
    }

    constructor() {}
}

// MelonDeBourgogne
