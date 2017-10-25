import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UsersService} from '../../services/users.service';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [UserComponent],
    providers: [UsersService]
})
export class UserModule {
}
