import { randomName } from '../../../utils/utils'
import { WineryFactory } from './factories/Winery.factory'
import { Location } from './Location.class'
import { Wine } from './Wine.class'

export interface IWinery {
    getLocationName(): string
    getLocation(): Location
    getName(): string
    getId(): number
    getWines(): Wine[]
    addWine(wine: Wine): Wine | null
}

export default class Winery implements IWinery {
    private id: number
    private name: string
    private location: Location
    private technologies: any[]
    private wines: Wine[]

    addWine(wine: Wine): Wine | null {
        this.wines.push(wine)

        return null
    }

    getWines(): Wine[] {
        return this.wines
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    exec() {
        alert('fuck you mother fucker')
    }

    getLocationName(): string {
        return this.location.getTitle()
    }

    getLocation(): Location {
        return this.location
    }

    constructor(location: Location) {
        this.technologies = []
        this.location = location
        this.name = randomName(5)
        this.id = Math.floor(Math.random() * 100000)
        this.wines = []
    }
}
