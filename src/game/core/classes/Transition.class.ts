import { Location } from './Location.class'
import { PlayerPerson } from './Player.class'
import { Timer } from './Timer.class'

export interface ITransition {
    update(/* gameUpdaterCallBack:() => void */): boolean
    isDone(): boolean
    getTo(): Location
    getSubj(): PlayerPerson
}

export class LocationTransition implements ITransition {
    private to: Location
    private from: Location | null
    private subject: PlayerPerson
    private isFinished: boolean
    private timer: Timer

    private done: boolean

    update(/* gameUpdaterCallBack:() => void */): boolean {
        if (this.timer.check()) {
            this.subject.setCurrentLocation(this.to)
            this.done = true
            // gameUpdaterCallBack();
            return true
        }
        // gameUpdaterCallBack()
        return false
    }

    isDone(): boolean {
        return this.done
    }

    getTo(): Location {
        return this.to
    }

    getSubj(): PlayerPerson {
        return this.subject
    }

    // factory method
    static Instance(
        subject: PlayerPerson,
        location: Location,
        allTransitions: ITransition[],
        time: number
    ): ITransition | null {
        const playerCurrentLocation = subject.getCurrentLocation()

        if (playerCurrentLocation === location) {
            return null
        }

        const subjTransitions = allTransitions.filter(
            (transition) => transition.getSubj() === subject
        )

        if (playerCurrentLocation === null && subjTransitions.length === 0) {
            return new LocationTransition(subject, location, 0)
        }

        for (const subjTransition of subjTransitions) {
            const to = subjTransition.getTo()
            if (to === location) {
                return null
            }
        }

        return new LocationTransition(subject, location, time)
    }

    private constructor(
        subject: PlayerPerson,
        location: Location,
        time: number
    ) {
        this.subject = subject
        this.isFinished = false

        const timer = new Timer(time)
        this.timer = timer

        this.from = subject.getCurrentLocation()
        subject.setCurrentLocation(null)
        this.to = location

        this.done = false
    }
}
