import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormGroup, CustomFormControl } from '@extensions/control.extensions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){
    this.loginForm.valueChanges.subscribe({
      next: (e) =>{
        this.isSubmitting = false
      }
    })
  }

  isSubmitting = false

  loginForm: CustomFormGroup = new CustomFormGroup({
    "email": new CustomFormControl("email", "", "an", Validators.compose([Validators.required, Validators.email])),
    "password": new CustomFormControl("password", "", "a", Validators.compose([Validators.required]))
  })

  submitLogin(){
    this.isSubmitting = true
    if(!this.loginForm.valid){
      return
    }

    this.router.navigateByUrl("/mail")
  }

  newAccount(){
    this.router.navigateByUrl("/register")
  }
}
