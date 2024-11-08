import { IGrape } from './Grape.class'
import { IPerson } from './Player.class';
import { IVineyard } from './Vineyard.class'

export interface IInventory<S,T> {
    addItem(item: T): boolean
    // getItems(): T[]
    getItems(): MapIterator<[number, T]>
    getOwnerSubject(): S;

}

export abstract class Inventory<S,T> implements IInventory<S,T> {
    // protected items: T[]

    ownerSubject: S;

    protected items: Map<number, T>;

    abstract addItem(item: T): boolean
    // abstract getItems(): T[]
    abstract getItems(): MapIterator<[number, T]>
    abstract getOwnerSubject(): S;

    constructor(ownerSubject:S) {
        this.ownerSubject = ownerSubject;
        this.items = new Map();
    }
}

export class GrapeInventory extends Inventory<IVineyard,  IGrape> {
    addItem(item: IGrape): boolean {
        // this.items.push(item)
        this.items.set(item.getId() , item);
        return true
    }

    getItems(): /* IGrape[] */MapIterator<[number ,IGrape]> {
        return this.items.entries()
    }

    getOwnerSubject(): IVineyard {
        return this.ownerSubject;
    }
}

export class VineyardInventory extends Inventory<IPerson, IVineyard> {
    addItem(item: IVineyard): boolean {
        this.items.set(item.getId() , item);
        return true
    }

    getItems(): MapIterator<[number,IVineyard]> {
        const items = this.items
        return items.entries()
    }
    getOwnerSubject(): IPerson {
        return this.ownerSubject;
    }
}
