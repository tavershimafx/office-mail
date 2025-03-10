import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailLayoutComponent } from './mail-layout.component';
import { MailComponent } from '@pages/mail/mail.component';

const routes: Routes = [
  { path: '', component: MailLayoutComponent, children:[
    { path: '', component: MailComponent },
    { path: 'inbox', component: MailComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MailRoutingModule {
  
}
