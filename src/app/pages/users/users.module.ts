import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MatListModule } from '@angular/material';
import { UsersService } from '../../shared/services/users.service';
import { usersRouter } from './users.router';
import { UsersResolver } from './users.resolve';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    usersRouter
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UsersService,
    UsersResolver
  ]
})

export class UsersModule { }
