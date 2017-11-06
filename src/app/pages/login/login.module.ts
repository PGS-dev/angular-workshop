import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent]
})
export class LoginModule { }
