import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { UsersComponent } from './users.component';

// Services
import { ApiService } from './../../services/api/api.service';

// AngularMaterial
import { MaterialModule } from './../../materialModule/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService

  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
