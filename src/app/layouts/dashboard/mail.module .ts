import { NgModule } from '@angular/core';
import { MailLayoutComponent } from './mail-layout.component';
import { MailRoutingModule } from './mail-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations:[
    MailLayoutComponent
  ],
  imports: [
    MailRoutingModule,
    FormsModule,
    ComponentsModule
]
})
export class DashboardModule {
  
}
