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

export class ItaliaCountry extends Country {
    private static instance: ItaliaCountry | null = null
    static Instance(): PortugalCountry {
        if (ItaliaCountry.instance === null) {
            ItaliaCountry.instance = new ItaliaCountry()
        }

        return ItaliaCountry.instance
    }

    private constructor() {
        super('Italia')
    }
}

export class FranceCountry extends Country {
    private static instance: FranceCountry | null = null
    static Instance(): FranceCountry {
        if (FranceCountry.instance === null) {
            FranceCountry.instance = new FranceCountry()
        }

        return FranceCountry.instance
    }

    private constructor() {
        super('France')
    }
}
