import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserResolver} from "./user.resolver";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserResolver
    ]
})
export class UserModule {
}
