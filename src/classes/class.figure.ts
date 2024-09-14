interface IEntityFigure {

    setLink(elem: IEntityFigure|null): void;
    getLink(): IEntityFigure | null;
    addElem(elem: IEntityFigure): void;
    interactWith(elem: IEntityFigure): void;
    update(): void;
    getTitle(): string;
}

interface ILinkedEntity {

    next(): ILinkedEntity|null;
    getElem(): IEntityFigure;
}

export interface ILinkedList {
    getHead(): ILinkedEntity;
    add(elem:ILinkedEntity): ILinkedEntity;
    // remove(): ILinkedEntity;
    iterate(): void;
}

class LinkedEntity implements ILinkedEntity {

    private elem: IEntityFigure;
    private nextLink: ILinkedEntity | null;
    
    getElem(): IEntityFigure {
        return this.elem;
    }

    next(): ILinkedEntity | null {
        return this.nextLink;
    }

    constructor(elem:IEntityFigure , linkedEntity:ILinkedEntity | null) {
        this.elem = elem;
        this.nextLink = linkedEntity ;
    }
}

class EntityFigure implements IEntityFigure {

    private title: string;
    private link: IEntityFigure | null;

    getTitle(): string {
        return this.title;
    }

    addElem(elem: IEntityFigure): void {
        elem.setLink(this.getLink());
    }

    getLink(): IEntityFigure | null {
        return this.link;
    }

    setLink(elem: IEntityFigure): void {
        this.link = elem;  
    }

    interactWith(elem: IEntityFigure): void {
        
    }

    update(): void {
        let link = this.link;
        while (link) {
            this.interactWith(link);
            link = link.getLink();
        }
    }

    constructor(title: string) {
        this.title = title;
        this.link = null;
    }
}

abstract class EntityFigureDecorator implements IEntityFigure {

    entity: IEntityFigure;

    addElem(elem: IEntityFigure): void {
        this.entity.addElem(elem);
    }

    getLink(): IEntityFigure | null {
        return this.entity.getLink();
    }

    getTitle(): string {
        return this.entity.getTitle();
    }

    interactWith(elem: IEntityFigure): void {
        this.entity.interactWith(elem);
    }

    setLink(elem: IEntityFigure | null): void {
        this.entity.setLink(elem);
    }

    update(): void {
        this.entity.update();
    }

    constructor(entity:IEntityFigure) {
        this.entity = entity; 
    }
}

// abstract class LinkedList<T> implements ILinkedList<T> {

//     private head: ILinkedEntity<T>;

//     getHead():ILinkedEntity<T> {
//         return this.head;
//     }

//     add(elem: T): ILinkedEntity<T> {
//         const newLinkedEntity = new LinkedEntity<T>(elem, this.head);
//         this.head = newLinkedEntity;
//         return newLinkedEntity;
//     }
    
//     remove(): ILinkedEntity<T> {
//         return this.head;
//     }

//     iterate(): void {
//         let link:ILinkedEntity<T> | null = this.head;

//         while (link) {
//             link.getElem()
//             link = link.next();
//         } 
//     }

//     constructor(elem:T) {
//         this.head = new LinkedEntity<T>(elem , null);
//     }
// }

export class LinkedList {

    private head: ILinkedEntity|null;

    getHead():ILinkedEntity|null {
        return this.head;
    }

    add(elem: IEntityFigure): ILinkedEntity {
        const newLinkedEntity = new LinkedEntity(elem, this.head);
        this.head = newLinkedEntity;
        return newLinkedEntity;
    }

    // remove(): ILinkedEntity {
    //     return this.head;
    // }

    iterate(): void {
        let link:ILinkedEntity | null = this.head;
        while (link) {
            
            let otherLink = this.head;
            while (otherLink) {
                
                if (otherLink === link) {
                    
                    otherLink = otherLink.next();
                    continue;
                }

                link.getElem().interactWith(otherLink.getElem());
                otherLink = otherLink.next();
            }
            
            link.getElem().update();
            link = link.next();
        } 
    }

    constructor(elem:IEntityFigure|null = null) {
        this.head = elem ? new LinkedEntity(elem , null) : null;
    }
}

export const linkedList:LinkedList = new LinkedList();

linkedList.add(new EntityFigure("foo bar")) ;
linkedList.add(new EntityFigure("bar")) ;
linkedList.add(new EntityFigure("foo")) ;
linkedList.add(new EntityFigure("abc")) ;
linkedList.add(new EntityFigure("hello world")) ;
linkedList.add(new EntityFigure("baz"));

linkedList.iterate();
// linkedList.iterate();
// linkedList.iterate();
// linkedList.iterate();
// linkedList.iterate();

// const arr: IEntityFigure[] = [];
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());
// arr.push(new EntityFigure());


export class FiguresManager {

    private linkedList: LinkedList;


    update() {
        this.linkedList.iterate();
    }

    makeFigure() {


        this.linkedList.add(new EntityFigure("entity figure" + Date.now()));
    }

    constructor(linkedList:LinkedList) {
        this.linkedList = linkedList;
    }
}

class Looper {

    list: LinkedList;

    isRun: boolean;

    requestAnimationFrameId: number;

    createEntityFigure() {
        
    }

    run() {

        console.log('runnnnn');

        this.requestAnimationFrameId = requestAnimationFrame(this.run);
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameId);
    }

    constructor(list:LinkedList) {
        this.list = list;
        this.isRun = false;
        this.requestAnimationFrameId = 0;
    }

}

export const entitylooper = new Looper(linkedList);

// entitylooper.run();

// setTimeout(() => entitylooper.stop() , 2000);