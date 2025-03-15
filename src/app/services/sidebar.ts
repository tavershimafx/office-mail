import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SidebarService{
    sidebarOpen = false
    sidebar: Observable<boolean>
    private subscriber!: Subscriber<boolean>

    constructor(){
        this.sidebar = new Observable(x =>{
            this.subscriber = x
        })
    }

    toggleSidebar(){
        this.sidebarOpen = !this.sidebarOpen
        this.subscriber.next(this.sidebarOpen)
    }
}

@Injectable({
    providedIn: "root"
})
export class LoadMessageService{
    messageId = 0
    messenger: Observable<number>
    private subscriber!: Subscriber<number>

    constructor(){
        this.messenger = new Observable(x =>{
            this.subscriber = x
        })
    }

    loadMessage(id: number){
        this.messageId = id
        this.subscriber.next(this.messageId)
    }
}