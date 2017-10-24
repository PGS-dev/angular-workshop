import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }
