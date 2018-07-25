import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { environment } from "../environments/environment";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from "./components/login/login.component";
import { ButtonModule } from "./components/button/button.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {userEditReducer} from "./reducers/user-edit.reducer";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    ReactiveFormsModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'AW3 NgRX Devtools',
      maxAge: 25
    })
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
