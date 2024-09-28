import { randomId } from '../utils/utils'
import { IAmount, IPrice } from './Application.class'
import { Grape } from './Grape.class'
import { Appellation, Country, Location, Region } from './Location.class'
import { GrapeProxy } from './Proxy.class'

// Singletone
export class Player {
    private Id: string
    private money: number

    private appellations: Appellation[]
    private countries: Country[]
    private regions: Region[]
    /* --- */
    private grapeBierers: GrapeProxy[]

    addAppellation(newAppellation: Appellation) {
        for (const appellation of this.appellations) {
            if (appellation === newAppellation) {
                return false
            }
        }

        this.appellations.push(newAppellation)
    }

    addRegion(region: Region) {
        this.regions.push(region)
    }

    addCountry(country: Country) {
        this.countries.push(country)
    }

    addGrapeMediator(grape: Grape) {
        
        const grapeBierer = grape.createProxy(this);
        this.grapeBierers.push(grapeBierer)
    }

    getGrapeMediators() {
        return this.grapeBierers
    }

    setMoney(value: number) {
        this.money = value
        return this.money
    }

    getMoney() {
        return this.money
    }

    static instance: Player | null = null
    static Instance(): Player {
        if (Player.instance === null) {
            Player.instance = new Player()
            return Player.instance
        } else {
            return Player.instance
        }
    }

    private constructor() {
        this.appellations = []
        this.regions = []
        this.countries = []
        /* --- */
        this.grapeBierers = []
        /*  */
        this.money = 1_000_000
        this.Id = randomId(50)
    }
}
