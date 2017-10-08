import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    MatListModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
