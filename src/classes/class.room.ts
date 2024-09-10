import { DamageFire, DamageNuclear, DamageToxic, IDamage } from './class.damage'
import { IEntiy } from './class.entity'

export interface IRoom {
    execute(entity: IEntiy): void
    onAttack(cb: (value: string) => void): void
}

abstract class Room implements IRoom {
    protected title: string
    protected damage: IDamage
    protected hooks: ((value: string) => void)[]
    abstract execute(entity: IEntiy): void
    onAttack(cb: (value: string) => void): void {
        this.hooks.push((value: string) => cb(value))
    }

    hooksExecutor() {
        this.hooks.forEach((hook) => hook(this.title))
    }
    constructor(damage: IDamage, title: string) {
        this.damage = damage
        this.hooks = []
        this.title = title
    }
}

export class RoomNuclear extends Room {
    execute(entity: IEntiy): void {
        entity.applyDamage(this.damage.attack())
        this.hooksExecutor()
    }

    constructor() {
        super(new DamageNuclear(), 'Nuclear')
    }
}

export class RoomHell extends Room {
    execute(entity: IEntiy): void {
        entity.applyDamage(this.damage.attack())
        this.hooksExecutor()
    }

    constructor() {
        super(new DamageFire(), 'Hell')
    }
}

export class RoomToxic extends Room {
    execute(entity: IEntiy): void {
        entity.applyDamage(this.damage.attack())
        this.hooksExecutor()
    }
    constructor() {
        super(new DamageToxic(), 'Toxic')
    }
}
