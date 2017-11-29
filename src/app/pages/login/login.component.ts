import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MaterialModule } from './../../utils/material.module';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component-reactive.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private emailModel: string;
  private passwordModel: string;
  private isFormValid:boolean = false;
  public hasLoginFailed:boolean = false;

  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService:AuthService) { }

  submitLogin() {
    this.hasLoginFailed = !this.authService.authenticate(this.loginForm.get('email').value, this.loginForm.get('password').value);
    console.log(this.hasLoginFailed);
  }

}
