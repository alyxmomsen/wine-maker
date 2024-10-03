import { Appellation } from "./Location.class";
import { France } from "./Location.Country.concrete";
import { LoireValleyRegion } from "./Location.Region.concrete";

export class MuskadetAppellation extends Appellation {

    private static instance: MuskadetAppellation|null = null;
    static Instance() {
        if (MuskadetAppellation.instance === null) {
            MuskadetAppellation.instance = new MuskadetAppellation();
        }
        return MuskadetAppellation.instance;
    }

    private constructor() {
        super(LoireValleyRegion.Instance()  , France.Instance() , "Muskadet") ;
    }
} 