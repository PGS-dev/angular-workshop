import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './all-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UserModule } from './pages/user/user.module';
//import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    //UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
