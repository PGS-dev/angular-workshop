import {NgModule} from "@angular/core";

import {environment} from "../../../environments/environment";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";

import {UserComponent} from "./user.component";
import {UserService} from "./user.service";
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "./user-routing.module";
import {UserCreateComponent} from "../user-create/user-create.component";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "../../components/button/button.module";
import {LoaderModule} from "../../components/loader/loader.module";
import {AuthService} from "../../common/services/auth/auth.service";

@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    ButtonModule,
    LoaderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class UserModule {}
