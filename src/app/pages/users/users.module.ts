import {NgModule} from "@angular/core";

import {environment} from "../../../environments/environment";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";

import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {UsersComponent} from "./users.component";
import {UsersRoutingModule} from "./users-routing.module";
import {UsersService} from "./users.service";
import {ButtonModule} from "../../components/button/button.module";
import {LoaderModule} from "../../components/loader/loader.module";
import {AuthService} from "../../common/services/auth/auth.service";
import {UsersModelFactory} from "../../common/models/users/users-model.factory";

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    LoaderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    UsersService,
    UsersModelFactory
  ]
})
export class UsersModule {}
