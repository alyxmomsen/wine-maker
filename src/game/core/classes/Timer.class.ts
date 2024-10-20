export class Timer {
    private started: number;
    private finish: number;

    check(): boolean {
        
        const now = Date.now();

        if (now < this.finish) {
            return false;
        }

        return true;
    }

    constructor(value:number) {
        const now = Date.now();
        this.started = now;
        this.finish = now + value;
    }

}