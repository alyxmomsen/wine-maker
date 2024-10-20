import { Grape } from './Grape.class'
import { Location } from './Location.class'
import { ITransition } from './Transition.class'
import { Vineyard } from './Vineyard.class'
import { Wine } from './Wine.class'
import Winery from './Winery.class'

interface IPlayerPerson {
    update(): boolean
    decrementHealth(value: number): number
    incrementHealthByValue(value: number): number
    decremenentEffirEnergy(value: number): number
    // decrementMoneyValue(): number;
    // incrementMoneyValue(): number;
}

export class PlayerPerson implements IPlayerPerson {
    private effirEnergy: number
    private health: number
    private grapes: Grape[]
    private availableLocations: Location[]
    private currentLocation: Location | null
    private wine: Wine[]
    private vineyards: Vineyard[]
    private wineries: Winery[]
    private moneyAmount: number
    // private transitions: ITransition[]
    private name: string

    private restoreHealth() {
        if (this.health < 100) {
            if (this.getEffirEnergyValue() > 0) {
                const returnedValue = this.decremenentEffirEnergy(2)
                console.log({ returnedValue })
                this.incrementHealthByValue(returnedValue)
            }
        }
    }

    setName(value: string) {
        this.name = value
    }

    getName() {
        return this.name
    }

    // addTransition(transition: ITransition | null): boolean {
    //     if (transition) {
    //         this.transitions.push(transition)
    //         return true
    //     }

    //     return false
    // }

    // getTransitions(): ITransition[] {
    //     this.transitions
    //     return this.transitions
    // }

    addWinery(winery: Winery) {
        this.wineries.push(winery)
    }

    getWineries() {
        return this.wineries
    }

    incrementHealthByValue(value: number): number {
        const before = this.health
        this.health = this.health + Math.abs(value)

        console.log(before, this.health, value)
        return this.health - before
    }

    decrementHealth(value: number): number {
        this.health = this.health - Math.abs(value)
        return value
    }

    decremenentEffirEnergy(value: number): number {
        const before = this.effirEnergy
        this.effirEnergy -= Math.abs(value)
        return before - this.effirEnergy
    }

    getEffirEnergyValue(): number {
        return this.effirEnergy
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

    setCurrentLocation(location: Location | null) {
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

        // this.update(() => {})
        this.update()
    }

    getWine(): Wine[] {
        return this.wine
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

    /**
     *
     * @param value
     * @returns difference between before and after
     */
    decrementMoneyAmountByValue(value: number): number {
        const decrementValue = Math.abs(value)
        const moneyBeforeDecrement = this.moneyAmount
        this.moneyAmount = this.moneyAmount - decrementValue
        const moneyAfterDecrement = this.moneyAmount
        return moneyBeforeDecrement - moneyAfterDecrement
    }

    update() {
        // /* ----- */

        // this.transitions.forEach((transition) => {
        //     transition.update()
        // })

        // // clear finished transition

        // this.transitions = this.transitions.filter(
        //     (transition) => !transition.isDone()
        // )

        // /* ---- */
        this.restoreHealth()
        return true
    }

    constructor(name: string = 'no name') {
        this.grapes = []
        this.availableLocations = []
        this.wine = []
        this.vineyards = []
        this.wineries = []
        this.moneyAmount = 0
        this.currentLocation = null
        this.health = 100
        this.effirEnergy = 1000000
        // this.transitions = []
        this.name = name
    }
}
