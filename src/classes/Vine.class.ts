
export interface IVine {

}

// export interface IVineSingletone extends IVine {

// }

export class Vine implements IVine {

    name: string;

    make() {
        
    }

    constructor(name:string) {
        this.name = name; 
    }
}

