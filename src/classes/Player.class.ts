import { Grape } from './Grape.class'
import { Location } from './Location.class'
import { Observer } from './Observer.class'
import { Vineyard } from './Vineyard.class'
import { Wine } from './Wine.class'

interface IPlayer {}

export class Player implements IPlayer {
    
    private grapes: Grape[]
    private locations: Location[]
    private wine: Wine[]
    private vineyards: Vineyard[]
    private moneyAmount: number

    getGrapes() {
        return this.grapes
    }

    getLocations() {
        return this.locations
    }

    addGrape(grape: Grape) {
        this.grapes.push(grape)

        // update client
    }

    addLocation(location: Location) {
        this.locations.push(location)

        // update client
    }

    addWine(wine: Wine) {
        this.wine.push(wine)

        // update client

        this.update(() => {});
    }

    addVineyard(vineyard: Vineyard): Vineyard {
        this.vineyards.push(vineyard)
        
        return vineyard
    }

    getMoneyAmount() {
        return this.moneyAmount
    }

    setMoneyAmount(value: number) {
        this.moneyAmount = value
    }

    incrementMoneyAmountByValue(value: number) {
        const v = Math.abs(value)
        this.moneyAmount += v
    }

    decrementMoneyAmountByValue(value: number) {
        const v = Math.abs(value)
        this.moneyAmount -= v
    }

    update(cb:() => void) {
        
    }

    constructor() {
        this.grapes = []
        this.locations = []
        this.wine = []
        this.vineyards = []
        this.moneyAmount = 99
    }
}
