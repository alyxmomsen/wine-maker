import { IProduct } from "./Grape.class";
import { IPerson } from "./Player.class";


export interface IRegisterItem {

    getOwner(): IPerson|null;

    getSubject(): IProduct;

}

export class RegisterItem implements IRegisterItem {
    owner: IPerson|null;
    subject: IProduct;
    getOwner(): IPerson | null {
        return this.owner;
    }

    getSubject(): IProduct {
        return this.subject;
    }

    constructor(subject:IProduct , owner:IPerson|null) {
        this.subject = subject;
        this.owner = owner;
    }
}

export class OwnerRegistry {

    private items: IRegisterItem[];

    addItem(item:IRegisterItem):IRegisterItem|null {
        this.items.push(item);
        return item;
    }

    constructor() {
        
        this.items = [];

    }

}