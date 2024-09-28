import { IAmount, IPrice } from "./Application.class";
import { ILocaction, Lisence, Location } from "./Location.class";

export interface IGrape {
    
}


export class Grape implements IGrape , IAmount {
    
    private name: string;
    private location: ILocaction;
    private amount: number;
    private lisence: Lisence|null;

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

    constructor(name:string , location:ILocaction , amount:number) {
        this.name = name;
        this.location = location;

        this.amount = amount;

        this.lisence = location.makeLicense(null , this);
    }
}

