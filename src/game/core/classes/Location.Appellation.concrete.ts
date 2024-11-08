import { Appellation } from './Location.class'
import { FranceCountry, PortugalCountry } from './Location.Country.concrete'
import { LoireValleyRegion, MinhoRegion } from './Location.Region.concrete'

export class MuskadetAppellation extends Appellation {
    private static instance: MuskadetAppellation | null = null
    static Instance(id: number): MuskadetAppellation {
        if (MuskadetAppellation.instance === null) {
            MuskadetAppellation.instance = new MuskadetAppellation(id)
        }

        return MuskadetAppellation.instance
    }

    private constructor(id: number) {
        super(
            id,
            LoireValleyRegion.Instance(id),
            FranceCountry.Instance(id),
            'Muskadet'
        )
    }
}

export class VinhoVerdeAppellation extends Appellation {
    private static instance: VinhoVerdeAppellation | null = null
    static Instance(id: number) {
        if (VinhoVerdeAppellation.instance === null) {
            VinhoVerdeAppellation.instance = new VinhoVerdeAppellation(id)
        }

        return VinhoVerdeAppellation.instance
    }

    private constructor(id: number) {
        super(
            id,
            MinhoRegion.Instance(id),
            PortugalCountry.Instance(id),
            'Vinho Verde'
        )
    }
}
