import { Appellation } from './Location.class'
import { FranceCountry, PortugalCountry } from './Location.Country.concrete'
import {
    LoireValleyRegion,
    MinhoRegion,
} from './Location.Region.concrete'

export class MuskadetAppellation extends Appellation {
    private static instance: MuskadetAppellation | null = null
    static Instance(): MuskadetAppellation {
        if (MuskadetAppellation.instance === null) {
            MuskadetAppellation.instance = new MuskadetAppellation()
        }

        return MuskadetAppellation.instance
    }

    private constructor() {
        super(
            LoireValleyRegion.Instance(),
            FranceCountry.Instance(),
            'Muskadet'
        )
    }
}

export class VinhoVerdeAppellation extends Appellation {
    private static instance: VinhoVerdeAppellation | null = null
    static Instance() {
        if (VinhoVerdeAppellation.instance === null) {
            VinhoVerdeAppellation.instance = new VinhoVerdeAppellation()
        }

        return VinhoVerdeAppellation.instance
    }

    private constructor() {
        super(MinhoRegion.Instance(), PortugalCountry.Instance(), 'Vinho Verde')
    }
}
