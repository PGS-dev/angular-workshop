import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule, UserModule, UsersModule
  ],
  exports: [
    UserModule, UsersModule
  ],
  declarations: []
})
export class PagesModule { }
