import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoneLayoutComponent } from './none-layout.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { ForgotPasswordComponent } from '@pages/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: NoneLayoutComponent, children:[
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class NoneRoutingModule {
  
}
