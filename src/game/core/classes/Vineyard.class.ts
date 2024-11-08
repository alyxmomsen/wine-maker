import { Grape, IGrape } from './Grape.class'
import { Location } from './Location.class'
import { PlayerPerson } from './Player.class'

export interface IVineyard {
    getLocation(): Location;
    getName(): string;
    addGrape(grape:IGrape , vallet:null): void;
}

export class Vineyard implements IVineyard {
    protected name: string
    protected location: Location
    protected grape: Grape[]
    protected owner: PlayerPerson | null

    getLocation() {
        return this.location
    }

    getName() {
        return this.name
    }

    addGrape(grape: Grape, vallet: null = null) {
        this.grape.push(grape)
    }

    constructor(
        name: string,
        location: Location,
        owner: PlayerPerson | null = null
    ) {
        this.name = name
        this.location = location
        this.grape = []
        this.owner = owner
    }
}
