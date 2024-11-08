import { Country } from './Location.class'

export class PortugalCountry extends Country {
    private static instance: PortugalCountry | null = null
    static Instance(id:number): PortugalCountry {
        if (PortugalCountry.instance === null) {
            PortugalCountry.instance = new PortugalCountry(id)
        }

        return PortugalCountry.instance
    }

    private constructor(id:number) {
        super(id , 'Portugal')
    }
}

export class GermanyCountry extends Country {
    private static instance: GermanyCountry | null = null
    static Instance(id:number): GermanyCountry {
        if (GermanyCountry.instance === null) {
            GermanyCountry.instance = new GermanyCountry(id)
        }

        return GermanyCountry.instance
    }

    private constructor(id:number) {
        super(id , 'Germany')
    }
}

export class ItaliaCountry extends Country {
    private static instance: ItaliaCountry | null = null
    static Instance(id:number): PortugalCountry {
        if (ItaliaCountry.instance === null) {
            ItaliaCountry.instance = new ItaliaCountry(id)
        }

        return ItaliaCountry.instance
    }

    private constructor(id:number) {
        super(id , 'Italia')
    }
}

export class FranceCountry extends Country {
    private static instance: FranceCountry | null = null
    static Instance(id:number): FranceCountry {
        if (FranceCountry.instance === null) {
            FranceCountry.instance = new FranceCountry(id)
        }

        return FranceCountry.instance
    }

    private constructor(id:number) {
        super(id , 'France')
    }
}
