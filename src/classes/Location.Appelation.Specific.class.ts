import { Appellation} from "./Location.class";
import { LoireValleyRegion } from "./Location.specific.class";

// Singletone
export class MuscadetAppelation extends Appellation {

    private static instance: MuscadetAppelation | null = null;

    static Instance(loireValley:LoireValleyRegion): MuscadetAppelation {
        if (MuscadetAppelation.instance == null) {
            MuscadetAppelation.instance = new MuscadetAppelation(loireValley);
            return MuscadetAppelation.instance;
        }
        else {
            return MuscadetAppelation.instance;
        }
    }
    
    private constructor(loireValley:LoireValleyRegion) {
        super(loireValley , "Muskadet (appellation)");
    }
}