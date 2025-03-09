import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormGroup, CustomFormControl } from '@extensions/control.extensions';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
      "firstName": new CustomFormControl("first name", "", "a", Validators.compose([Validators.required])),
      "lastName": new CustomFormControl("last name", "", "a", Validators.compose([Validators.required])),
      "companyName": new CustomFormControl("company name", "", "a", Validators.compose([Validators.required])),
      "country": new CustomFormControl("country", "", "a", Validators.compose([Validators.required])),
      "phone": new CustomFormControl("phone", "", "a", Validators.compose([Validators.required])),
      "password": new CustomFormControl("password", "", "a", Validators.compose([Validators.required]))
    })
  
    submitLogin(){
      this.isSubmitting = true
      if(!this.loginForm.valid){
        return
      }
  
    }

    login(){
      this.router.navigateByUrl("/")
    }
}
