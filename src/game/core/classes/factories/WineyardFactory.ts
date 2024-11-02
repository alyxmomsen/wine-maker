import { randomName } from '../../../../utils/utils'
import { PlayerPerson } from '../Player.class'
import { Vineyard } from '../Vineyard.class'

export class VineyardFactory {
    canCreateForPlayer(player: PlayerPerson): boolean {
        if (player.getMoneyAmount() < 100) {
            return false
        }

        if (!player.getCurrentLocation()) {
            return false
        }

        return true
    }

    createForPlayer(player: PlayerPerson): boolean {
        const playerCurrentLocation = player.getCurrentLocation()
        if (!playerCurrentLocation) {
            return false
        }

        player.addVineyard(
            new Vineyard(randomName(4), playerCurrentLocation, player)
        )
        player.decrementMoneyAmountByValue(1000)
        return true
    }

    constructor() {}
}
