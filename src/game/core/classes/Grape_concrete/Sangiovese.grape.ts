import { Grape } from '../Grape.class'
import { Location } from '../Location.class'

export class SangioveseGrape extends Grape {
    constructor(location: Location) {
        super('Sangiovese', location)
    }
}
