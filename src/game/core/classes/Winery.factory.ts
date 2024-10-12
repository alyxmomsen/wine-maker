// import { IFactory } from "./Factory.class";

import { Player } from './Player.class'
import Winery from './Winery.class'

export interface IWineryFactory {
    canCreate(player: Player): boolean
    try(player: Player): Winery | null
}

export class WineryFactory implements IWineryFactory {
    private price: number

    canCreate(player: Player): boolean {
        const location = player.getCurrentLocation()
        const money = player.getMoneyAmount()

        if (money >= this.price) {
            return true
        }

        return false
    }

    try(player: Player): Winery | null {
        const location = player.getCurrentLocation()
        const money = player.getMoneyAmount()

        if (location === null) {
            return null
        }

        if (money < this.price) {
            return null
        }

        return new Winery(location)
    }

    constructor() {
        this.price = 1000
    }
}
