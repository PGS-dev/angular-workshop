import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {UsersService} from '../../services/users.service';
import {MaterialModule} from '../../common-modules/material/material.module';


@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        HttpModule,
        MaterialModule
    ],
    declarations: [UsersComponent],
    providers: [UsersService]
})
export class UsersModule {
}
