import { randomId } from "../utils/utils";
import { IAmount, IPrice } from "./Application.class";
import { ILocaction, LisenceMediator, Location } from "./Location.class";
import { GrapeMediator } from "./Mediator.class";
import { Player } from "./Player.class";

export interface IGrape {
    getLisence(): LisenceMediator | null;
    getName(): string;
    createMediator(owner: Player): GrapeMediator;
    getId(): string;
}


export class Grape implements IGrape, IAmount {
    
    static Ids: string[] = [];
    private id: string;
    private name: string;
    private location: ILocaction;
    private amount: number;
    private lisence: LisenceMediator|null; // mediator between Location , Player  , Grape

    setAmount(value:number): number {
        this.amount = value;
        return this.amount;
    }

    getAmount(): number {
        return this.amount;
    }

    getName(): string  {
        return this.name;
    }

    getLisence(): LisenceMediator|null {
        return this.lisence;
    }

    createMediator(owner:Player) : GrapeMediator {
        return new GrapeMediator(owner , this);
    }

    getId(): string {
        return this.id;
    }    

    constructor(name:string , location:ILocaction , amount:number , owner:Player|null = null) {
        this.name = name;
        this.location = location
        this.amount = amount;
        this.lisence = location.makeLicense(owner, this);
        this.id = randomId(50) ;
        Grape.Ids.push(this.id);
    }
} 

