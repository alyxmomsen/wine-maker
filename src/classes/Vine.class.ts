export interface IVine {}

// export interface IVineSingletone extends IVine {

// }

export class Vine implements IVine {
    name: string

    constructor(name: string) {
        this.name = name
    }
}
