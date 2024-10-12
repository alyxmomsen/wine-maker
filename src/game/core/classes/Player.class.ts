import { Grape } from './Grape.class'
import { Location } from './Location.class'
import { Observer } from './Observer.class'
import { Vineyard } from './Vineyard.class'
import { Wine } from './Wine.class'

interface IPlayer {}

export class Player implements IPlayer {
    private potentialHealth: number
    private health: number
    private grapes: Grape[]
    private availableLocations: Location[]
    private currentLocation: Location | null
    private wine: Wine[]
    private vineyards: Vineyard[]
    private moneyAmount: number

    decrementPotentialHealth(value: number) {
        this.potentialHealth -= Math.abs(value)
    }

    getPotentialHealth(): number {
        return this.potentialHealth
    }

    getHealth(): number {
        return this.health
    }

    getVineyards() {
        return this.vineyards
    }

    getGrapes() {
        return this.grapes
    }

    getAvailableLocations() {
        return this.availableLocations
    }

    getCurrentLocation() {
        return this.currentLocation
    }

    setCurrentLocation(location: Location) {
        this.currentLocation = location
    }

    addGrape(grape: Grape) {
        this.grapes.push(grape)

        // update client
    }

    addLocation(location: Location) {
        this.availableLocations.push(location)

        // update client
    }

    addWine(wine: Wine) {
        this.wine.push(wine)

        // update client

        this.update(() => {})
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

    update(cb: () => void) {}

    constructor() {
        this.grapes = []
        this.availableLocations = []
        this.wine = []
        this.vineyards = []
        this.moneyAmount = 0
        this.currentLocation = null
        this.health = 100
        this.potentialHealth = 10000
    }
}
