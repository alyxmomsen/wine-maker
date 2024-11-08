import { Grape } from '../Grape.class'
import { Location } from '../Location.class'

export class GarganegaGrape extends Grape {
    constructor(id:number ,location: Location) {
        super(id , 'Garganega', location)
    }
}
