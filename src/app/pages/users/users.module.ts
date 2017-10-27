import { NgModule } from '@angular/core';
import { MaterialModule } from '../../all-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UsersService } from '../../services/users.service';
import { usersRouter } from './users.router';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription }   from 'rxjs/Subscription';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// components
import { SearcherComponent } from '../../components/searcher/searcher.component';

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
    AngularFireAuthModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
	usersRouter,
    FormsModule
  ],
  declarations: [
      UsersComponent,
      SearcherComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
