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
import {UserModelFactory} from "../../common/models/user/user-model.factory";
import {UserDiffComponent} from "../../components/user-diff/user-diff.component";
import {StoreModule} from "@ngrx/store";
import {userEditReducer} from "../../state/user-edit/user-edit.reducer";
import {UserEditActionTypes} from "../../state/user-edit/user-edit-actions";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDiffComponent
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

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

    StoreModule.forFeature(UserEditActionTypes.UserEdit, userEditReducer)
  ],
  providers: [
    AuthService,
    UserService,
    UserModelFactory
  ]
})
export class UserModule {}
