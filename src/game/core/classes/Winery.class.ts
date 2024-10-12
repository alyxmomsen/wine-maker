import { Location } from './Location.class'

export interface IWinery {
    getLocationName(): string
}

export default class Winery {
    private location: Location
    private technologies: any[]

    exec() {
        alert('fuck you mother fucker')
    }

    getLocationName(): string {
        return this.location.getTitle()
    }

    getLocation(): Location {
        return this.location
    }

    constructor(location: Location) {
        this.technologies = []
        this.location = location
    }
}
