import { NgModule } from "@angular/core";
import { TextInputComponent } from "./text-input/text-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LeftNavComponent } from "./left-nav/left-nav.component";
import { InboxComponent } from "./inbox/inbox.component";
import { MailMessageComponent } from "./mail-message/mail-message.component";

const components = [
    TextInputComponent,
    LeftNavComponent,
    InboxComponent,
    MailMessageComponent
]

@NgModule({
    declarations: [...components],
    imports: [CommonModule, FormsModule],
    exports: [...components]
})
export class ComponentsModule{

}