import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserModule} from './user/user.module';
import {UsersModule} from './users/users.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { LoginAreaComponent } from './login-area/login-area.component';
import {LoginAreaModule} from "./login-area/login-area.module";

@NgModule({
    imports: [
        CommonModule,
        DashboardModule,
        UserModule,
        UsersModule,
        LoginAreaModule
    ],
    declarations: []
})
export class PagesModule {
}