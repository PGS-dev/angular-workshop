import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersRouter } from './users.router'

// Components
import { UsersComponent } from './users.component';

// Services
import { ApiService } from './../../services/api/api.service';


@NgModule({
  imports: [
    CommonModule,
    usersRouter  
  ],
  providers: [
    ApiService

  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
