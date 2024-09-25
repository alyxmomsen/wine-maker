export interface IDamage {
    attack(): number;
}

abstract class Damage implements IDamage {

    protected value: number ;
    abstract attack(): number ;
    constructor(value: number) {
        this.value = value;
    }
}

export class DamageFire extends Damage {

    attack(): number {
        return this.value
    }

    constructor() {
        super(1);
    }
}

export class DamageToxic extends Damage {
    attack(): number {
        return this.value
    }
    constructor() {
        super(1)
    }
}

export class DamageNuclear extends Damage {
    attack(): number {
        return this.value
    }
    constructor() {
        super(1)
    }
}
