import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { environment } from "../environments/environment";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { UserCreateComponent } from "./pages/user-create/user-create.component";

import { AuthService } from "./common/services/auth/auth.service";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    LoginComponent,
    UserCreateComponent,
    MenuComponent,
    ButtonComponent,
    LoaderComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
