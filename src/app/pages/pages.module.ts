import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule, UserModule, UsersModule, LoginModule
  ],
  exports: [
    UserModule, UsersModule, LoginModule
  ],
  declarations: []
})
export class PagesModule { }
