import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UserService} from "../../services/user.service";
import {SearchModule} from "../../components/search/search.module";
import {MatTableModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        SearchModule,
        MatTableModule
    ],
    declarations: [
        UsersComponent
    ],
    providers: [
        UserService
    ]
})
export class UsersModule {
}