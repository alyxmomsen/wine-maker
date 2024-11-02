import { MuskadetAppellation } from "../Location.Appellation.concrete";
import { ItaliaCountry } from "../Location.Country.concrete";
import { MinhoRegion } from "../Location.Region.concrete";
import { Wine } from "../Wine.class";

export class ChiantiWine extends Wine {

    constructor() {
        super(
            'Chianti', [], '', '', ''
        );
    }
}