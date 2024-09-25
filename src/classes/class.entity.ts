export interface IEntiy {

    applyDamage(value: number): number;
    onHealthUpdate(cb: (value:number) => void): void;
    getHealth(): number;
}

abstract class Entity implements IEntiy {

    protected health: number
    protected hooks: ((value: number) => void)[];

    getHealth() {
        return this.health ;
    }

    protected update() {
        this.hooksExecutor();
    }

    abstract applyDamage(value: number): number;

    onHealthUpdate(cb:(value:number) => void): void {
        this.hooks.push(cb);
    }

    hooksExecutor() {
        this.hooks.forEach((hook) => {
            // console.log('health: ', this.health, value)
            hook(this.health);
        })
    }

    constructor(health: number) {
        this.health = health
        this.hooks = []
    }
}

export class Player extends Entity {
    applyDamage(value: number): number {
        // console.log('apply damage' , value , this.health);
        console.log('got damage');
        this.health -= value
        this.hooksExecutor();
        return this.health
    }

    constructor() {
        super(100)
    }
}

export class Enemy extends Entity {
    applyDamage(value: number): number {
        this.health -= value;
        this.hooksExecutor();
        return this.health
    }

    constructor() {
        super(150)
    }
}
