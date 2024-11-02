import { randomName } from '../../../utils/utils'
import { Location } from './Location.class'

export interface IWinery {
    getLocationName(): string
    getLocation(): Location
    getName(): string
    getId(): number
}

export default class Winery implements IWinery {
    private id: number
    private name: string
    private location: Location
    private technologies: any[]

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
    }
}
