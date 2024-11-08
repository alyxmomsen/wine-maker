import { IGrape } from './Grape.class'
import { IVineyard } from './Vineyard.class'

export interface IInventory<T> {
    addItem(item: T): boolean
    getItems(): T[]
}

export abstract class Inventory<T> implements IInventory<T> {
    protected items: T[]
    abstract addItem(item: T): boolean
    abstract getItems(): T[]

    constructor() {
        this.items = []
    }
}

export class GrapeInventory extends Inventory<IGrape> {
    addItem(item: IGrape): boolean {
        this.items.push(item)
        return true
    }

    getItems(): IGrape[] {
        return this.items
    }
}

export class VineyardInventory extends Inventory<IVineyard> {
    addItem(item: IVineyard): boolean {
        this.items.push(item)
        return true
    }

    getItems(): IVineyard[] {
        const items = this.items
        return items
    }
}
