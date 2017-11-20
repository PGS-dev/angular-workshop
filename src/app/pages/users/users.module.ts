import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MatListModule } from '@angular/material';
import { UsersService } from '../../shared/services/users.service';
import { usersRouter } from './users.router';
import { UsersResolver } from './users.resolve';
import { MatTableModule } from '@angular/material';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatTableModule,
    usersRouter,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [
    UsersComponent,
    NewUserFormComponent
  ],
  providers: [
    UsersService,
    UsersResolver
  ]
})

export class UsersModule { }
