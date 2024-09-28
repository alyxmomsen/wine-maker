import { Grape } from "./Grape.class";
import { Player } from "./Player.class";

export interface IGrapeMediator  {
    getGrapeName(): string;
    getGrapeId(): string;
}

abstract class Mediator  {

}

export class GrapeMediator implements IGrapeMediator {
    
    private grape: Grape;
    private user: Player;

    getGrapeName() {
        return this.grape.getName();
    }

    getGrapeId(): string {
        return this.grape.getId();
    }

    constructor(user:Player  , grape:Grape) {
        this.grape = grape;
        this.user = user;
    }
}