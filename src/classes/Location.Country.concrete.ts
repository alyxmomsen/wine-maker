import { Country } from "./Location.class"

export class Portugal extends Country {
    private static instance: Portugal | null = null
    static Instance(): Portugal {
        if (Portugal.instance === null) {
            Portugal.instance = new Portugal()
        }

        return Portugal.instance
    }

    private constructor() {
        super("Portugal")
    }
}


export class Italia extends Country {
    private static instance: Italia | null = null
    static Instance(): Portugal {
        if (Italia.instance === null) {
            Italia.instance = new Italia()
        }

        return Italia.instance
    }

    private constructor() {
        super("Italia")
    }
}