import { IGrape } from "./Grape.class";
import { IVineyard } from "./Vineyard.class";

export interface  IInventory<T> {
    getItems(): T[];
    addItem(item: T): boolean;
}

export abstract class Inventory<T> implements IInventory<T> {
    
    protected items: T[];
    // protected owner

    addItem(item: T): boolean {
        this.items.push(item);
        return true;
    }
    abstract getItems(): T[];

    constructor(/* owner:IPerson */) {
        this.items = [];
    }
}

export class VineyardInventory extends  Inventory<IVineyard>  {
    
    getItems(): IVineyard[] {
        return this.items;
    }
}

export class GrapeInventory extends  Inventory<IGrape>  {

    getItems(): IGrape[] {
        return this.items;
    }
}

