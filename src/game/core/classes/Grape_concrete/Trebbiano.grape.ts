// import Grape from "../../../../components/grape";

import { Grape } from "../Grape.class";
import { Location } from "../Location.class";

export class TrebbianoGrape extends Grape {
    constructor(location: Location) {
        super('Trebbiano', location)
    }
}