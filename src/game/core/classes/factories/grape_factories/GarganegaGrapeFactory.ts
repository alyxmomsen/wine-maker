import { IGrape } from "../../Grape.class"
import { GarganegaGrape } from "../../Grape_concrete/Garganega.grape"
import { GrapeFactory } from "./GrapeFactory"
import { GrapeInventory, VineyardInventory } from "../../Inventory"
import { PlayerPerson } from "../../Player.class"
import { VineyardRegistry } from "../../registry"
import { IVineyard } from "../../Vineyard.class"

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