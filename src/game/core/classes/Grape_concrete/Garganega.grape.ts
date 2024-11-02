import { Grape } from '../Grape.class'
import { Location } from '../Location.class'

export class GarganegaGrape extends Grape {
    constructor(location: Location) {
        super('Garganega', location)
    }
}
