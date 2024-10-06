import { Grape } from './Grape.class'
import { Location } from './Location.class'
import { Player } from './Player.class'
import { CanCreateStrategy } from './Strategy.class'

export class Vineyard {
    protected name: string
    protected location: Location
    protected grape: Grape[]
    protected owner: Player | null

    getLocation() {
        return this.location
    }

    getName() {
        return this.name
    }

    makeGrape(grape: Grape, vallet: null = null) {
        this.grape.push(grape)
    }

    constructor(name: string, location: Location, owner: Player | null = null) {
        this.name = name
        this.location = location
        this.grape = []
        this.owner = owner
    }
}

/* ************************************************************ */

export class CanCreateVineyardStrategy extends CanCreateStrategy {

    canCreate(player: Player): boolean {

        const amount = player.getGrapes().length;
        
        if (amount > 1) {
            console.log(
                'approved'
            );
        }
        else {
            console.log('denied');
        }
        
        return true;
    };

    constructor() {
        super();
    }
}

