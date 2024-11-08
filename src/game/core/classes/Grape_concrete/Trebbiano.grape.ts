import { Grape } from '../Grape.class'
import { Location } from '../Location.class'

export class TrebbianoGrape extends Grape {
    constructor(id:number ,location: Location) {
        super(id , 'Trebbiano', location)
    }
}
