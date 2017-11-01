import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MaterialModule } from './../../utils/material.module';

import { UsersComponent } from './users.component';
import { CommunicationService } from './../../services/communication.service';
import { UserComponent } from './user/user.component';
//import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
    //UsersRoutingModule
  ],
  providers: [
    CommunicationService
  ],
  declarations: [UsersComponent, UserComponent]
})
export class UsersModule { }
