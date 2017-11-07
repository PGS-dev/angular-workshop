import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UserService} from "../../services/user.service";
import {SearchModule} from "../../components/search/search.module";
import {MatTableModule} from "@angular/material";
import {UsersResolver} from "./users.resolver";

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
        UserService,
        UsersResolver
    ]
})
export class UsersModule {
}