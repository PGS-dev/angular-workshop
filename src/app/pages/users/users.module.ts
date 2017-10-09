import { NgModule } from '@angular/core';
import { MaterialModule } from '../../all-material.module';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
      UsersComponent
  ]
})
export class UsersModule { }
