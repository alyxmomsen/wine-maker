import { ILocaction, Location } from "./Location.class";

export interface IGrape {
    
}


export class Grape implements IGrape {
    
    name: string;
    location: ILocaction;

    constructor(name:string , location:ILocaction) {
        this.name = name;
        this.location = location;
    }
}

