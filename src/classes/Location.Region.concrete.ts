import { Region } from "./Location.class"
import { Italia, Portugal } from "./Location.Country.concrete"

export class Medok extends Region {
    private static instance: Medok | null = null
    static Instance(): Medok {
        if (Medok.instance === null) {
            Medok.instance = new Medok()
        }

        return Medok.instance
    }

    private constructor() {
        super(Portugal.Instance() , "Medok")
    }
}

export class Veneto extends Region {
    private static instance: Veneto | null = null
    static Instance(): Veneto {
        if (Veneto.instance === null) {
            Veneto.instance = new Veneto()
        }

        return Veneto.instance
    }

    private constructor() {
        super(Italia.Instance() , "Veneto")
    }
}