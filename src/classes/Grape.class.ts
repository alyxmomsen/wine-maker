import { IAmount, IPrice } from "./Application.class";
import { ILocaction, Location } from "./Location.class";

export interface IGrape {
    
}


export class Grape implements IGrape , IAmount {
    
    private name: string;
    private location: ILocaction;
    private amount: number;

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

    constructor(name:string , location:ILocaction , price:number , amount:number) {
        this.name = name;
        this.location = location;

        this.amount = amount;
    }
}

