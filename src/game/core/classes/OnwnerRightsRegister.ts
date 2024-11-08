import { Grape, IProduct } from './Grape.class'
import { Location } from './Location.class'
import { IPerson } from './Player.class'
import { IVineyard, Vineyard } from './Vineyard.class'

export abstract class IAdapter<T> {
    abstract getAdaptee(): T
}

export class VineyardRegistrySubjectAdapter
    extends IAdapter<Vineyard>
    implements IVineyard
{
    private adaptee: Vineyard

    addGrape(grape: Grape, vallet?: null): void {}

    getLocation(): Location {
        return this.adaptee.getLocation()
    }

    getName(): string {
        return this.adaptee.getName()
    }

    getAdaptee(): Vineyard {
        return this.adaptee
    }

    constructor(adaptee: Vineyard) {
        super()
        this.adaptee = adaptee
    }
}

export interface IRegisterItem {
    getOwner(): IPerson | null
    getSubject(): IProduct
}

export class RegisterItem implements IRegisterItem {
    owner: IPerson | null
    subject: IProduct

    getOwner(): IPerson | null {
        return this.owner
    }

    getSubject(): IProduct {
        return this.subject
    }

    constructor(subject: IProduct, owner: IPerson | null) {
        this.subject = subject
        this.owner = owner
    }
}

export class OwnerRegistry {
    private items: IRegisterItem[]

    addItem(item: IRegisterItem): IRegisterItem | null {
        this.items.push(item)
        return item
    }

    constructor() {
        this.items = []
    }
}
