import { Enemy, IEntiy, Player } from './class.entity'
import { FiguresManager, linkedList } from './class.figure'
import { IRoom, RoomHell, RoomNuclear, RoomToxic } from './class.room'

export class TickMachine {
    protected lastTick: number
    protected interval: number
    execute(): boolean {
        const now = Date.now()
        if (now - this.lastTick >= this.interval) {
            this.lastTick = now
            return true
        } else {
            return false
        }
    }

    constructor(interval: number) {
        this.lastTick = 0
        this.interval = interval
    }
}

export class Application {
    tickMachine: TickMachine

    private requestAnimationFrameId: number

    private player: IEntiy
    private entities: IEntiy[]
    private rooms: IRoom[]

    private figuresManager: FiguresManager;

    getReqAnimFrId() {
        return this.requestAnimationFrameId
    }

    update() {
        if (this.tickMachine.execute()) {
            const entities: IEntiy[] = [...this.entities, this.player]
            this.rooms[Math.floor(Math.random() * this.rooms.length)].execute(
                entities[Math.floor(Math.random() * entities.length)]
            )
        }

        this.figuresManager.update();

        // console.log('run' /* , this.requestAnimationFrameId */);
        this.requestAnimationFrameId = requestAnimationFrame(() =>
            this.update()
        )
    }

    stop() {
        window.cancelAnimationFrame(this.requestAnimationFrameId)
    }

    start() {
        console.log('getting started')
        window.cancelAnimationFrame(this.requestAnimationFrameId)
        this.update();
    }

    getEntities() {
        return [...this.entities, this.player]
    }

    getRooms(): IRoom[] {
        return [...this.rooms]
    }

    constructor() {
        this.requestAnimationFrameId = 0
        this.entities = [new Enemy()]
        this.player = new Player()
        this.rooms = [new RoomHell(), new RoomNuclear(), new RoomToxic()]
        this.tickMachine = new TickMachine(999);


        this.figuresManager = new FiguresManager(linkedList);

        // this.figuresList.
    }
}
