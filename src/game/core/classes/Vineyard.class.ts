import { IGrape } from './Grape.class'
import {
    GrapeInventory as GrapeInventory,
    IInventory,
} from './Inventory-registry'
import { Location } from './Location.class'
import { PlayerPerson } from './Player.class'

export interface IVineyard {

    getLocation(): Location
    getName(): string
    addGrape(grape: IGrape, vallet: null): void
    getGrape(): IInventory<IVineyard,IGrape>
    getGrapeInventory(): IInventory<IVineyard,IGrape>
    getId(): number;
}

export class Vineyard implements IVineyard {
    protected name: string
    protected location: Location
    protected grapeInventory: IInventory<IVineyard,IGrape>
    protected owner: PlayerPerson | null
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

    getGrape():IInventory<IVineyard,IGrape> {
        return this.grapeInventory
    }

    getGrapeInventory(): IInventory<IVineyard , IGrape> {
        return this.grapeInventory;
    }

    getId(): number {
        return this.id;
    }

    constructor(
        id: number,
        name: string,
        location: Location,
        owner: PlayerPerson | null = null
    ) {
        this.grapeInventory = new GrapeInventory(this)

        this.id = id
        this.name = name
        this.location = location
        this.owner = owner
    }
}
