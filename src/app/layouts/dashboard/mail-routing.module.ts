import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailLayoutComponent } from './mail-layout.component';

const routes: Routes = [
  { path: '', component: MailLayoutComponent, children:[
    { path: 'inbox'}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MailRoutingModule {
  
}
