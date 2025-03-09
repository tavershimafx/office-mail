import { NgModule } from "@angular/core";
import { TextInputComponent } from "./text-input/text-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const components = [
    TextInputComponent
]

@NgModule({
    declarations: [...components],
    imports: [CommonModule, FormsModule],
    exports: [...components]
})
export class ComponentsModule{

}