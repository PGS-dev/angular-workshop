import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersRouter } from './users.router'

// Components
import { UsersComponent } from './users.component';

// Services
import { ApiService } from './../../services/api/api.service';

// Resolvers
import { UsersResolver } from './../users/users.resolve'


@NgModule({
  imports: [
    CommonModule,
    usersRouter  
  ],
  providers: [
    ApiService,
    UsersResolver

  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
