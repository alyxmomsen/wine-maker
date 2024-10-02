import { Grape } from "./Grape.class";
import { Location } from "./Location.class";
import { Wine } from "./Wine.class";

export class Player {

    private grapes: Grape[];
    private locations: Location[];
    private wine: Wine[];

    getGrapes() {
        return this.grapes;
    }

    getLocations() {
        return this.locations;
    }

    addGrape (grape:Grape) {
        this.grapes.push(grape);
    }

    addLocation (location:Location) {
        this.locations.push(location);
    }

    addWine(wine:Wine) {
        this.wine.push(wine);
    }

    constructor() {
        this.grapes = [];
        this.locations = [];
        this.wine = [];
    }
}