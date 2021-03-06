import {NgModule} from "@angular/core";

import {environment} from "../../../environments/environment";

import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireStorageModule} from "angularfire2/storage";

import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {UsersComponent} from "./users.component";
import {UsersRoutingModule} from "./users-routing.module";
import {UsersService} from "./users.service";
import {ButtonModule} from "../../components/button/button.module";
import {LoaderModule} from "../../components/loader/loader.module";
import {AuthService} from "../../common/services/auth/auth.service";
import {UsersModelFactory} from "../../common/models/users/users-model.factory";
import {StoreModule} from "@ngrx/store";
import {AuthActionTypes} from "../../state/auth/auth-actions";
import {authReducer} from "../../state/auth/auth.reducer";
import {MatButtonModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from "@angular/material";

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
    AngularFireStorageModule,

    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,

    StoreModule.forFeature(AuthActionTypes.Auth, authReducer)
  ],
  providers: [
    AuthService,
    UsersService,
    UsersModelFactory
  ]
})
export class UsersModule {}
