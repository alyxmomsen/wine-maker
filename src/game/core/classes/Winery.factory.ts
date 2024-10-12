// import { IFactory } from "./Factory.class";

import { Player } from './Player.class'
import Winery from './Winery.class'

export interface IWineryFactory {
    canCreate(player: Player): boolean
    tryCreate(player: Player): Winery | null
}

export class WineryFactory implements IWineryFactory {
    private price: number

    canCreate(player: Player): boolean {
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

    tryCreate(player: Player): Winery | null {
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
