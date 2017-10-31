import { NgModule } from '@angular/core';
import { MaterialModule } from '../../all-material.module';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

//services
import { AuthGuardService } from '../../services/auth-guard.service';

//firebase
import { firebaseConfig } from '../../config/config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
    declarations: [
      UserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
      AuthGuardService
  ]
})
export class UserModule { }
