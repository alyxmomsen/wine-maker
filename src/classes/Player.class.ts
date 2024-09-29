import { randomId } from '../utils/utils'
import { Grape } from './Grape.class'
import { Appellation, Country, Region } from './Location.class'
import { GrapeProxy } from './Proxy.class'

// Singletone
export class Player {
    private Id: string
    private money: number

    private appellations: Appellation[]
    private countries: Country[]
    private regions: Region[]
    /* --- */
    private grapeBearers: GrapeProxy[]

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
        const grapeBearer = grape.createProxy(this)
        this.grapeBearers.push(grapeBearer)
    }

    getGrapeBearers() {
        return this.grapeBearers
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
        this.grapeBearers = []
        /*  */
        this.money = 1_000_000
        this.Id = randomId(50)
    }
}
