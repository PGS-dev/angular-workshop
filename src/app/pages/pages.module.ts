import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserModule} from './user/user.module';
import {UsersModule} from './users/users.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardModule,
        UserModule,
        UsersModule
    ]
})
export class PagesModule {
}