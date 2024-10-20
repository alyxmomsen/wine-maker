// import { IFactory } from "./Factory.class";

import { PlayerPerson } from './Player.class'
import Winery from './Winery.class'

export interface IWineryFactory {
    canCreate(player: PlayerPerson): boolean
    tryCreate(player: PlayerPerson): Winery | null
}

export class WineryFactory implements IWineryFactory {
    private price: number

    canCreate(player: PlayerPerson): boolean {
        const location = player.getCurrentLocation()
        const money = player.getMoneyAmount()

        if (location === null) {
            return false
        }

        if (money < this.price) {
            return false
        }

        return true
    }

    tryCreate(player: PlayerPerson): Winery | null {
        const location = player.getCurrentLocation()
        const money = player.getMoneyAmount()

        if (location === null) {
            return null
        }

        if (money < this.price) {
            return null
        }

        const winery = new Winery(location)
        const playerMoneyRest = player.decrementMoneyAmountByValue(this.price)
        player.addWinery(winery)

        return winery
    }

    constructor() {
        this.price = 1000
    }
}
