import { Grape } from '../Grape.class'
import { Location } from '../Location.class'

export class SangioveseGrape extends Grape {
    constructor(id:number ,location: Location) {
        super(id , 'Sangiovese', location)
    }
}
