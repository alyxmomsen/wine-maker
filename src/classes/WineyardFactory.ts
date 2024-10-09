import { Player } from './Player.class'
import { Vineyard } from './Vineyard.class'

export class VineyardFactory {
    canCreateForPlayer(player: Player): boolean {
        if (player.getMoneyAmount() < 100) {
            return false
        }

        if (!player.getCurrentLocation()) {
            return false
        }

        return true
    }

    createForPlayer(player: Player): boolean {
        const playerCurrentLocation = player.getCurrentLocation()
        if (!playerCurrentLocation) {
            return false
        }

        player.addVineyard(
            new Vineyard('vineyard' + Date.now(), playerCurrentLocation, player)
        )
        player.decrementMoneyAmountByValue(1000)
        return true
    }

    constructor() {}
}
