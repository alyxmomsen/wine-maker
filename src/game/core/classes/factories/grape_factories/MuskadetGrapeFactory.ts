import { IGrape, MuscadetGrape } from "../../Grape.class"
import { GrapeFactory } from "./GrapeFactory"
import { GrapeInventory, VineyardInventory } from "../../Inventory"
import { PlayerPerson } from "../../Player.class"
import { IVineyard } from "../../Vineyard.class"

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