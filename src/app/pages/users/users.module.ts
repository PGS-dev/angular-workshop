import { NgModule } from '@angular/core';
import { MaterialModule } from '../../all-material.module';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersService } from '../../services/users.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCx4tsJ82jzhJaX_CzobgLDWjUW-RtAY-U",
    authDomain: "frontersi-pgs.firebaseapp.com",
    databaseURL: "https://frontersi-pgs.firebaseio.com",
    projectId: "frontersi-pgs",
    storageBucket: "",
    messagingSenderId: "719517851114"
};

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
      UsersComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
