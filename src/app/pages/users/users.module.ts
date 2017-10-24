import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MatListModule } from '@angular/material';
import { UsersService } from '../../shared/services/users.service';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    MatListModule
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})

export class UsersModule { }
