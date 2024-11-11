import { IGrape } from './Grape.class'
import { GrapeInventory } from './Inventory'
import { Location } from './Location.class'
import { IPerson, PlayerPerson } from './Player.class'

export interface IVineyard {
    getLocation(): Location
    getName(): string
    addGrape(grape: IGrape, vallet: null): void
    getGrape(): IGrape[]
    getGrapeInventory(): GrapeInventory
    getId(): number
}

export class Vineyard implements IVineyard {
    protected name: string
    protected location: Location
    protected grapeInventory: GrapeInventory
    protected owner: IPerson | null
    protected id: number

    getLocation() {
        return this.location
    }

    getName() {
        return this.name
    }

    addGrape(grape: IGrape, vallet: null = null) {
        this.grapeInventory.addItem(grape)
    }

    getGrape(): IGrape[] {
        return this.grapeInventory.getItems()
    }

    getGrapeInventory(): GrapeInventory {
        return this.grapeInventory
    }

    getId(): number {
        return this.id
    }

    constructor(
        id: number,
        name: string,
        location: Location,
        owner: PlayerPerson | null = null
    ) {
        this.grapeInventory = new GrapeInventory()

        this.id = id
        this.name = name
        this.location = location
        this.owner = owner
    }
}
