import { Player } from "./Player.class";

export interface IStrategy {
    canCreate(player: Player): boolean ;
}

export abstract class Strategy implements IStrategy {
    abstract canCreate(player: Player): boolean 

    constructor() {

    }
}

export abstract class CanCreateStrategy extends Strategy {

    constructor() {
        super();
    }
}


