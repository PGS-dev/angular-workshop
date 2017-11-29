import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MaterialModule } from './../../utils/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component-reactive.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private emailModel: string;
  private passwordModel: string;
  private isFormValid:boolean = false;

  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  submitLogin() {
    if (this.isFormValid) {
      console.log(this.emailModel, this.passwordModel);
    }
  }

}
