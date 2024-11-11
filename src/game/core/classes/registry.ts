import { IVineyard } from './Vineyard.class'

export interface IRegistry {
    getItems(): { personId: number; itemId: number }[]
    addItem(index: number, itemId: number): boolean
}

export abstract class Registry implements IRegistry {
    protected items: Map<number, number>

    getItems(): { personId: number; itemId: number }[] {
        return [...this.items.entries()].map((elem) => ({
            personId: elem[0],
            itemId: elem[1],
        }))
    }

    abstract addItem(index: number, itemId: number): boolean

    constructor() {
        this.items = new Map<number, number>()
    }
}

export class VineyardRegistry extends Registry {
    addItem(personId: number, itemId: number): boolean {
        const vineYard = this.items.get(personId)

        if (!vineYard) {
            this.items.set(personId, itemId)
            return true
        }

        return false
    }
}
