import { Location } from "./Location.class";

export class Vineyard {

    protected name: string;
    protected location: Location;

    getLocation() {
        return this.location;
    }

    constructor(name: string, location: Location) {
        this.name = name; 
        this.location = location;
    }
}



