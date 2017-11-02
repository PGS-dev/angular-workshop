import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//modules
import { MaterialModule } from './all-material.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './pages/user/user.module';

//components
import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { LoginComponent } from './pages/login/login.component';

//services
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { LoginService } from './services/login/login.service';

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
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //UsersModule,
  ],
  providers: [AuthGuardService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
