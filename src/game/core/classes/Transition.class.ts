import { Location } from "./Location.class";
import { PlayerPerson } from "./Player.class";
import { Timer } from "./Timer.class";


export interface ITransition {
    update(/* gameUpdaterCallBack:() => void */): boolean;
    isDone(): boolean;
}

export class LocationTransition implements ITransition {
    private to: Location;
    private from: Location|null;
    private subject: PlayerPerson;
    private isFinished: boolean;
    private timer: Timer;

    private done: boolean;
    

    update(/* gameUpdaterCallBack:() => void */):boolean {
        if (this.timer.check()) {
            this.subject.setCurrentLocation(this.to);
            this.done = true;
            // gameUpdaterCallBack();
            return true;

        }
        // gameUpdaterCallBack()
        return false;
    }

    isDone():boolean {
        return this.done;
    }

    constructor(subject:PlayerPerson , location:Location , time:number) {
        this.subject = subject;
        this.isFinished = false;

        const timer = new Timer(time);
        this.timer = timer;
        
        this.from = subject.getCurrentLocation();
        subject.setCurrentLocation(null);
        this.to = location;

        this.done = false;
    }

}