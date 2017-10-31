import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { MaterialModule } from './all-material.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './pages/user/user.module';

//components
import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';

//services
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';

//firebase
import { firebaseConfig } from './config/config';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //UsersModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
