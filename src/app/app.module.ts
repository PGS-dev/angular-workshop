import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { environment } from "../environments/environment";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { ServiceWorkerModule } from '@angular/service-worker';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatToolbarModule } from "@angular/material";

import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from "./components/login/login.component";
import { ButtonModule } from "./components/button/button.module";

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
    BrowserAnimationsModule,
    ButtonModule,

    MatToolbarModule,
    MatButtonModule,

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
