import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { LoadMessageService } from "src/app/services/sidebar";

@Directive({
    selector: "[inboxMessage]"
})
export class InboxDirective{
    @Input() inboxMessage?: number

    constructor(private el: ElementRef, private messageService: LoadMessageService){

    }

    @HostListener("click") onClick(){
        this.messageService.loadMessage(this.inboxMessage!)
    }
}