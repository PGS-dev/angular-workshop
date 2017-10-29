import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { userRouter } from './user.router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    userRouter
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }
