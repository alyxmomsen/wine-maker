import { Grape } from './Grape.class'
import { Location } from './Location.class'
import { Vineyard } from './Vineyard.class'
import { Wine } from './Wine.class'

interface IPlayer {}

export class Player implements IPlayer {
    private refresher: React.Dispatch<React.SetStateAction<number>> | null
    private observer: undefined
    private grapes: Grape[]
    private locations: Location[]
    private wine: Wine[]
    private vineyards: Vineyard[]
    private moneyAmount: number;

    getGrapes() {
        return this.grapes
    }

    getLocations() {
        return this.locations
    }

    addGrape(grape: Grape) {
        this.grapes.push(grape)
    }

    addLocation(location: Location) {
        this.locations.push(location)
    }

    addWine(wine: Wine) {
        this.wine.push(wine)
    }

    addVineVineyard(vineyard: Vineyard): Vineyard {
        this.vineyards.push(vineyard)
        if (this.refresher) {
            this.refresher((current) => current + 1)
        }
        return vineyard
    }

    getMoneyAmount() {
        return this.moneyAmount;
    }

    setMoneyAmount(value:number) {
        this.moneyAmount = value;
    }

    incrementMoneyAmountByValue(value:number) {
        const v = Math.abs(value);
        this.moneyAmount += v;
    }

    decrementMoneyAmountByValue(value:number) {
        const v = Math.abs(value);
        this.moneyAmount -= v;
    }

    constructor(
        refresher: React.Dispatch<React.SetStateAction<number>> | null
    ) {
        this.grapes = [] ;
        this.locations = [] ;
        this.wine = [] ;
        this.vineyards = [] ;
        this.refresher = refresher ;
        this.moneyAmount = 999999999999999 ;
    }
}
