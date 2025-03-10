import { NgModule } from '@angular/core';
import { MailLayoutComponent } from './mail-layout.component';
import { MailRoutingModule } from './mail-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/components.module';
import { MailComponent } from '@pages/mail/mail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    MailLayoutComponent,
    MailComponent
  ],
  imports: [
    MailRoutingModule,
    FormsModule,
    ComponentsModule,
    CommonModule
]
})
export class DashboardModule {
  
}
