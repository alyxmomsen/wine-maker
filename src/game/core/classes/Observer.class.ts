export interface IObserver {}

export interface IObserveable {}

export class Observer implements IObserver {
    observeables: IObserveable[]

    watch() {
        this.observeables.forEach((elem) => {
            if (true) {
            }
        })
    }

    constructor() {
        this.observeables = []
    }
}

export class Observeable implements IObserveable {}
