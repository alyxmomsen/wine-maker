import { Player } from "./Player.class";
import { Vineyard } from "./Vineyard.class";

export interface IStrategy {
    canCreate(player: Player): boolean;
    make(player: Player): boolean;
}

export abstract class Strategy implements IStrategy {
    abstract canCreate(player: Player): boolean 
    make(player: Player): boolean {
        return true;
    }

    abstract getData(): { title: string, factory: () => Vineyard };
    
    constructor() {

    }
}

export abstract class CanCreateStrategy extends Strategy {

    constructor() {
        super();
    }
}


