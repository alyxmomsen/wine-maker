import { Location } from './Location.class'

export interface IWinery {}

export default class Winery {
    private location: Location
    private technologies: any[]

    exec() {
        alert('fuck you mother fucker')
    }

    constructor(location: Location) {
        this.technologies = []
        this.location = location
    }
}
