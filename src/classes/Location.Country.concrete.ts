import { Country } from './Location.class'

export class PortugalCountry extends Country {
    private static instance: PortugalCountry | null = null
    static Instance(): PortugalCountry {
        if (PortugalCountry.instance === null) {
            PortugalCountry.instance = new PortugalCountry()
        }

        return PortugalCountry.instance
    }

    private constructor() {
        super('Portugal')
    }
}

export class Italia extends Country {
    private static instance: Italia | null = null
    static Instance(): PortugalCountry {
        if (Italia.instance === null) {
            Italia.instance = new Italia()
        }

        return Italia.instance
    }

    private constructor() {
        super('Italia')
    }
}

export class France extends Country {

    private static instance: France | null = null
    static Instance(): France {
        if (France.instance === null) {
            France.instance = new France()
        }

        return France.instance
    }

    private constructor() {
        super('France')
    }
}
