import { Appellation, Country, Region } from "./Location.class";

// Singletone
export class FranceCountry extends Country {

    static instance: FranceCountry|null = null;

    static Instance():FranceCountry {
        
        if (FranceCountry.instance === null) {
            FranceCountry.instance = new FranceCountry();
            return FranceCountry.instance;
        }
        else {

            return FranceCountry.instance;
        }

    }

    private constructor() {
        super("France");
    }
}

// Singletone
export class ItalyCountry extends Country {

    private static instance: ItalyCountry | null = null;

    getAppelation(): Appellation|null {
        return null;
    }

    getCountry(): Country|null {
        return this;
    }

    getRegion(): Region|null {
        return null;
    }

    static Instance(): ItalyCountry {
        if (ItalyCountry.instance == null) {
            ItalyCountry.instance = new ItalyCountry();
            return ItalyCountry.instance;
        }
        else {
            return ItalyCountry.instance;
        }

    }

    private constructor() {
        super('Italy');
    }
}