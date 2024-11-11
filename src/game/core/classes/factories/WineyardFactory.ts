import { UniqIdRegisty } from '../../../../utils/Uniq-id-registry'
import { randomName } from '../../../../utils/utils'
import { VineyardInventory } from '../Inventory'
import { PlayerPerson } from '../Player.class'
import { IVineyard, Vineyard } from '../Vineyard.class'

export class VineyardFactory {
    uniqIdRegistry: UniqIdRegisty
    canCreateForPlayer(player: PlayerPerson): boolean {
        if (player.getMoneyAmount() < 100) {
            return false
        }

        if (!player.getCurrentLocation()) {
            return false
        }

        return true
    }

    createForPlayer(
        player: PlayerPerson,
        vineyardInventory: VineyardInventory
    ): boolean {
        const playerCurrentLocation = player.getCurrentLocation()
        if (!playerCurrentLocation) {
            return false
        }

        const newVineyard = new Vineyard(
            this.uniqIdRegistry.gen(),
            randomName(4),
            playerCurrentLocation,
            player
        )
        vineyardInventory.addItem(newVineyard)
        // alert(vineyardInventory.getItems().lensgth);
        player.decrementMoneyAmountByValue(1000)
        return true
    }

    constructor(uniqIdRegistry: UniqIdRegisty) {
        this.uniqIdRegistry = uniqIdRegistry
    }
}
