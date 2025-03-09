import { NgModule } from '@angular/core';
import { NoneLayoutComponent } from './none-layout.component';
import { NoneRoutingModule } from './none-routing.module';
import { LoginComponent } from '@pages/login/login.component';
import { RegisterComponent } from '@pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/components.module';
import { ForgotPasswordComponent } from '@pages/forgot-password/forgot-password.component';

@NgModule({
  declarations:[
    NoneLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    NoneRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class NoneModule {
  
}
